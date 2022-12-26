//console.dir(document);

// console.log(document.domain);
// console.log(document.url);

// console.log(document.title);

// document.title = "hello";
// console.log(document.body);
// console.log(document.head);

// console.log(document.all);
// console.log(document.all[10]);

// document.all[10]textContent = "hello";

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'hello';

// headerTitle.innerhtml = '<h3>hello</h3>';

// var header = document.getElementById('main-header');

// header.style.borderBottom = 'solid 3px black';

// var title = document.getElementsByClassName('title')[0];


// title.style.color = 'green';
// title.style.fontWeight = 'bold';

// console.log(title);

// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = "hello";

// // items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(var i=0; i<items.size(); i++){

//     items[i].style.fontWeight = 'bold';
// }


// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello 2";

// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// for(var i=0; i<li.size(); i++){

//     li[i].style.fontWeight = 'bold';
// }

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px grey';

var input  = document.querySelector('input');
input.value = 'hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var lastitem = document.querySelector('.list-group-item');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'red';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display = 'none';


// var titles = document.querySelectorAll('.title');

// console.log(titles);

// titles[0].textContent = "hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }