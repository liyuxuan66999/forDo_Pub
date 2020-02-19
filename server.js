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
//hash salt password and save user into mongodb
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/projects", function(req, res){
    res.send({express:'express server is up'});
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
    console.log(email);
    console.log(password);
    const user = new User({
        username: email,
        password: password
    });

    req.login(user, function(err){
        if(err){
            
            res.send(err);
        } else{
            passport.authenticate("local")(req, res, function(){
                
                res.send("logged in!");
            });
        }
    });
});

app.listen(port, function(){
    console.log('Server started on port:'+port);
});