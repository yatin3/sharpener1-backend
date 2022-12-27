
var form = document.querySelector('form');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
   e.preventDefault();
    var name = document.getElementById('item').value;
   var email = document.getElementById('description').value;
   // localStorage.setItem('username',name);
  // localStorage.setItem('useremail',email)
    //console.log(name);

    let newObj = {
      username:name,
      userEmail:email
    };

    let store = JSON.stringify(newObj);

    localStorage.setItem('username',store);
   
}


//we are adding new user to same key in local storage thats why it get replaced every time we add new user