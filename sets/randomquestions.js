const numbers = [1, 2, 3, 2, 4, 1, 5];


const newSet = new Set(numbers);

console.log(newSet);


const fruits = new Set(["apple", "banana", "orange"]);


console.log(fruits.has("banana"));


const colors = new Set(["red", "blue", "green"]);

colors.add("yellow");
colors.delete("blue");
colors.has("green");

console.log(colors);



function removeDuplicates(array) {
    const noDuplicates = new Set(array);

    return noDuplicates.size;
}

console.log(removeDuplicates([10, 20, 10, 30, 20, 40, 50, 30]));



function duplicate(array){

    const seen = new Set();
    const duplicate = new Set();

    for (let num of array){

        if(seen.has(num)){
            duplicate.add(num);
        }else{
            seen.add(num)
        }
    }
    return duplicate
}


console.log(duplicate([1, 2, 3, 2, 4, 5, 1, 6, 3, 7]));



const sentence = "javascript is easy and javascript is powerful";

const newsentence = sentence.split(" ");
console.log(newsentence);

const aSet = new Set(newsentence);
console.log(aSet);