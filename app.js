var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");


mongoose.connect("mongodb://localhost/lab_project",function(err,db){
    if(err) throw err;
    console.log("database created.");
    db.close();
});
app.use(bodyParser.urlencoded({ extended: true}));


var camgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

var Campground = mongoose.model("Campground", camgroundSchema);
Campground.create({
    name: "Salmon Creek",
    image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiSod_L_K7jAhVNU30KHZV6CboQjRx6BAgBEAU&url=https%3A%2F%2Fhelpx.adobe.com%2Fstock%2Fhow-to%2Fvisual-reverse-image-search.html&psig=AOvVaw3O-YBEvPXNyz86sNeqDOL5&ust=1563006902200650"
}, function(err, campgound) {
    if(err) console.log(err);
    else console.log("Newly Careated");
});

app.listen(3000, function() {
    console.log("Running....");
})
