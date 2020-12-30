//req= Stands for request, The request that is incoming to that path right there
//res= Stands for response, Sends data back to the user after request is finished
// GET - is the page the user sees
// POST - is data being sent to the page

const express = require('express');
const app = express();
const router = express.Router();



//Tell our app which templating app we will use (PUG)
app.set("view engine", "pug");
app.set("views", "views");

var LogINpayload = {pageTitle: "Home Page"};
// when this site is accessed at the root level, do this function here.
//outputing a webpage to the user
router.get("/", (req, res, next) =>{
    res.status(200).render("login", LogINpayload);
});

module.exports = router;