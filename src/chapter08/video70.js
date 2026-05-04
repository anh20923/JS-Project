console.log("video 70");

// // =============================
// // 1. LẤY ELEMENT TỪ HTML
// // =============================

// const saveBtn = document.getElementById("btnSave");
// const inputTodo = document.getElementById("name");


// // =============================
// // 2. HÀM TẠO ID RANDOM
// // =============================

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // =============================
// // 3. KHI BẤM NÚT SAVE
// // =============================

// saveBtn.addEventListener("click", () => {

//     // Tạo todo mới
//     const myTodo = {
//         id: getRandomInt(1, 100000),
//         name: inputTodo.value
//     };

//     // Lấy todo cũ từ localStorage
//     const currentTodoStr = localStorage.getItem("todo");

//     // Nếu đã có todo trước đó
//     if (currentTodoStr) {

//         // convert from string to object
//         const currentTodo = JSON.parse(currentTodoStr);

//         // push thêm todo
//         currentTodo.push(myTodo);

//         localStorage.setItem("todo", JSON.stringify(currentTodo));
//     }

//     // Nếu chưa có todo nào
//     else {
//         localStorage.setItem("todo", JSON.stringify([myTodo]));
//     }
// });


const saveBtn = document.getElementById("btnSave")

const inputTodo = document.getElementById("name")

// Get randome number for id
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
    const myTodo = {
        id: getRandomInt(1,10000),
        name: inputTodo.value 
    }

    // Lay du lieu tu localStorage theo key
    const currentTodoStr = localStorage.getItem("todo")

    // Nếu đã tồn tại todo trước đấy thì push thêm todo
    if(currentTodoStr) {
        /* !!! Khi lưu giá trị xuống thì giá trị đang là kiểu string:
        "localStorage.setItem("todo", JSON.stringify([myTodo])) ", 
        phải convert từ kiểu string sang array thì mới push thêm phần tử vào được*/

        //convert from string to object
        const currentTodo = JSON.parse(currentTodoStr)

        //push thêm todo
        currentTodo.push(myTodo) //cap mhat ben trong memory may tinh
        localStorage.setItem("todo", JSON.stringify(currentTodo)) 
    } else {
        localStorage.setItem("todo", JSON.stringify([myTodo])) 

    }

    //success (redirect to video70.html)
    window.location.href ="video70.html"
})
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo")

    if(todoListStr){
        const todoList = JSON.parse(todoListStr)
        
        //insert data to html
        const tbody = document.querySelector("#todoList tbody")
        if(todoList && todoList.length){
            todoList.forEach((todo, index) => {
                tbody.innerHTML += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td><button class="btn-delete">Delete</button></td>
                </tr>
                `
            })
        }
    }  
}

generateTodoTable();
