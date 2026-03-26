console.log("Video44")

const st1 = {
    username: "Anh",
    score: 7
}

const st2 = {
    username: "Kalle",
    score: 8
}

const st3 = {
    username: "Täplä",
    score: 9
}

const students = [st1, st2, st3]
console.log(">>> check students: ", students) 

// duyet voi for each
// students.forEach((item, index) => {
//     console.log(">>> index = ", index, "name = ", item.username)
// })


//for-in
const person = {
    email: "hoidanit@gmail.com",
    age: 25,
    address: "vietnam"
}

//1.
// for (let key in person) {
//     console.log(key, person[key]); // in ra key value
// }


//2.
// for (let value of Object.values(person)) {
//     console.log(value);
// }


//3.
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}