var form = document.querySelector('form');
var items = document.getElementById('itemList');


form.addEventListener('submit',onsubmit);
var index = 0;

function onsubmit(e){
    e.preventDefault();
    var name = document.getElementById('text1').value;
    var email = document.getElementById('text2').value;
 
     let newObj = {
       username:name,
       userEmail:email
     };

     let username = "username" + " " +index;
     index++;
 
     let store = JSON.stringify(newObj);
 
     localStorage.setItem(username,store);

     let realObj = JSON.parse(localStorage.getItem(username));

    // console.log(realObj);

     let li = document.createElement('li');
     let nameChild = document.createTextNode(realObj.username);
     let emailChild = document.createTextNode(realObj.userEmail);
     li.appendChild(nameChild);
     li.appendChild(emailChild);

    items.appendChild(li);
    
 }

 



 