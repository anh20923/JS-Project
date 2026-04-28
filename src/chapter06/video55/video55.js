console.log("video 55")

const btn = document.getElementById("submitBtn")
const input = document.getElementById("inputName")

const prevElement = document.getElementById("previousName")
const prevName = localStorage.getItem("inputName")
if(prevName){
    prevElement.innerHTML = `<b>${prevName}</b>`;
}

btn.addEventListener("click", () => {
    //console.log(input.value)
    localStorage.setItem("inputName", input.value)
    document.getElementById("currentName").innerHTML = `<b>${input.value}</b>`;

})