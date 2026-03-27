console.log("Lab 03")

const pr1 = {
    name: "T-shirt",
    price: 500,
    inStock: true
}

const pr2 = {
    name: "Hoodie",
    price: 600,
    inStock: false
}

const pr3 = {
    name: "Jacket",
    price: 800,
    inStock: true
}

const pr4 = {
    name: "Jeans",
    price: 750,
    inStock: true
}

const pr5 = {
    name: "shorts",
    price: 250,
    inStock: false
}

const products = [pr1, pr2, pr3, pr4, pr5]
console.log("original: ", products)
// 1. In ra tên của sản phẩm đầu tiên. 
console.log("Name of first product: ",pr1.name)

const firstProduct = products[0]
console.log("1. Name of first product: ", firstProduct.name)

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm 
const products_clone = [pr1, {
    name: pr2.name,
    price: 150,
    inStock: pr2.inStock
}, pr3, pr4, pr5]

console.log("2.New array after price of second product had changed: ", products_clone)

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm 
products.push( {
    name: "party dress",
    price: 525,
    inStock: false
})

console.log("3. Adding new product at the end of the array: ", products)

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm 
products.pop()

console.log("4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm: ", products)

// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm. 
console.log("5. Name of each product: ")
products.forEach((item, index) => {
    console.log(item.name)
})

// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm. 
const priceList = products.map((item,index) => {
    return item.price
})
console.log("6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm: ", priceList)

// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true). 
const inStockIsTrue = products.filter((item, index) =>{
    return item.inStock === true
})
console.log("7.Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true): ", inStockIsTrue)

// // 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên. 
console.log("8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên: ")
for (let key in pr1){
    console.log(key, pr1[key])
}