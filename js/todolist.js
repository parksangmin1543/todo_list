const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = "todos";

let todos = [];
let id = 0;

const setTodos = (newTodos) => {
	todos = newTodos;
}

const getAllTodos = () => {
	return todos;
}

//concat 문자열을 합치는 함수 배열을 계속해서 붙쳐준다.
const appendTodos = (text) => {
	const newId = Date.now();
	const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text});
	setTodos(newTodos);
	paintTodos();
	saveToDos();
}

//map 주어진 함수를 조건에 맞게 변경후 반환
const completeTodo = (todoId) => {
	const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo);
	setTodos(newTodos);
	paintTodos();
	saveToDos();
	console.log(newTodos);
}

const deleteToDo = (todoId) => {
	const newTodos = getAllTodos().filter(todo => todo.id !== todoId);
	setTodos(newTodos);
	paintTodos();
	saveToDos();
}

const updateTodo = (text, todoId) => {
	const newTodos = getAllTodos().map(todo => todo.id === todoId ? ({...todo, content: text}) : todo);
	setTodos(newTodos);
	paintTodos();
	saveToDos();
}

const onDbclickTodo = (e, todoId) => {
	const todoElem = e.target;
	const inputText = e.target.innerText;
	const todoItem = todoElem.parentNode;
	const inputElem = document.createElement('input');
	inputElem.value = inputText;
	inputElem.classList.add('edit-input');

	inputElem.addEventListener('keypress', (e) => {
		if(e.key === 'Enter' && e.target.value !== '') {
			updateTodo(e.target.value, todoId);
			document.body.removeEventListener('click', onClickBody);
		}
	})
	//body를 클릭했을때 탈출
	const onClickBody = (e) => {
		if (e.target !== inputElem) {
			todoItem.removeChild(inputElem);
			document.body.removeEventListener('click', onClickBody);
		}
	}
	document.body.addEventListener('click', onClickBody);
	todoItem.appendChild(inputElem);
}

const saveToDos = () => {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

const EachTodo = () => {
	todoList.innerHTML = '';
	const allTodos = getAllTodos();

	allTodos.forEach(paintTodos(todo));
}

const paintTodos = () => {
	todoList.innerHTML = '';
	const allTodos = getAllTodos();

	allTodos.forEach(todo => {
		const todoItem = document.createElement('li');
		todoItem.classList.add('todo-item');
		
		todoItem.setAttribute('data-id', todo.id);

		const checkboxElem = document.createElement('div');
		checkboxElem.classList.add('checkbox');
		checkboxElem.addEventListener('click', () => completeTodo(todo.id));

		const todoElem = document.createElement('div');
		todoElem.classList.add('todo');
		todoElem.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id));
		todoElem.innerText = todo.content;

		const delBtn = document.createElement('button');
		delBtn.classList.add('delBtn');
		delBtn.addEventListener('click', () => deleteToDo(todo.id));
		delBtn.innerHTML = 'X';

		if (todo.isCompleted) {
			todoItem.classList.add('checked');
			checkboxElem.innerText = '✔';
		}

		todoItem.appendChild(checkboxElem);
		todoItem.appendChild(todoElem);
		todoItem.appendChild(delBtn);

		todoList.appendChild(todoItem);
	})
}

//input요소로부터 이벤트리스너를 등록하여, 캐치한후, 입력받은 데이터를 배열에 순차적으로 담아준다.
const init = () => {
	todoInput.addEventListener('keypress', (e) =>{
		if (e.key === 'Enter' && e.target.value !== ''){
			console.log(e.target.value);
			appendTodos(e.target.value); 
			todoInput.value = '';
		}
	})
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	console.log(parsedToDos);
	todos = parsedToDos;
	parsedToDos.forEach(paintTodos);
}

init();
