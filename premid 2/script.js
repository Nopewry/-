//map
let score = [1,2,3,4,5]
let mapScore = score.map((x) => {
  if(x > 2){
    return true
  }
})

console.log(score);
console.log(mapScore);

let filterScore = score.filter((x) => {
  return x > 2
})

console.log(filterScore);

let reduceScore = score.reduce((sum, score) => {
  return sum + score
})

console.log(reduceScore);
















































// let score = [50, 60, 70, 80];
// // let passFailscore = score.map((score) => {
// //   if(score > 50){
// //     return "passed"
// //   }
// //   return "fail"
// // })

// // let passscore = score.filter((score) => {
// //   return score > 50
// // })

// console.log(score);

// let sumScore = score.reduce((sum, score) => {
//   console.log("score = " + score);
//   console.log("sum = " + sum);
//   return sum + score;
// })

// // console.log(score);
// console.log(sumScore);
// // console.log(passscore);
// // console.log(passFailscore);