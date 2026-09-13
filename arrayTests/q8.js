/*
Create a new array containing each number multiplied by two:

const numbers = [1, 2, 3, 4];

*/

/*methdd 1*/
const numbers = [1, 2, 3, 4];


 let newArray = numbers.map(x=>x * 2);

 console.log(newArray);





/*method 2*/

function multiplyBy2(array){

    let anArray = [];
    for (i = 0 ; i < array.length ; ++i){

        anArray.push(array[i] * 2);

        
    }
    return anArray;
}


console.log(multiplyBy2(numbers));