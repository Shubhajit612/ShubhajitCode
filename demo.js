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

    axios.post("https://crudcrud.com/api/4da16926e5aa421591dbf8dcf17257a2/appointmentData",myObj)
    .then((response)=>{
      console.log(response);
      showUserOnScreen(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })

    // localStorage.setItem(myObj.email,JSON.stringify(myObj));

    // showUserOnScreen(myObj);
}

window.addEventListener("DOMContentLoaded",()=>{
  const data = axios.get("https://crudcrud.com/api/4da16926e5aa421591dbf8dcf17257a2/appointmentData")
  .then((res)=>{
    console.log(res);

    for(var i=0;i<res.data.length;i++){
      showUserOnScreen(res.data[i]);
    }
  })
  .catch((err)=>{
    console.log(err);
  })

  // console.log(data);
})

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
