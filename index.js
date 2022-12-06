
var express = require("express");
var app = express();

app.listen(443, () => {
    console.log("Mock API Server running on port 3000");
});

var responseJSON = {
    Server: "Paymentus Example",
    Hello: "World"
}

app.get("/test", (req, res, next) => {
    res.json(responseJSON);
});
