const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

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


const projectSchema = new mongoose.Schema({
    title: String,
    status: String,
    owner: String,
    assignee: String,
    jira: String,
    palamida: String
    //comments: [String]
});

//hash salt password and save user into mongodb
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
const Project = new mongoose.model("Project", projectSchema);

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
    res.send({lol:'bs'});
});
app.post("/register", function(req, res){
    
    const {email, password} = req.body.post;
    User.register({username: email}, password, function(err, user){
        if(err){
            res.send(err);
        }else{
            passport.authenticate("local")(req, res, function(){
                res.send("Registered!");
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
    console.log(req);
    const {title, status, owner, assignee, jira, palamida} = req.body;
    //const projTitle = __.capitalize(title);
    const insertProj = new Project({
        title: title, 
        status: status,
        owner: owner,
        assignee: assignee,
        jira: jira,
        palamida: palamida
        //comments: comments
    });
    insertProj.save();
    res.send("/home")

});

app.listen(port, function(){
    console.log('Server started on port:'+port);
});