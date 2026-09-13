/*
Create a new array containing only numbers greater than 10:
const numbers = [4, 12, 7, 20, 9, 15];

*/

/*method 1*/
const numbers = [4, 12, 7, 20, 9, 15];


let newArray = numbers.filter(x=>x > 10);

console.log(newArray);




/*method 2*/
const numbers2 = [4, 12, 7, 20, 9, 15];



function filterArray(toBeFiltered){

    let filteredArray = [];

    for (i = 0 ; i < toBeFiltered.length ; ++i){

        if (toBeFiltered[i] > 10){

        filteredArray.push(toBeFiltered[i]);
        
    }

  
}

    return filteredArray;
}


console.log(filterArray(numbers2));