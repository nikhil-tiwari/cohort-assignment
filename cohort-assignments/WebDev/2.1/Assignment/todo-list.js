/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    #todos
    constructor() {
        this.#todos = [];
    }

    add(todo) {
        this.#todos.push(todo);
    }

    remove(indexOfTodo) {
        this.#todos = this.#todos.filter((_, index) => index!==indexOfTodo);
    }

    update(indexOfTodo, updatedTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.#todos.length) {
            this.#todos[indexOfTodo] = updatedTodo;
        }
    }

    getAll() {
        return this.#todos;
    }

    get(indexOfTodo) {
        return this.#todos[indexOfTodo];
    }

    clear() {
        this.#todos = [];
    }

}

const todo1 = new Todo();
todo1.add({ title: 'task 1', status: 'done' });
todo1.add({ title: 'task 2', status: 'done' });
todo1.add({ title: 'task 3', status: 'completed' });
todo1.add({ title: 'task 4', status: 'done' });
todo1.add({ title: 'task 5', status: 'completed' });
todo1.remove(2)
todo1.update(2, { title: 'task 4', status: 'completed' })
console.log(todo1.getAll());
console.log(todo1.get(1));
todo1.clear();
console.log(todo1.getAll());