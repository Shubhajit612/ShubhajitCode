const myForm = document.getElementById('my-form');

const myname = document.getElementById('name');

const myemail = document.getElementById('email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();

    const name = myname.value;
    const email = myemail.value;

    const myObj = {
       name,
       email
    };

    localStorage.setItem('userDetails',JSON.stringify(myObj));

    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj){
    const parentEle = document.getElementById('users');
    const childEle = document.createElement('li');
    const deleteChild = document.createElement('input');
    deleteChild.type = "button";
    deleteChild.value = "delete";

    deleteChild.onclick = () =>{
        localStorage.removeItem(myObj.email);
        parentEle.removeChild(childEle);
    }
    childEle.textContent = myObj.name + " - " + myObj.email;
    childEle.appendChild(deleteChild);
    parentEle.appendChild(childEle);
    
}
