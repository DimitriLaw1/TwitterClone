//req= Stands for request, The request that is incoming to that path right there
//res= Stands for response, Sends data back to the user after request is finished
// GET - is the page the user sees
// POST - is data being sent to the page

// Creating a Server on Port Number 3001
const express = require('express');
const app = express();
const port = 3001;
const server = app.listen(port,()=>  console.log("Server listening on port " + port));
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:Johncena243@cluster0.hqozc.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("database connection sucessful");
})
.catch((err) =>{
console.log("database connection error" + err);
})
//Tell our server which templating app we will use
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
// inserting the css from the public folder
app.use(express.static(path.join(__dirname, "public")));

//Routes (pages) having access to the login page
const loginRoute = require("./routes/loginRoutes");
const registerRoute = require("./routes/registerRoutes");
app.use("/login", loginRoute);
app.use("/register", registerRoute);

// when this site is accessed at the root level, do this function here.
//outputing a webpage to the  user
app.get("/", middleware.requireLogin, (req, res, next) =>{

var payload = {pageTitle: "Home Page"};

    //status code for success, then render the TEMPLATE FILE PUG.Passing the payload object to render
res.status(200).render("home", payload);
});