const fruits = new Set();

fruits.add("banana");
fruits.add("apple");
fruits.add("mango");
fruits.add("avocado");
fruits.add("pawpaw");


console.log(fruits);


console.log(fruits.has('orange'));

let text='';

for(const f of fruits){
    text += f;
    console.log(f);
    
}

