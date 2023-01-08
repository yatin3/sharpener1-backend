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


     let edit= document.createElement("BUTTON");
     let edittext = document.createTextNode("EDIT");
     edit.setAttribute("id",realObj._id);
     edit.appendChild(edittext);
 
     let delet= document.createElement("BUTTON");
     let deletetext = document.createTextNode("DELETE");
     delet.setAttribute("id",realObj._id);
     delet.appendChild(deletetext);
 

       li.appendChild(nameChild);
       li.appendChild(document.createTextNode("-"))
     li.appendChild(emailChild);
     li.appendChild(edit);
     li.appendChild(delet);

     li.childNodes[4].addEventListener('click',deleteclick);


     items.appendChild(li);
 }


 window.addEventListener("DOMContentLoaded", ()=>{
     
    axios.get("https://crudcrud.com/api/53b92261a9f4406c909aa1f4a7c0aac5/appointmentData")
    .then((response)=>{
        for(var i=0; i<response.data.length; i++){
            showUserOnScreen(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
 });

 function deleteclick(event){
    
    event.preventDefault();

    items.removeChild(event.target.parentNode);
    let numberId =  (event.target.id);
   
    console.log(numberId);

    axios.delete(`https://crudcrud.com/api/53b92261a9f4406c909aa1f4a7c0aac5/appointmentData/${numberId}`)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
 }