const express = require('express');

const app = express();

const PORT = 8000;

const patient = {
    name: "Harkirat",
    kidney: [
        true,
        false
    ]
}


app.get("/check", (req, res) => {
    const kidneyStatus = `Status of first kidney: ${patient.kidney[0] ? "working" : "not working"}. Status of second kidney: ${patient.kidney[1] ? "working" : "not working"}`;
    res.status(200).json({ condition: kidneyStatus });
});


app.post("/add", (req, res) => {
    if (patient.kidney.length === 2) {
        return res.status(403).json({ message: "You cannot have more than 2 kidneys" });
    } else if(patient.kidney.length === 1) {
        patient.kidney[1] = true;
        return res.status(201).json({ message: "New Kidney added", data: patient });
    }
    patient.kidney[0] = true;
    return res.status(201).json({ message: "New Kidney added", data: patient });
});


app.put("/replace", (req, res) => {
    const first = patient.kidney[0];
    const second = patient.kidney[1];
    if (first && second) {
        return res.status(403).json({ message: "Both kidneys are working fine" });
    }

    if (!first) {
        patient.kidney[0] = true;
        return res.status(201).json({ message: "First kidney has been replaced", data: patient });
    }

    patient.kidney[1] = true;
    return res.status(201).json({ message: "Second kidney has been replaced", data: patient });
});


app.delete("/remove", (req, res) => {
    if (patient.kidney.length === 1) {
        return res.status(403).json({ message: "You need atleast 1 kidney bro" });
    }
    patient.kidney.splice(1, 1);
    return res.status(201).json({ message: "Kidney Sold! Enjoy your money", data: patient });
});

app.listen(PORT, () => console.log("Server is listening on port", PORT));
