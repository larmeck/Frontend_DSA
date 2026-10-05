function showLoading(status){

    
    if(status === "yes"){
        console.log("is loading...")

    }else if(status === "no"){

    console.log("loading has finished")

    }
}



function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


async function loadDetails(){
    try{
         showLoading("yes")

         
         
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");

        if(!response.ok){
            throw new Error("Something went wrong")
        }

        let data = await response.json();

        await delay(6000); 
        
        console.log(data)
        

    }catch(error){
        console.log(error);
    }finally{
         showLoading("no")
        console.log("completed")};
}

loadDetails();