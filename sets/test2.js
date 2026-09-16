//takes a string and converts all upper characters to lower 


const word1 = "jAVaScrIpT";
const testCase = "lArmeCk";


function caseConverter(word){
    const stringArray = word.split("");
   
    const newArray =[];

    for (let aLetter of stringArray){

        
        if (aLetter === aLetter.toUpperCase()){
            aLetter = aLetter.toLowerCase();
            console.log(aLetter);
        }else{
            aLetter= aLetter.toUpperCase();
            console.log(aLetter);
        }
       newArray.push(aLetter);
       
    
    }
    return newArray;
    
}


console.log(caseConverter(testCase))



// reverse a string without using reverse()

const check1 = "Javascript";

function reversedString(input){
    
    let theReversed = [];
   
    for(let i = input.length - 1; i >= 0; --i){
        console.log(input[i]);

        theReversed.push(input[i]);
    }


    return theReversed.join("");
}


console.log(reversedString(check1))