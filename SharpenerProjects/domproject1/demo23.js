
const posts = [
    {title:'Post One',body:'This Is Post One'},
    {title:'Post Two',body:'This Is Post two'}
];

function getPosts(){
    
        let output = '';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        });
    
        document.body.innerHTML= output;
}



function createPost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
 
            posts.push(post);
            const error = false;

            if(!error){
                resolve(posts);
            }else{
                reject("error: something went wrong");
            }
        },1000);
    });
}

// createPost({title:'post Three',body:'This Is Post Three'})
// .then(function(data){
//     getPosts();
//     console.log(data);
// })
// .catch((error)=>console.log(error));

// createPost({title:'post Three',body:'This Is Post Three'})
// .then(getPosts)
// .catch((error)=>console.log(error));

function deletePost(){

    return new Promise((resolve,reject)=>{
    
            setTimeout(()=>{
        
                if(posts.length>0){
                     
                    resolve( posts.pop());
                }
                else{
                  
                    reject("Array is empty now");
                }
              },1000);
     
    });
}

//    createPost({title:'post Three',body:'This Is Post Three'})
//    .then(()=>{
//     getPosts()
      
//        deletePost().then(()=>{
//         getPosts();

//            deletePost().then(()=>{
//             getPosts();

//               deletePost().then(()=>{
//                 getPosts();


//                   deletePost().then(()=>{})
//                   .catch((err)=> {console.log('inside catch', err)})
//               })
//             }).catch(err=>{console.log(err)})
//        }).catch(err=>{console.log(err)})
//   }).catch(err=>{console.log(err)})


 const user = {
    name:"yatin",
    lastActivity:new Date().getTime()
 };

  function updateLastUserActivityTime(){

    
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(user.lastActivity=new Date().getTime());
        },1000);
      });
  }

  Promise.all([createPost({title:'post Three',body:'This Is Post Three'}),updateLastUserActivityTime()]).then(([value1,value2])=>{

    console.log(value1);
    console.log(value2);

    deletePost().then(()=>{
        console.log(posts);
    })
    
  });

  










// deletePost().then().catch((error)=>console.log(error));
// deletePost().then().catch((error)=>console.log(error));
// deletePost().then().catch((error)=>console.log(error));
// deletePost().then().catch((error)=>console.log(error));

// function create4thpost(post){

//     setTimeout(()=>{
//      posts.push(post);
//     },3000)
// }

// function delete4thpost(){

//     setTimeout(()=>{
//         deletePost().then().catch((error)=>console.log(error));

//     },4000);
// }

// create4thpost({title:'post Four',body:'This Is Post Four'})
// delete4thpost();
// delete4thpost();


// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
//         setTimeout(resolve,2000,'GoodBye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));

// function updateLastUserActivityTime(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
          
//             resolve(new Date());
//         },1000);
//     });
    
// }

// Promise.all([])