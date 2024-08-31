const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 3000;
let requestCount = 0;

app.use((req, res, next) => {
    const logObj = `${req.method} request came at ${req.url} on ${new Date().toLocaleString()}\n`;
    fs.appendFile("logs.txt", logObj, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log("Logs stored");
    });
    next();
})

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    requestCount = requestCount + 1;

    if(isNaN(a) || isNaN(b)) {
        return res.status(404).json({ message: "Provide both the numbers" })
    }

    return res.status(200).json({ ans: a*b });
})

app.get("/add", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    requestCount = requestCount + 1;

    if(isNaN(a) || isNaN(b)) {
        return res.status(404).json({ message: "Provide both the numbers" })
    }

    return res.status(200).json({ ans: a+b });
})

app.get("/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    requestCount = requestCount + 1;

    if(isNaN(a) || isNaN(b)) {
        return res.status(404).json({ message: "Provide both the numbers" })
    }

    if(b === 0) {
        return res.status(403).json({ message: "Cannot divide a number by 0" })
    }

    return res.status(200).json({ ans: a/b });
})

app.get("/subtract", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    requestCount = requestCount + 1;

    if(isNaN(a) || isNaN(b)) {
        return res.status(404).json({ message: "Provide both the numbers" })
    }

    return res.status(200).json({ ans: a-b });
})

app.get("/requestCount", (req, res) => {
    requestCount = requestCount + 1;
    res.json({ totalCount: requestCount })
})

app.listen(PORT, () => console.log("Server is listening on port", PORT));