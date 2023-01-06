console.log('person1: shows ticket');
console.log('person2: shows ticket');

// async function premovie(){
//     return 'preMovie';
// }

async function premovie(){

    function promiseWifeBringingTicket(){

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
              resolve('ticket');
            },3000);
        })
    }

    function getPopCorn(){
    
        return new Promise((resolve,reject)=>{
    
          resolve('popcorn');
        })
    }

    function getButter(){
    
        return new Promise((resolve,reject)=>{
    
          resolve('butter');
        })
    }

    function getColdDrinks(){
    
        return new Promise((resolve,reject)=>{
    
          resolve('coldDrink');
        })
    }
    

     let ticket =    await promiseWifeBringingTicket();
     
     console.log(`wife:I have ${ticket}`);
     console.log('husband:we should go in');
     console.log('wife:no I am hungry');   

     let popcorn = await getPopCorn();

     console.log(`husband:I got some ${popcorn}`);
     console.log('husband:we should go in');
    console.log('wife:no I need butter on popcorn');

    let butter = await getButter();

    console.log(`husband:I got some ${butter}`);
    console.log('husband:we should go in');
   console.log('wife:no I need butter on popcorn');

   let coldDrink = await getColdDrinks();

    console.log(`husband:I got some ${coldDrink}`);
    console.log(`husband:anything else`);
    console.log(`lets go we are getting late`);
    console.log(`husband:thank you for reminder`);

    return ticket;
}






premovie().then((m)=> console.log(`person3: shows ${m}`));



console.log('person4: shows ticket');
console.log('person5: shows ticket');
