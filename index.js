"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "HOLA MUNDO, DESDE EL SERVIDOR",
    });
});
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.ENVIRONMENT,
    });
});
app.listen(PORT, function () {
    console.log("server is running on port:", PORT);
});
