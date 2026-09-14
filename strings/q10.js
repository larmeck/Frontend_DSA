/*
Reverse the following string so that the result is "olleh":
const word = "hello";
*/

const word = "hello";

let word1 = word.split("");

console.log(word1);



/*strin g has no reverse method, I am turning it to array so that I can reverse*/
let word2 = word1.reverse();

console.log(word2);





console.log(word2.join(""));