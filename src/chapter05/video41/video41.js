console.log("Video 41")

const ages = [10,20,30,25,12,19];

//map()
const agesX2 = ages.map((item, index) => {
    return item*2;
})

//filter()
const agesGreaterThan18 = ages.filter((item, index) =>{
    return item > 18;
})

console.log("Origin: ", ages)
console.log("AgesX2: ", agesX2)
console.log("Age greater than 18: ", agesGreaterThan18)