
// localStorage.setItem("name","yatin");
// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// sessionStorage.setItem("name","goyal");
// console.log(sessionStorage.getItem("name"));

// document.cookie = 'name=Yatin'

var input = document.querySelector('input');
var form = document.querySelector('form');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
   e.preventDefault();
    var name = document.getElementById('item').value;
    var email = document.getElementById('email').value;
    localStorage.setItem('username',name);
   localStorage.setItem('useremail',email)
    //console.log(name);
}
console.log(input.value);