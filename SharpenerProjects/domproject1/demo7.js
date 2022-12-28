var form = document.querySelector('form');
var items = document.getElementById('itemList');

var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');

// var editButton = document.getElementById('edit');
// var deleteButton = document.getElementById('delete');

// editButton.addEventListener('onclick',editclick);
// deleteButton.addEventListener('onclick',deleteclick);

function editclick(e){
   console.log("editing");
}

function deleteclick(e){
   console.log("deleting");
}

window.addEventListener('load',onLoad);

function onLoad(event){

   let localObject = Object.keys(localStorage);
   localObject.forEach(function(obj){
      
      var showObj = JSON.parse(localStorage[obj]);

           let li = document.createElement('li');
          let nameChild = document.createTextNode(showObj.username);
          let emailChild = document.createTextNode(showObj.userEmail);
          li.appendChild(nameChild);
         li.appendChild(emailChild);

        items.appendChild(li);
        

   });
   
}


form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    var name = document.getElementById('text1').value;
    var email = document.getElementById('text2').value;
 
     let newObj = {
       username:name,
       userEmail:email
     };
 
     let store = JSON.stringify(newObj);
 
     localStorage.setItem(email,store);

     let realObj = JSON.parse(localStorage.getItem(email));

     if((localStorage.getItem(email).userEmail) !==null){
          
         var liItem = document.getElementsByTagName('li');
         for(let i=0; i<liItem.length; i++){
            if((Array.from(liItem)[i].childNodes[1].textContent)===email){
               items.removeChild(Array.from(liItem)[i]);
            }
         }
     }

     let li = document.createElement('li');
     let nameChild = document.createTextNode(realObj.username);
     let emailChild = document.createTextNode(realObj.userEmail);
     
    let edit= document.createElement("BUTTON");
    let edittext = document.createTextNode("EDIT");
    edit.id=`edit${email}`;
    edit.appendChild(edittext);

    let delet= document.createElement("BUTTON");
    let deletetext = document.createTextNode("DELETE");
    delet.id = `delete${email}`;
    delet.appendChild(deletetext);
    

     
     li.appendChild(nameChild);
     li.appendChild(emailChild);
     li.appendChild(edit);
     li.appendChild(delet);

     li.childNodes[2].addEventListener('click',editclick);
   
     li.childNodes[3].addEventListener('click',deleteclick);

    items.appendChild(li);

    
 }

 function editclick(e){
   //console.log(e.target.parentNode.childNodes[1]);

 text1.value = e.target.parentNode.childNodes[0].textContent;
 text2.value =e.target.parentNode.childNodes[1].textContent
  items.removeChild(e.target.parentNode);

 }

 function deleteclick(e){
   // console.log(e.target);
//console.log(e.target.parentNode.childNodes[1]);
   let str = e.target.parentNode.childNodes[1];
   localStorage.removeItem(str.textContent);
   items.removeChild(e.target.parentNode);
 }




 