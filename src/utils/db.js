const mongoose = require("mongoose");

const uri = "mongodb+srv://pablo:strangedays1984@cluster0-jc2di.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function() {
    console.log("Connection Successful!");
});