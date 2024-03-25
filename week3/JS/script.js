console.log("hello world");

let title = "JavaScript";
console.log(title);

let fristname = "Nopey";
let age = 20;
let my_gpa = 8.19;

console.log(age);
age = 44;
console.log(age);

console.log(2023 - age);

const thisyear = 2023;
const birthyeae = 2002;
console.log("I am " + thisyear - birthyeae);
const lastname = "asde";

const tom_birthyear = 2002;

const lek_birthyear = 2000;

const john_birthyear = 2004;

const tomage = thisyear - tom_birthyear;
const lekage = thisyear - lek_birthyear;
const johnage = thisyear - john_birthyear;

const aveage = (tomage + lekage + johnage) / 3;
console.log(tomage, lekage, johnage, aveage);

let aveyear = (tom_birthyear + lek_birthyear + john_birthyear) / 3;

console.log("birth year aveage = " + aveyear);

console.log("helle \nworld");

console.log("I'm " + fristname + " " + lastname + ".");
console.log(`I'm ${fristname} ${lastname}.`);

const agemax = 16;
if (agemax >= 18) {
  console.log("He can drive a car");
} else {
  console.log("He can't drive a car");
}

//exercise 1
let stampPrice = 30;
let pillowPrice = stampPrice * 50 + 1;
let emmaStamp = 33 * 30;

console.log("emma need อีก " + (pillowPrice - emmaStamp) + " baht");

//have if condition
if (emmaStamp >= pillowPrice) {
  console.log("emma got a pillow");
} else {
  console.log(
    "emma need อีก " + (pillowPrice - emmaStamp) + " baht to buy a piilow"
  );
}

console.log(typeof stampPrice);
age = 23;
console.log(thisyear - age);
const strYear = "2023";
console.log(strYear + age);
console.log(strYear - age);

console.log(Number(strYear) + age);
console.log(Number(fristname));
console.log(typeof NaN);
console.log(Number(strYear), strYear);

console.log("I'm " + 18 + " year old");
console.log("2023" - 23);
console.log("2023" - "23" - 23);
console.log("2023" + "23" - 23);
console.log("14" * "7");
console.log("44" / "2");

const noname = "";
console.log(Boolean(noname));

const istrue = true;
const isfalse = false;

console.log(istrue && isfalse);
console.log(istrue || isfalse);
console.log(!istrue);
console.log(!isfalse);

if (istrue && !isfalse) {
  console.log("Only true and true will be truth");
}
/*โปรแกรม JavaScript เพื่อตรวจสอบว่าบุคคลหนึ่งสามารถเข้าชมสวนสนุกได้หรือไม่ โดยมีเงื่อนไขดังนี้:

อายุ age: ต้องมีอายุไม่น้อยกว่า 12 ปี และไม่เกิน 65 ปี
ส่วนสูง height: ต้องมีส่วนสูงไม่ต่ำกว่า 140 ซม.
ตั๋ว hasTicket: ต้องมีตั๋วเข้าชม
ให้สร้างตัวแปรเพื่อจำลองอายุ, ส่วนสูง, และสถานะการมีตั๋วของบุคคล 
และใช้ if statement ร่วมกับ boolean operators 
เพื่อตรวจสอบว่าบุคคลนั้นตรงตามเงื่อนไขทั้งหมดหรือไม่*/

let height;
let hasTicket;

age = 50;
height = 180;
hasTicket = true;
if (age >= 12 && age <= 65 && height >= 140 && hasTicket) {
  console.log("Welcome to the amusement park");
} else {
  console.log("Sorry, you can't ebter the amusement park");
}

const day = "wednesday";
switch (day) {
  case "monday":
    console.log("today is Monday");
    break;

  case "tuesday":
    console.log("today is Tuesday");
    break;

  case "wednesday":
    console.log(
      "Psycho Killer Qu'est-ce que c'est? Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better"
    );
    break;

  default:
    console.log("invalid day");
    break;
}

function convertTmp(value, unit) {
  let result;

  switch (unit) {
    case "Celsius":
      result = {
        Farenheit: value * (9 / 5) + 3,
        Kelvin: value + 273.15,
      };
      break;

    case "Farenheit":
      result = {
        Celsius: (value - 32) * (5 / 9),
        Kelvin: (value - 32) * (5 / 9) + 273.15,
      };
      break;

    case "Kelvin":
      result = {
        Celsius: value - 273.15,
        Farenheit: ((value - 273.15) * 9) / 5 + 32,
      };

    default:
      console.log("invalid unit");
  }

  return result;
}

console.log(convertTmp(23, "Celsius"));

function groot() {
  console.log("I'm Groot");
}

groot();

function calage(birthyear) {
  return 2024 - birthyear;
}

const age1 = calage(1999);
console.log(age1);

const calage2 = (birthyear) => 2024 - birthyear;
const age2 = calage2(1999);
console.log(age2);

const calcir = (radius) => 2 * Math.PI * radius;

const calarea = (radius) => Math.PI * radius * radius;

const printcircal = (radius) => {
  cir = calcir(radius);
  area = calarea(radius);
  console.log(`radius = ${radius} \n\cir = ${cir} \n\area = ${area}`);
};

printcircal(10);

const friend1 = "a";
const friend2 = "b";
const friend3 = "c";
console.log(friend1, friend2, friend3);

const friends = ["G", "P", "T"];
console.log(friends);
console.log(friends[0]);

console.log(friends.length);

fristname = "jo";
const bio = [fristname, "biden", 2023 - 1986, "president", friends];
console.log(bio, bio.length);
console.log(age - bio[2]);

let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.forEach((number) => console.log(number));

let fruit = ["apple", "banana", "orange"];
console.log(fruit);
fruit[2] = "blueberry";
console.log(fruit);

let user = [
  { name: "ada", age: 35 },
  { name: "dennis", age: 20 },
  { name: "jojo", age: 5000 },
];
console.log(user[0]);

let findada = user.find((user) => user.name === "ada");

user.push({ name: "asd", age: 50 });

user = user.filter((user) => user.name != "jojo");
user.shift();

const dave = {
  fristname: "steve",
  lastname: "roger",
  job: "dancer",
  salary: 20,
  age: thisyear - 2000,
  friends: ["G", "P", "T"],
  calage: function (age) {
    this.age = 2024 - this.birthyear;
    return this.age;
  },
  getsummary: function () {
    return `${dave.fristname} ${dave.lastname} has ${dave.friends.length} friends, and his best friend is ${dave.friends[0]}.`;
  },
};
console.log(dave["fristname"]);
console.log(dave.fristname);

const suffix = "name";

console.log(dave["frist" + suffix]);
console.log(dave.getsummary());

fristname = "kuy";
lname = "yuk";
console.log("my name is " + fristname + " my last name is " + lname);
console.log(`my name is ${fristname} my last name is ${lname}`);


for (let i = 1 ; i < 5 ; i++)
{
  console.log("hello");
}