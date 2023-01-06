const posts = [
    {title:'Post One',body:'This Is Post One'},
    {title:'Post Two',body:'This Is Post two'}
];

async function show(){

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

    function getPosts(){
    
        let output = '';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        });
    
        document.body.innerHTML= output;
}


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

   await createPost({title:'post Three',body:'This Is Post Three'});

   getPosts();

   await deletePost();

   getPosts();

   await deletePost();
   
   getPosts();

   await deletePost();

   getPosts();

   let error;
   try{
    error = await deletePost()
   }catch(e){
    error = e;
   }
   
  return error;
}

show().then((m)=> console.log(m));