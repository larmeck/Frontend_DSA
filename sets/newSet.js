const myUnique = new Set();



myUnique.add(4);
myUnique.add(4);
myUnique.add(6);
myUnique.add(5);






let text='';

for(let num of myUnique){
    text += num
}
document.getElementById('demo').innerHTML = text;