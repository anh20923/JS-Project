console.log("1. Bắt đầu");

// Tạo một Promise để giả lập một tác vụ mất thời gian (ví dụ: tải dữ liệu từ server)
const myPromise = new Promise((resolve, reject) => {
    console.log("2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)");

    // setTimeout là một hàm bất đồng bộ, nó sẽ không "dừng" chương trình ở đây
    setTimeout(() => {
        resolve("4. Tác vụ hoàn thành!"); // Dòng này sẽ được thực thi sau cùng
    }, 2000); // Chờ 2 giây
});

// .then() đăng ký một hành động sẽ làm KHI promise hoàn thành
myPromise.then((message) => {
    console.log("message: ", message);
});

console.log("3. Kết thúc kịch bản chính");

/** OUTPUT
1. Bắt đầu
2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)
3. Kết thúc kịch bản chính

Chờ 2 giây...

4. Tác vụ hoàn thành!
*/