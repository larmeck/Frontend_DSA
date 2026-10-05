
function waitBeforeDisplay(ms){
    return new Promise(resolve=>{setTimeout(resolve,ms)});
}

async function birthDayCountDown(name){
    for (let i = 10; i >=0; i--){
        console.log(i)
        await waitBeforeDisplay(2000);
    }
    console.log("Happy Birthday, Larmeck!");
}

birthDayCountDown("Larmeck")




function setDelay(ms, callBack){
    return setTimeout(()=> {
        console.log("delayed by: ",ms)
        callBack();
    },ms)
}


function displayName(theName,){

    console.log(theName)
}

setDelay(3000,()=>{displayName("Oduor")})