// sychronus
// function brewCoffee() {
//   console.log("starting");
//   const starttime = new Date().getTime();
//   while (new Date().getTime() < starttime + 2000) {
//     console.log("ready");
//   }
// }

// console.log("order");
// brewCoffee();

// console.log("done");

//-------------------------------------------------------

// asynchonnous 1
// function brewCoffee(callback) {
//     console.log("starting");
//     setTimeout(() => {
//         console.log("ready");
//         callback()
//     }, 3000);
//   }

//   console.log("order");
//   brewCoffee(() =>{
//     console.log("done");
//   });

//   console.log("waiting");

// asynchonnous 2 aysnc - await
function brewCoffee(callback) {
  return new Promise((resolve) => {
    console.log("starting");
    setTimeout(() => {
      console.log("ready");
      resolve();
    }, 3000);
  });
}

async function order() {
  console.log("order");
  await brewCoffee();
  console.log("done");
}

console.log("waiting");
