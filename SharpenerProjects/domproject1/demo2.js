// var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentelement);
// itemList.parentelement.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentelement.parentelement);

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// var newDiv = document.createElement('div');
// newDiv.className = 'hello';

// newDiv.id = 'hello1';

// newDiv.setAttribute('title','hello div');

// console.log(newDiv);

// var newDivText = document.createTextNode('Hello world');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1);

var newword = document.createElement('h3');
var content = document.createTextNode('hello');

newword.appendChild(content);

var head = document.querySelector('head');
var title = document.querySelector('title');

head.insertBefore(newword,title);

var className = document.getElementsByClassName("list-group-item")[0];
var idName = document.getElementById("items");

idName.insertBefore(newword,className);