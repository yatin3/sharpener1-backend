form.addEventListener('submit',onSubmit);

let itemList = document.getElementById('itemList');

let text1 = document.getElementById('item');
let text2 = document.getElementById('description');
let text3 = document.getElementById('category');

function onSubmit(e){

    e.preventDefault();
    
    let item = document.getElementById('item').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    let obj = {
      item:item,
      description:description,
      category:category
    };

    let store = JSON.stringify(obj);
    localStorage.setItem(description,store);

    let realObj = JSON.parse(localStorage.getItem(description));

    let li = document.createElement('li');
    let itemfirst = document.createTextNode(realObj.item);
    let descriptionfirst = document.createTextNode(realObj.description);
    let categoryfirst = document.createTextNode(realObj.category);

    let editResponse = document.createElement('button');
    let editText  = document.createTextNode('Edit Expense');
    editResponse.appendChild(editText);

    let deleteresponse = document.createElement('button');
    let deleteText = document.createTextNode('delete response');
    deleteresponse.appendChild(deleteText);

    li.appendChild(itemfirst);
    li.appendChild(descriptionfirst);
    li.appendChild(categoryfirst);
    li.appendChild(editResponse);
    li.appendChild(deleteresponse);

    li.childNodes[3].addEventListener('click',editClick);
    li.childNodes[4].addEventListener('click',deleteClick);

   itemList.appendChild(li);
}

function editClick(e){
   
    text1.value = e.target.parentNode.childNodes[0].textContent;
    text2.value = e.target.parentNode.childNodes[1].textContent;
    text3.value = e.target.parentNode.childNodes[2].textContent;

    itemList.removeChild(e.target.parentNode);
}

function deleteClick(e){

    let str = e.target.parentNode.childNodes[1];
    localStorage.removeItem(str.textContent);
    itemList.removeChild(e.target.parentNode);
}