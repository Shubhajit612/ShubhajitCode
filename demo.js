var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// var description = document.getElementById('description');


form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);


//Add Item

function addItem(e){

    e.preventDefault();

    //get input value

    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    //create new li element

    var li = document.createElement('li');
    //add class

    li.className = 'list-group-item';

    var descriptionNode = document.createTextNode(description);
    // console.log(li);

    //add text with input value

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(descriptionNode);

    //create del button element
    var deleteBtn = document.createElement('button');

    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //appned text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Edit button
    var editButton = document.createElement('button');

    //add class name
    editButton.className ="btn btn-success btn-sm float-right edit";

    //append text node

    editButton.appendChild(document.createTextNode('edit'));

    //append edit button

    li.appendChild(editButton);

    itemList.appendChild(li);
}

//Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items

function filterItems(e){

    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    
    //converted to Array
    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent;

        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}