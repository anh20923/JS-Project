console.log("video 70")

const saveBtn = document.getElementById("btnSave")
const inputTodo = document.getElementById("name")


saveBtn.addEventListener("click", () => {
    alert(inputTodo.value)
})