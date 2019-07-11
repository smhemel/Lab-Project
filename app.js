var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lab_project", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, function() {
    console.log("Running....");
})
