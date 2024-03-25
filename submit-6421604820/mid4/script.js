const items = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Carrot", category: "Vegetable", price: 0.5 },
  { name: "Banana", category: "Fruit", price: 0.8 },
  { name: "Cucumber", category: "Vegetable", price: 1.2 },
  { name: "Orange", category: "Fruit", price: 0.9 },
  { name: "Tomato", category: "Vegetable", price: 0.7 },
  { name: "Lettuce", category: "Vegetable", price: 0.3 },
  { name: "Grapes", category: "Fruit", price: 2 },
  { name: "Mushroom", category: "Vegetable", price: 1.5 },
  { name: "Strawberry", category: "Fruit", price: 1.8 },
  { name: "Blueberry", category: "Fruit", price: 2.5 },
  { name: "Potato", category: "Vegetable", price: 0.4 },
  { name: "Broccoli", category: "Vegetable", price: 1.1 },
  { name: "Mango", category: "Fruit", price: 1.7 },
  { name: "Spinach", category: "Vegetable", price: 0.6 },
  { name: "Cherry", category: "Fruit", price: 2.2 },
  { name: "Peas", category: "Vegetable", price: 0.9 },
  { name: "Peach", category: "Fruit", price: 1.3 },
  { name: "Pineapple", category: "Fruit", price: 1.5 },
  { name: "Celery", category: "Vegetable", price: 0.8 },
];

let answers1 = document.querySelector(".answers1");
let answers2 = document.querySelector(".answers2");
let answers3 = document.querySelector(".answers3");
let answers4 = document.querySelector(".answers4");
let answers5 = document.querySelector(".answers5");
let answers6 = document.querySelector(".answers6");
let answers7 = document.querySelector(".answers7");
let answers8 = document.querySelector(".answers8");
let answers9 = document.querySelector(".answers9");
let answers10 = document.querySelector(".answers10");

//1.Names
let names = items.map((a) => a.name);
console.log(names);
answers1.textContent = names;

//2.Fruits
let fruit = items
  .filter((item) => item.category === "Fruit")
  .map((a) => a.name);
console.log(fruit);
answers2.textContent = fruit;

//3.Total Cost
let cost = items.reduce((allcost, costs) => {
  return allcost + costs.price;
}, 0);
console.log(cost);
answers3.textContent = cost;

//4.Sorted Cost
let sorted = items.sort((a, b) => a.price - b.price).map((a) => a.name);
console.log(sorted);
answers4.textContent = sorted;

//5.Cucumber Details
let found = items.find((x) => x.name === "Cucumber");
console.log(found);
answers5.innerHTML = JSON.stringify(found);

//6.Totol cost of Fruits
let cost_f = items
  .filter((item) => item.category === "Fruit")
  .reduce((allcost, costs) => {
    return allcost + costs.price;
  }, 0);
console.log(cost_f);
answers6.textContent = cost_f;

//7.The Cheapest Fruit
let cheapest_f = items
  .filter((item) => item.category === "Fruit")
  .sort((a, b) => a.price - b.price)
  .map((a) => a.name);
console.log(cheapest_f[0]);
answers7.textContent = cheapest_f[0]

//8.List of fruit and cost
let List_F_cost = items.filter((item) => item.category === "Fruit")
.map((a) => [a.name, a.price]);
console.log(List_F_cost);
answers8.textContent = List_F_cost

//9.Average cost of vegi
let cost_v = items
  .filter((item) => item.category === "Vegetable")
  .reduce((allcost, costs) => {
    return allcost + costs.price;
  }, 0);
  let avg_cost = cost_v/items.filter((item) => item.category === "Vegetable").length
  console.log(avg_cost);
  answers9.textContent = avg_cost

//10.Vegi more than 1$
let v_more_than_1 = items.filter((item) => {
  return item.category === "Vegetable",
  item.price > 1;
}).map((a) => a.name)
console.log(v_more_than_1);
answers10.textContent = v_more_than_1
