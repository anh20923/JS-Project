console.log("Video 38")

//access
let colors = ["red", "green", "blue", "pink"]; 
console.log(colors[0]); // "red" (phần tử đầu tiên) 
console.log(colors[1]); // "green" 
console.log(colors[2]); // "blue" 
//Nếu truy cập phần tử không tồn tại → kết quả là undefined 

//update
// colors[2] = "purple"
// console.log(colors)

//add, delete
console.log("Origin: ", colors)

colors.push(true, 23) //add in the end
colors.unshift("Anh", "Kalle") // add beginning
console.log("Array after adding:", colors)

colors.pop() // delete in the end
colors.shift() // delete beginning
console.log("Array after deleting:", colors)