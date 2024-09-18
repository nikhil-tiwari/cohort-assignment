const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/add", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(isNaN(a) || isNaN(b)) {
        return res.status(404).json({ message: "Provide both the numbers" })
    }

    return res.status(200).json({ ans: a+b });
})

app.listen(PORT, () => console.log("Server is listening on port", PORT));