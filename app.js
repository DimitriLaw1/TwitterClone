//req= Stands for request, The request that is incoming to that path right there
//res= Stands for response, Sends data back to the user after request is finished
// GET - is the page the user sees
// POST - is data being sent to the page

// Creating a Server on Port Number 3001
const express = require('express');
const app = express();
const port = 3001;
const server = app.listen(port,()=>  console.log("Server listening on port " + port));

//Tell our server which templating app we will use
app.set("view engine", "pug");
app.set("views", "views");

// when this site is accessed at the root level, do this function here.
//outputing a webpage to the  user
app.get("/", (req, res, next) =>{

var payload = {
pageTitle: "Home"
};

    //status code for success, then render the TEMPLATE FILE PUG.Passing the payload object to render
res.status(200).render("home", payload);
});