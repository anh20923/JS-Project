console.log("Video 21")

// Cau lenh console
console.log("info") // In giá trị ra màn hình console 
console.error("oops my mistake") // Hiển thị lỗi 
console.warn("test warning") // Hiển thị cảnh báo

//------------------------------------------------------------
//Sử dụng dấu phẩy thay vì cộng chuỗi trong console.log() 
let name = "hoidanit"; 
let age = 20; 
console.log(name, age)

// Không nên: cộng chuỗi dễ sai 
console.log("Name: " + name + ", Age: " + age); 

// Nên: dùng dấu phẩy (tự động thêm dấu cách) 
console.log("Name:", name,", Age:", age); 

//Tô màu cho console.log() bằng %c 
console.log("%cCảnh báo!", "color: red; font-weight: bold;");