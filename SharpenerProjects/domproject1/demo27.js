async function premovie(){

    function promiseWifeBringingTicket(){

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
              reject('error hai');
            },3000);
        })
    }

    let ticket
    try{
      ticket = await promiseWifeBringingTicket();
    }catch(e){
       ticket = e;
    }

    return ticket;
}

premovie().then((m)=> console.log(`person3: shows ${m}`));