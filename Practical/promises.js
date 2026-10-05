let myPromise = new Promise((resolve,reject)=>{

    let result = false

    if (!result){
        reject("Failed")
    }
    resolve("Success")
});
myPromise
    .then((response)=> {console.log("Success")})
        .catch((error) => {console.log("failed")})
        .finally(console.log("Done"));
        
    

