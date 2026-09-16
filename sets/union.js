"use strict"
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

let text ="";

try{
    console.log(C);

}catch(err){
    text = err.message


}

let txt = "";

for (let num of C.values()){
    txt += num + '<br>';
document.getElementById('demo').innerHTML = txt;
}