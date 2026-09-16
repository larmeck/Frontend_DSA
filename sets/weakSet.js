const letters = new Set(["a","b","c"]);


const myObj = { name:"Larmeck", age: 30}

let newletter = letters.add(myObj);


console.log(newletter);



text ="";

for(let num of newletter){
    text += num + "<br>";

    document.getElementById('demo').innerHTML = text;   
}