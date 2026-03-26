console.log("Video 43")

const person = {
    name1: "hoidanit",
    age: 25
}

console.log("person before: ", person);

//get data
// console.log("age: ", person.age);
// console.log("name: ", person["name1"]) 

//adding more info - set data
person.address ="saigon"
person["language"] = "vietnamese, english"
console.log("person after adding: ", person)


//detele 
delete person.address
console.log("person after deleting: ", person)


