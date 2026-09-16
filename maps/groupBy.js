// Create a Map
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);


for (let x of result.get("ok")) {
  console.log(x.name, x.quantity)
}

for (let y of result.get("low")) {
   console.log(y.name, y.quantity)

}
console.log(result);