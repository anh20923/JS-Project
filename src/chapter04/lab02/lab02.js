console.log("Lab 02")

let calAverage = (math, literature, english) =>{
    return (math+literature+english) / 3;
    
}

let classifyGrade = (avg) => {
    if (avg > 9) return "Excellent";
    else if (avg >= 8 && avg < 9) return "Good";
    else if (avg >= 6.5 && avg < 8) return "Fair";
    else return "Average";

}

//main
const math = 9; 
const literature = 8; 
const english = 7; 

let avgPoint = calAverage(math, literature, english)

console.log(
`Average grade is: ${avgPoint}
Classify: ${classifyGrade(avgPoint)}
`)
