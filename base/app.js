/* //alert("hi");
//''작은 따옴표와 차이점이 없나?
const a = 5;
const b = 2;
let myName = "nico";

console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

const daysOfWeek = mon + tue + w

 */

/* const player = {
	name: "sangmin",
	points: 10,
	fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
//player.fat = false;
console.log(player.fat);
player.lastName = "park";
console.log(player);
//player.name; */

//function

/* function sayHello(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + "age" + age);
} */
/* 
function plus(firstNumber, secondNumber) {
	console.log(firstNumber + secondNumber);
}
function divide(firstNumber, secondNumber) {
	console.log(firstNumber / secondNumber);
}

const player = {
	name: "sangmin",
	sayHello: function(otherPersonsName){
		console.log("helo!" + otherPersonsName + " nice to meet you");
	},
};

console.log(player.name);
player.sayHello("lynn");
/* 
alert();
console.log();
sayHello("nico", 10);
sayHello("dal", 24);
sayHello("lynn", 21);
 */
//plus(1, 2);



/* const age = prompt("How old are you?");

if (isNaN(age))
	console.log("error");
else
	console.log(parseInt(age)); */

/* const title = document.getElementById("title");
//console.dir(title);

title.innerText = "Got you!"; */

/* const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
	h1.style.color = "blue"
	//console.log("h1 was clicked!");
}

function handleMouseEnter() {
	h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
	h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
	document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
	alert("copier!");
}

function handleWindowOffline() {
	alert("SOS no WIFI");
}

function handleWindowOnline() {
	alert("WIFI check");
}

h1.addEventListener("click", handleTitleClick);//클릭! */
//title.onclick = handleTitleClick;
/* h1.addEventListener("mouseenter", handleMouseEnter);//올려두기
//title.mouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);//밖으로 나가기

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline); */

/* console.log(title);

title.style.color = "blue" */

const h1 = document.querySelector("div.hello:first-child h1");

/* function handleTitleClick() {
	const currentColor = h1.style.color;
	let newColor;
	if (currentColor === "blue"){
		newColor = "tomato";
	}
	else {
		h1.style.color = "blue";
	}
	h1.style.color = newColor;
} */

/* function handleTitleClick() {
	const clickedClass = "clicked";
	if (h1.classList.contains(clickedClass)) {
		h1.classList.remove(clickedClass);
	} else {
		h1.classList.add(clickedClass);
	}
	//console.log(h1.className);
} */

function handleTitleClick() {
	h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick); 