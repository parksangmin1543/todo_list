const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

/* const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); */

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove(); 
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	//li.id = newTodo.id;
	const span = document.createElement("span");
	//span.innerText = newTodo.text;
	span.innerText = newTodo;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo)
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	toDos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
	console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	parsedToDos.forEach(paintToDo);
}