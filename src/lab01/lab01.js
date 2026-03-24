console.log("Lab 01")

let fullName = "Tran My Anh";
let birthYear = 1994
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear()

const info = 
`Full name: ${fullName}
Age: ${currentYear - birthYear}
Student: ${isStudent}
`

console.log(info)