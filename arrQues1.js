/**
 * const numbers = [10, 5, 20, 5, 30, 10, 40, 25, 20];

Your task is to produce:

[40, 30, 25, 20, 10, 5]
 */


 const numbers = [10, 5, 20, 5, 30, 10, 40, 25, 20]

/*create empty array*/
const newNumbers = [];


/* loop through numbers adding each number to newNumbers */
for (let number of numbers) {

    /*Not allowing duplicate numbers to be added*/
    if (!newNumbers.includes(number)) {

        /*adds the unique numbers to new array*/
        newNumbers.push(number);
    }
}


/*sort() is mostly accurate un string but (a, b) => b - a) method is commonly used to sort numbers*/
const result =newNumbers.sort((a, b) => b - a);


console.log(result);


 