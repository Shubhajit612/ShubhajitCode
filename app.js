// console.log(document.link);

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');

// let header = document.getElementById('main-header');

// headerTitle.textContent = "Hello";

// headerTitle.innerHTML = "<h2>Goodbye</h2>";

// header.style.borderBottom = 'solid 3px #000'

// console.log(headerTitle.textContent);

var items = document.getElementsByClassName('list-group-item');

console.log(items[1]);

items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "green";

items.style.backgroundColor = "#f4f4f4";


// console.log