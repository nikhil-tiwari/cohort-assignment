const fs = require("fs").promises;
const path = require("path");
const { Command } = require("commander");
const program = new Command();

const todosFilePath = path.join(__dirname, "todos.json");

const getTodos = async () => {
    try {
        const allTodos = await fs.readFile(todosFilePath, "utf-8");
        return JSON.parse(allTodos);
    } catch {
        return [];
    }
}

program
  .name('todo-cli')
  .description('CLI to do todos based tasks')
  .version('1.0.0');


program
  .command('list')
  .description('List all todos')
  .action(async () => {
    const todos = await getTodos();
    if(todos.length === 0) {
        console.log("No todos found");
        process.exit(1);
    }
    todos.map((value) => console.log(`ID: ${value.id} | Title: ${value.title} | Status: [${value.status === "complete" ? "x" : " "}]\n`))
});

program
  .command('add')
  .description('Add a new todo')
  .argument('<todo>', 'todo to add')
  .action(async (todo) => {
    const todos = await getTodos();
    if(todo === "") {
        console.log("Please enter todo");
        process.exit(1);
    }
    const todoObj = {
        id: parseInt(Date.now().toString()),
        title: todo,
        status: "incomplete"
    }
    todos.push(todoObj)
    await fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), "utf8");
    console.log("Todo added successfully")
    todos.map((value) => console.log(`ID: ${value.id} | Title: ${value.title} | Status: [${value.status === "complete" ? "x" : " "}]\n`))
});

program
  .command('complete')
  .description('Mark a todo as completed')
  .argument('<todoID>', 'todo to complete')
  .action(async (todoID) => {
    const todos = await getTodos();
    if(todoID === "") {
        console.log("Please enter a valid todo ID");
        process.exit(1);
    }
    let count = 0;
    const newTodos = todos.map((value) => {
        if (parseInt(value.id) === parseInt(todoID)) {
            count = count + 1;
            return {
                ...value,
                status: "complete"
            };
        }
        return value;
    });
    if(count === 0) {
        console.log("No such todo exists");
        process.exit(1);
    }
    await fs.writeFile(todosFilePath, JSON.stringify(newTodos, null, 2), "utf8");
    console.log("Todo completed");
    newTodos.map((value) => console.log(`ID: ${value.id} | Title: ${value.title} | Status: [${value.status === "complete" ? "x" : " "}]\n`))
});

program
  .command('delete')
  .description('Delete a todo')
  .argument('<todoID>', 'delete a todo')
  .action(async (todoID) => {
    const todos = await getTodos();
    if(todoID === "") {
        console.log("Please enter a valid todo ID");
        process.exit(1);
    }
    const newTodos = todos.filter((value) => parseInt(value.id) !== parseInt(todoID));
    if(newTodos.length === todos.length) {
        console.log("No such todo exists");
    }
    await fs.writeFile(todosFilePath, JSON.stringify(newTodos, null, 2), "utf8");
    console.log("Todo dedleted successfully");
    newTodos.map((value) => console.log(`ID: ${value.id} | Title: ${value.title} | Status: [${value.status === "complete" ? "x" : " "}]\n`))
});

program.parse();