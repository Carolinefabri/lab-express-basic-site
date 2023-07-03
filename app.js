const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Hello World, this is my first test page.");
});

app.get("/about", function(req, res) {
    fs.readFile("about.html", "utf8", function(err, data) {
        if (err) {
            res.send("My name is Carol, here is my first route page.");
        } else {
            res.send(data);
        }
    });
});

app.get("/hobbies", function(req, res) {
    res.send("A little about my hobbies.");
});

app.get("/galery", function(req, res) {
    res.send("Here are some pictures that I like.");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
