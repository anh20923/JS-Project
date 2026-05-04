console.log("video 70");

// =============================
// 1. LẤY ELEMENT TỪ HTML
// =============================

const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");


// =============================
// 2. HÀM TẠO ID RANDOM
// =============================

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// =============================
// 3. KHI BẤM NÚT SAVE
// =============================

saveBtn.addEventListener("click", () => {

    // Tạo todo mới
    const myTodo = {
        id: getRandomInt(1, 100000),
        name: inputTodo.value
    };

    // Lấy todo cũ từ localStorage
    const currentTodoStr = localStorage.getItem("todo");

    // Nếu đã có todo trước đó
    if (currentTodoStr) {

        // convert from string to object
        const currentTodo = JSON.parse(currentTodoStr);

        // push thêm todo
        currentTodo.push(myTodo);

        localStorage.setItem("todo", JSON.stringify(currentTodo));
    }

    // Nếu chưa có todo nào
    else {
        localStorage.setItem("todo", JSON.stringify([myTodo]));
    }
});