


"use strict";
let text = "Hello world";



try{
text[0]="B";

}
catch(err){
text = err.message
}

document.getElementById("demo").innerHTML = text;
try{
text[0]="B";

}
catch(err){
text = err.message
}

document.getElementById("demo").innerHTML = text;