const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const TodoListDBSchema = require(__dirname+"/DBSchemas/ToDoListSchema.js");
const ProjectDBSchema = require(__dirname+"/DBSchemas/ProjectSchema.js");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session({
    secret: 'user encryption.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/fordoDB", {useNewUrlParser:true});
mongoose.set("useCreateIndex", true);


// must use mongoose schema to define table for passport
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});



//hash salt password and save user into mongodb
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
let Project = ProjectDBSchema.createDB(mongoose);
let List = TodoListDBSchema.createDB(mongoose);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/projects", function(req, res){
    Project.find({}, function(err, foundProjects){
        if(err){
            res.send({express:err});
        }else{
            //const sendRes = {projects: foundProjects}
            res.send(foundProjects);
        }
    });

    
});
app.get("/register", function(req, res){
    res.send({lol:'haha'});
});

app.get("/:listName", function(req,res){
    listName = req.params.listName;
    List.findOne({name: listName}, function(err,foundList){
        if(err){
            res.send(err);
        }else{
            if(!foundList){
                const newList = new List({
                    name: listName,
                    items: []
                });
                newList.save();
                res.send(newList);
            }else{
                res.send(foundList);
            }
        }
    });
});

app.post("/register", function(req, res){
    
    const {email, password} = req.body.post;
    User.register({username: email}, password, function(err, user){
        if(err){
            res.send(err);
        }else{
            passport.authenticate("local")(req, res, function(){
                res.send("OK");
            })
        }
    })
});

app.post("/login", function(req,res){
    const {email, password} = req.body.post;
    // const email = req.body.username;
    // const password = req.body.password;
    const user = new User({
        username: email,
        password: password
    });

    req.login(user, function(err){
        if(err){
            
            res.send(err);
        } else{
            passport.authenticate("local")(req, res, function(){
                
                res.send("OK");
            });
        }
    });
});

app.post("/project", function(req,res){
    
    const {projName, projStatus, projOwner, projAssignee, projJira, projPala} = req.body.post;
    //const projTitle = __.capitalize(title);
    const insertProj = new Project({
        title: projName, 
        status: projStatus,
        owner: projOwner,
        assignee: projAssignee,
        jira: projJira,
        palamida: projPala
        //comments: comments
    });
    insertProj.save();
    res.send("/home")

});
app.post("/list", function(req,res){
    const {name, item} = req.body.post;
    List.findOne({name: name}, function(err, foundList){
        if(err){
            res.send(err);
        }else{
            foundList.items.push(item);
            foundList.save();
            res.send(foundList);
        }
    });


});

app.put("/list/:projName", function(req,res){
    const projName = req.params.projName;
    const itemList = req.body.post;
    List.updateOne(
        {name: projName},
        {$set: {'items': itemList}},
        {upsert: true},
        function(err){
            if(!err){
                res.send("List lpdated successfully");
            }else{
                res.send(err);
            }
            
        })


});

app.put("/project/:projId", function(req,res){
    const projId = req.params.projId;
    const {status, assignee, jira, palamida} = req.body.post;
    Project.updateOne(
        {_id: projId},
        {$set: {
            status : status,
            assignee : assignee,
            jira : jira,
            palamida : palamida}},
        function(err){
            if(!err){
                res.send("OK")
            }else{
                res.send(err);
            }
        } 
    )

});

app.listen(port, function(){
    console.log('Server started on port:'+port);
});