let todos = [];

const inputEle = document.querySelector("#input");
const addButton = document.querySelector(".button");
const ulEle = document.querySelector("#todo-list");
// const body = document.querySelector("body");

addButton.addEventListener("click", function () {
    if (inputEle.value === "") {
        alert("Please enter the todo");
        return null;
    }
    todos.push({
        title: inputEle.value,
        isEditing: false,
    });
    inputEle.value = "";
    console.log("Button clicked");
    render();
});

const delTodo = (index) => {
    delete todos[index];
    render();
}

const editTodo = (index) => {
    todos[index].isEditing = true;
    render();
}

const saveTodo = (newValue, index) => {
    todos[index].isEditing = false;
    todos[index].title = newValue;
    render();
}

const render = () => {
    ulEle.innerHTML = "";
    todos.map((value, index) => {
        if(value.isEditing) {
            const inputEle = document.createElement("input");
            const saveButton = document.createElement("button");
            const div = document.createElement("div");
            inputEle.value = value.title;
            saveButton.innerHTML = "Save changes";
            saveButton.classList.add("save-button");
            saveButton.addEventListener("click", () => saveTodo(inputEle.value, index));
            div.appendChild(inputEle);
            div.appendChild(saveButton);
            ulEle.appendChild(div);
        } else {
            const liEle = document.createElement("li");
            const delButton = document.createElement("button");
            const editButton = document.createElement("button");
            const div = document.createElement("div");
            delButton.innerHTML = "Delete";
            delButton.classList.add("del-button");
            delButton.addEventListener("click", () => delTodo(index));
            editButton.innerHTML = "Edit";
            editButton.classList.add("edit-button");
            editButton.addEventListener("click", () => editTodo(index));
            liEle.innerHTML = value.title;
            div.appendChild(liEle);
            div.appendChild(delButton);
            div.appendChild(editButton);
            ulEle.appendChild(div);
        }
       
    });

    console.log("Render function called");
};
