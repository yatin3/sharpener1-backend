var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var form = document.getElementById('addForm');

form.addEventListener('submit',addItem);

function addItem(e){
     
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDescription));

    Array.from(li.childNodes)[1].textContent = " " + Array.from(li.childNodes)[1].textContent;

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right edit';

    deleteBtn.appendChild(document.createTextNode('+'));
 
    var deleteBtn1 = document.createElement('button');
   deleteBtn1.className = 'btn btn-danger btn-sm float-right delete'

   deleteBtn1.appendChild(document.createTextNode('x'));



   li.appendChild(deleteBtn1);
   li.appendChild(deleteBtn);

   itemList.appendChild(li);

}

filter.addEventListener('keyup',filterItems);

function filterItems(e){
    
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');


    Array.from(items).forEach(function(item){
    
      var itemName = item.firstChild.textContent;
      var desName = Array.from(item.childNodes)[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || desName.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block';
      }
      else{
        item.style.display = 'none';
      }
    });
}