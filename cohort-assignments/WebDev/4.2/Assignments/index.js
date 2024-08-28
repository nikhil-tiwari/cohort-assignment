const express = require('express');
const fs = require('fs').promises;

const app = express();
const filePath = "todos.json";
const PORT = 8000;

app.use(express.json());

const getTodos = async () => {
    try {
        const allTodos = await fs.readFile(filePath, "utf-8");
        return JSON.parse(allTodos);
    } catch {
        return [];
    }
}

app.get("/todos", async (req, res) => {
    const todos = await getTodos();
    // console.log(todos);
    res.json({ todos });
})

app.get("/todos/:id", async (req, res) => {
    const todoID = parseInt(req.params.id);
    const todos = await getTodos();
    const filteredTodo = todos.filter((value) => value.id === todoID);
    if(filteredTodo.length === 0) {
        return res.status(404).json({ message: "No such todo exists" });
    }
    return res.status(200).json({ data: filteredTodo });
})

app.post("/todos/add", async (req, res) => {
    const { title, description } = req.body;
    if(!title || !description) {
        return res.status(403).json({ message: "Field is missing" });
    }
    const todos = await getTodos();
    const todoObj = {
        id: parseInt(Date.now().toString()),
        title: title,
        description: description,
        completed: false
    }
    todos.push(todoObj);
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2), "utf8");
    return res.status(201).json({ message: "Todo added successfully" });
})

app.put("/todos/completed/:id", async (req, res) => {
    const todoID = parseInt(req.params.id);
    const todos = await getTodos();
    let count = 0;
    const newTodos = todos.map((value) => {
        if (value.id === todoID) {
            count = count + 1;
            return {
                ...value,
                completed: true
            };
        }
        return value;
    });
    if(count === 0) {
        return res.status(404).json({ message: "No such todo exists" });
    }
    await fs.writeFile(filePath, JSON.stringify(newTodos, null, 2), "utf8");
    return res.status(201).json({ message: "Todo updated successfully" });
})

app.put("/todos/update/:id", async (req, res) => {
    const todoID = parseInt(req.params.id);
    const { title, description } = req.body;
    if(!title || !description) {
        return res.status(403).json({ message: "Field is missing" });
    }
    const todos = await getTodos();
    let count = 0;
    const newTodos = todos.map((value) => {
        if (value.id === todoID) {
            count = count + 1;
            return {
                ...value,
                title: title,
                description: description
            }
        }
        return value;
    });
    if(count === 0) {
        return res.status(404).json({ message: "No such todo exists" });
    }
    await fs.writeFile(filePath, JSON.stringify(newTodos, null, 2), "utf8");
    return res.status(201).json({ message: "Todo updated successfully" });
})

app.delete("/todos/delete/:id", async (req, res) => {
    const todoID = parseInt(req.params.id);
    const todos = await getTodos();
    const newTodos = todos.filter((value) => value.id !== todoID);
    if(newTodos.length === todos.length) {
        return res.status(404).json({ message: "No such todo exists" });
    }
    await fs.writeFile(filePath, JSON.stringify(newTodos, null, 2), "utf8");
    return res.status(201).json({ message: "Todo deleted successfully" });
})

app.listen(PORT, () => console.log("Server listening on port", PORT));