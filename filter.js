let scores = [11, 52, 63, 47, 51, 96, 84];

/*finding even numbers */

function checkMark(mark){

    if (mark %2 === 0){
        return true;
    }
    return false;
}

let evenNumbers = scores.filter(checkMark);
console.log(evenNumbers);

