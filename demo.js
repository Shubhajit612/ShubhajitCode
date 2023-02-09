// var itemList = document.querySelector('#items');

// //parent Element
// // console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// // console.log(itemList.parentElement.parentElement.parentElement);

// //child Element
// // console.log(itemList.childNodes);

// // console.log(itemList.children[1]);

// // itemList.children[1].style.backgroundColor = "Yellow";

// // last child 

// // console.log(itemList.lastChild);
// // itemList.lastChild.textContent = "Hey";

// //lastChildElement

// // itemList.lastElementChild.textContent = "Hello Shubhajit..!!";


// //first Child

// // console.log(itemList.firstChild);

// // itemList.firstChild.textContent = "Hello..!!";

// //firstChild Element
// // itemList.firstElementChild.style.color = "red";

// //next sibling
// // console.log(itemList.nextSibling);

// //next Element sibling

// // console.log(itemList.nextElementSibling);
// // itemList.nextElementSibling.innerHTML ="Hey Brother";


// // previouse sibling
// // console.log(itemList.previousSibling);

// //previouse element sibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = "blue";




// //create element

// // create a div 

var newDiv = document.createElement('div');

newDiv.className = 'heyy'; //add class

newDiv.id = "hello1";

// //Add attr
newDiv.setAttribute('title','Hello Div');

// //Create text node

var newDivText = document.createTextNode('HEllo ');

// //Add text to div

newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);


//Assignment 2

// creating div 


var parentNode = document.getElementById('items');

console.log(parentNode);

parentNode.innerHTML = '<li class="list-group-item">Item 1</li> <li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li>'

parentNode.innerHTML = '<li>HEllo</li>' + parentNode.innerHTML;


