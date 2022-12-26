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

var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello";

// items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for(var i=0; i<items.size(); i++){

    items[i].style.fontWeight = 'bold';
}
