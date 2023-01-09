var form = document.querySelector('form');
var text1 = document.getElementById('price');
var text2 = document.getElementById('dish');
var text3 = document.getElementById('table');

var ul1 = document.getElementById('Table1ul');
var ul2 = document.getElementById('Table2ul');
var ul3 = document.getElementById('Table3ul');


form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    let newObj={
        Price:text1.value,
        Dish:text2.value,
        Table:text3.value
    };

    axios.post("https://crudcrud.com/api/2d7fb4c7a50648e29c3b1ccf60ea446f/OrderData",newObj)
    .then((response)=>{
        showUserOnScreen(response.data)
    })
    .catch((error)=>{
        console.log(error)
    });

}

function showUserOnScreen(realObj){

    let li = document.createElement('li');
    let text1li = document.createTextNode(realObj.Price);
    let text2li = document.createTextNode(realObj.Dish);
    let text3li = document.createTextNode(realObj.Table);
 
    li.appendChild(text1li);
    li.appendChild(document.createTextNode('-'));
    li.appendChild(text2li);
    li.appendChild(document.createTextNode('-'));
    li.appendChild(text3li);

    let butt = document.createElement('button');
    let buttText = document.createTextNode("delete");
    butt.appendChild(buttText);
    butt.setAttribute('id',realObj._id);
    li.appendChild(butt)

    li.childNodes[5].addEventListener('click',deleteClick);
 
    let ul = document.getElementById(`${realObj.Table}`);
    ul.appendChild(li);
}

function deleteClick(event){

    event.preventDefault();
    let numberId = event.target.id;
    let ulId = event.target.parentNode.childNodes[4].textContent;


   document.getElementById(`${ulId}`).removeChild(event.target.parentNode);
   
    axios.delete(`https://crudcrud.com/api/2d7fb4c7a50648e29c3b1ccf60ea446f/OrderData/${numberId}`)
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })

}

window.addEventListener("DOMContentLoaded",()=>{
     
    axios.get("https://crudcrud.com/api/2d7fb4c7a50648e29c3b1ccf60ea446f/OrderData")
    .then((response)=>{
        for(let i=0; i<response.data.length; i++){
            showUserOnScreen(response.data[i]);
        }
    })
});