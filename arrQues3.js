
/**
 Problem — Second Largest
Given an unsorted array of integers, return the second-largest distinct value.
[10, 5, 8, 10, 3]
→ 8

[4, 4, 4]
→ no result
Constraints: Don't sort the array.
Tests: Normal array, negative numbers, duplicates, one element, empty array.
Challenge: Solve with one pass and O(1) extra space.
Commit:

 */




function secondLargest(array){

    /*create empty array*/
    let newArray =[];

/*iterate array elements*/
    for(let num of array){

        /* for the returned number, it is added to newArray if it does not exists there. This will only have unique numbers*/
            if(!newArray.includes(num)) {
                newArray.push(num);
                

            }
       

    
  } 

  return newArray;



  /*since the array now has unique numbers,... */
}
   
/*Test Cases*/
console.log(secondLargest([64,35,8,8,8,38,36,89]));
console.log(secondLargest([90,2,56,67,4,90,56]));
console.log(secondLargest([5,39,4,6,2,5,9]));



