/*A year is a leap year if:

Rule 1: It must be divisible by 4 (leaves no remainder when divided by 4).

Rule 2: If it ends in 00 (divisible by 100), it is NOT a leap year...

Rule 3: ...unless it is also divisible by 400.
*/



function leapYears(startValue,lastValue){

/* created an empty array */
    const leapYears =[];

/*since it is 1900 to date, we have our start(1900) and stop(2026) for iteration*/
    for(i=startValue; i<lastValue;++i){
        if (i%4 ===0 ||i%100 ===0 && i%400 ===0){
            

/* elements(leap years) added to the array */
            leapYears.push(i);
           
        }
    
    }
    return leapYears;


}

console.log(leapYears(1900,2026));
console.log(leapYears.length);






