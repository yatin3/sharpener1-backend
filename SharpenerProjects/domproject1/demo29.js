var form = document.querySelector('form');
var items = document.getElementById('itemList');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    var name = document.getElementById('text1').value;
    var email = document.getElementById('text2').value;
 
     let newObj = {
       username:name,
       userEmail:email
     };

     axios.post("https://crudcrud.com/api/53b92261a9f4406c909aa1f4a7c0aac5/appointmentData",newObj)
     .then((response)=>{
        showUserOnScreen(response.data);
        console.log(response.data);
     })
     .catch((error)=>{
        console.log(error)
     });
    
 }

 function showUserOnScreen(realObj){
 let li = document.createElement('li');
     let nameChild = document.createTextNode(realObj.username);
     let emailChild = document.createTextNode(realObj.userEmail);

       li.appendChild(nameChild);
       li.appendChild(document.createTextNode("-"))
     li.appendChild(emailChild);

     items.appendChild(li);
 }
