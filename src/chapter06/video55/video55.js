console.log("video 55")

const btn = document.getElementById("submitBtn");
const input = document.getElementById("inputName");

const currentName = document.getElementById("currentName");
const previousName = document.getElementById("previousName");


// ==============================
// HIỂN THỊ TÊN CŨ TỪ localStorage
// ==============================

const savedName = localStorage.getItem("inputName"); // lấy dữ liệu theo key

if (savedName) {
    previousName.innerHTML = `<b>${savedName}</b>`;
}


// ==============================
// KHI CLICK BUTTON
// ==============================

btn.addEventListener("click", () => {

    const newName = input.value;

    // lưu dữ liệu mới vào localStorage
    localStorage.setItem("name", newName); // localStorage.setItem("inputName", input.value);

    // hiển thị tên hiện tại
    currentName.innerHTML = `<b>${newName}</b>`;
});