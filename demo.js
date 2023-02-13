var name1 = document.getElementById('name');

var myForm = document.getElementById('my-form');

// console.log(name1);

myForm.addEventListener('submit',clickme);

function clickme(e){

    e.preventDefault();

    console.log(name1.value);

    localStorage.setItem('userDetails',name1.value);


}

var r = localStorage.getItem('userDetails');

console.log(r);