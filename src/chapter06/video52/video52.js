console.log("video 52")

const myBtnElement = document.getElementById("myBtn")
const myTextElement = document.getElementById("myText")
const myBackBtn = document.getElementById("backBtn")

//
myBtnElement.addEventListener("click", () => {
    console.log("you click my button");
    //myTextElement.innerText = "This is a new text"
    myTextElement.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";
})

//
myBackBtn.addEventListener("click", () => {
    myTextElement.innerText = "Video 52"
})