console.log("lab 04")

const usernameElement = document.getElementById("username")
const passwordElement = document.getElementById("password")
const btnLogin = document.getElementById("btnLogin")

if(username){

}
btnLogin.addEventListener("click", () => {
    const username = usernameElement.value
    const password = passwordElement.value
    
    if(username === "anh@gmail.com" && password === "123456") {
        alert("Login successful!")
        window.location.href="success.html"
    }else {
        alert("User name/password not correct!!")
        usernameElement.style.borderColor ="red"
        passwordElement.style.borderColor ="red"
    }
})