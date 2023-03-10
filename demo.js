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

    localStorage.setItem(myObj.email,JSON.stringify(myObj));

    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj){
    const parentEle = document.getElementById('users');
    const childEle = document.createElement('li');
    const deleteChild = document.createElement('input');
    deleteChild.type = "button";
    deleteChild.value = "delete";

    //edit button
    const editChild = document.createElement('input');
    editChild.type = 'button';
    editChild.value = 'edit';

    editChild.onclick = () =>{
        localStorage.removeItem(myObj.email);
        parentEle.removeChild(childEle);

        document.getElementById('name').value = myObj.name;
        document.getElementById('email').value = myObj.email;
    }



    deleteChild.onclick = () =>{
        localStorage.removeItem(myObj.email);
        parentEle.removeChild(childEle);
    }
    childEle.textContent = myObj.name + " - " + myObj.email;
    childEle.appendChild(deleteChild);
    childEle.appendChild(editChild);
    parentEle.appendChild(childEle);
    
}
