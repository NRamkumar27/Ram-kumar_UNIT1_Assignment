var express = require('express');
var app = express();
var fs = require('fs');

var user= { "user2": {
    "name": "vijay nirmala",
    "password" : "nirmala@123",
    "Profession": "Dancing",
    "id": "2"
}}

// To get the list of user 
app.get('/listUsers', function (req,res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
}); });

//To add the user
app.post('/addusers', function(req,res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data=JSON.parse(data);
        data["User2"]=user["user2"];
        console.log(data);
        res.end(JSON.stringify(data));   
}); 
});

//To Get the specific user details through id
app.get('/:id',function(req,res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users[req.params.id]; 
        console.log(user);
        res.end(JSON.stringify(user));  
 });
});

// To delete the specific user 
app.delete('/deleteUser',function(req,res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + 2];
        console.log(data);
        res.end(JSON.stringify(data));         
    });
});

var server = app.listen(8001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server details: %s:%s", host, port);
});
