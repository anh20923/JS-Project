console.log("Video 40")

const scores = [10, 8, 3, 7, 5]

//read data
// scores.forEach((element, index) => {
//     console.log("index =", index,"value =", element)
// })

//modify data
// const newScores = scores.map((element, index) => {
//     // console.log("index =", index,"value =", element)
//     return element*2;
// })

const newScores = scores.map((element, index) => element*3)

console.log("Original scores =", scores)
console.log("New scores = ", newScores)