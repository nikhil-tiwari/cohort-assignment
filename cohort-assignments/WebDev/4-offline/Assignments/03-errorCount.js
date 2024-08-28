const express = require('express');

const app = express();

const PORT = 8000;

let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint


let count = 0;
app.get('/user', function(req, res) {
    count = count + 1;
    if(count%2 === 0) {
        throw new Error("User not found");
    }
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    count = count + 1;
    if(count%2 === 0) {
        throw new Error("User not found");
    }
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
    res.status(200).json({ errorCount });
});

app.use((err, req, res, next) => {
    errorCount = errorCount + 1;
    res.status(404).json({ message: "Something went wrong" })
})

app.listen(PORT, () => console.log("Server is listening on port", PORT));