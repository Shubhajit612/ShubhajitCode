// var item = document.getElementsByClassName('list-group-item');

// console.log(item[1]);

// item[1].style.backgroundColor = "Green";

// item[2].style.display = "none";


// // queryselector

var p = document.querySelectorAll('.list-group-item');
p[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0 ;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}