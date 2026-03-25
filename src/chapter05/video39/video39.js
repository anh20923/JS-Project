console.log("Video 39")

//Duyệt mảng bằng vòng lặp for
let myFamily = ["Dad" , "Mom", "Anh", "Lam", "Kalle", "NA", "Suri", "Yumi", "Täplä"]
for(let i = 0; i < myFamily.length; i++){
    console.log("index =", i, " with value =", myFamily[i])
}



//Duyệt bằng forEach()
console.log("=====================================")
myFamily.forEach(function(member, index){
    console.log("index =", index,"with value =", member)
})

//for each with arrow function
console.log("=====================================")
myFamily.forEach((member, index)=>{
    console.log("index =", index,"with value =", member)
})