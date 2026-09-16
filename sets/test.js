const word = "act";

const word2 ="cat";

//function that takes two strings and returns true if anagram else false

function isAnagram(input1, input2){
    const input1Array = input1.split("")
    const input2Array = input2.split("");

    const sortedInput1Array = input1Array.sort();
    const sortedInput2Array = input2Array.sort();


    let checkString1 = sortedInput1Array.join("");
    let checkString2 = sortedInput2Array.join("");



    console.log(sortedInput1Array);
    console.log(sortedInput2Array);

 
    if (checkString1 == checkString2){
        return true;

    }
    return false;
}



console.log(isAnagram(word, word2));