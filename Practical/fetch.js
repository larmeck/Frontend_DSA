
function showLoading(status){
    if(status === "yes"){
        console.log("is loading...")

    }else if(status === "no"){

    console.log("loading has finished")

    }
}


 showLoading("yes")

fetch('https://jsonplaceholder.typicode.com/todos')

   
    .then((response)=> {
        if(!response.ok){
            throw new Error("Error loading")
        }
        return response.json()
        })
        .then((data)=>{console.log(data)})
        .catch((error) => {console.log(error)})
        .finally(()=>{console.log("Done",showLoading("no"))});