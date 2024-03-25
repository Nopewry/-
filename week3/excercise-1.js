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
