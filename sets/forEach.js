

"use strict";
const letters = new Set(["a","b","c"]);

let text='';

try{
letters.forEach(x=>x*2);
} catch(err){
    text = err.message
}

let setValues = letters.values();
text ="";
for(const num of setValues){
    text += num + '<br>'
console.log(num);
}