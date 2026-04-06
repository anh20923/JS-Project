console.log("video 53")

const myTextElement= document.getElementById("myText")
const myBtnElement= document.getElementById("myBtn")
const backBtnElement= document.getElementById("backBtn")


myBtnElement.addEventListener("click", () => {
    console.log("click me")
    myTextElement.style.border="solid";
    myTextElement.style.color ="blue";
    myTextElement.style.backgroundColor ="aqua";
})

backBtnElement.addEventListener("click", () => {
    console.log("click me")
    myTextElement.style.border="unset";
    myTextElement.style.color ="black";
    myTextElement.style.backgroundColor ="unset";
})
