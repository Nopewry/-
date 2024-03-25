for (let i = 0; i <= 10; i++) {
  console.log(`count numer ${i}`);
}

const numArr = ["1", "2", "3", "4", "5"];

for (let i = 0; i <= numArr.length; i++) {
  console.log(`ยก ${numArr[i]}`);
}
let count = 0;
while (count <= numArr.length) {
  console.log(`count #${numArr[count]}`);
  count++;
}

numArr.forEach(function (num) {
  console.log(`Show num ${num}`);
});

numArr.forEach((num) => console.log(`num => ${num}`));

numArr.forEach((v, i, a) => console.log(`${v}, ${i}, ${a}`));

const person = {
  name: "James",
  age: 28,
  gender: "optimus",
};

console.log(person[0]);
console.log(person.age);

for (const key in person) {
  console.log(`p = ${person[key]}`);
}

for (const num of numArr) {
  console.log(num);
}
const an = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i <= an.length; i++) {
  if (an[i] % 3 == 0) {
    sum += an[i];
  }
}
console.log(sum);

sum = 0;
an.forEach(function (num) {
  if (num % 3 == 0) {
    sum += num;
  }
});
console.log(sum);

sum = 0;
for (const key in an) {
  if (an[key] % 3 == 0) {
    sum += an[key];
  }
}
console.log(sum);

sum = 0;
for (const iterator of an) {
  if (iterator % 3 == 0) {
    sum += iterator;
  }
}
console.log(sum);

// const sqrnum = [];

// for (const key in an) {
// //   sqrnum[key] = an[key] ** 2;
//     sqrnum.push(an[key] ** 2)
//   console.log(sqrnum[key]);
// }

let sqrnum = an.map((num) => num ** 2);
console.log(sqrnum);

let total = 0;
for (const key in an) {
  total += an[key];
  console.log(total);
}

let sumnum = an.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sumnum);

let rannum = [1, 3, 5, 9, 4, 5, 2, 7];

let sortednum = rannum.sort((a, b) => a - b);

let enu = sortednum.filter((num) => num % 2 === 0);

console.log(sortednum);

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];

let arr = data.map((item) => item.value);
let mod3 = arr.filter((item) => item % 3 === 0);
let sum3 = mod3.reduce((acc, cur) => acc + cur, 0);

let result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(result);
