// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//TableList
var tableList = [
    {
    table: "",
    id: "",
    name: "",
    email: "",
    phone: "",
},
];

// WaitList
var waitList = [
    {
    table: "",
    id: "",
    name: "",
    email: "",
    phone: "",
},
];

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays all reservations
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    console.log(newTable);

    tableList.push(newTable);

    res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newWaitList = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    console.log(newWaitList);

    waitList.push(newWaitList);

    res.json(newWaitList);
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("http://localhost:" + PORT);
});