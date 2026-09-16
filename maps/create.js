const fruits = new Map();


fruits.set("mango", 200);
fruits.set("orange", 300);
fruits.set("pawpaw", 100);
fruits.set("passion", 400);
fruits.set("mango", 200);
fruits.set("mango", 200);


fruits.forEach((key,value)=> console.log(key,value));


for(let num of fruits.entries()){

    console.log(num);


}

const animals = new Map([
["faster","dog"],
["fastest","cheater"],
["slow","snail"],
["slowest","tortoise"],
])

console.log(animals.get("slow"));


console.log(animals.entries())


