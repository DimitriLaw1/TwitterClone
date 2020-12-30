const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

// allows you to get the data that the user input
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {

    res.status(200).render("register");
})

router.post("/", (req, res, next) => {
// accessing all the data that the user inputs.. trim() removes the spaces before and after
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;

    var payload = req.body;

    if(firstName && lastName && username && email && password) {

    }
    else {
        payload.errorMessage = "Make sure each field has a valid value.";
        res.status(200).render("register", payload);
    }
})

module.exports = router;