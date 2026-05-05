console.log("video72")

const fetchBlogs = async() => { 
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json();
    console.log(data)

    //Insert data to html
    const tbody = document.querySelector("#blogs tbody")
    if(data && data.length){
        data.forEach((blog, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        `
        }) 
    }
}

//
const handleAddNewBlog = () => {
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const content = document.getElementById("content")
    const saveBlogBtn = document.getElementById("saveBlog")

    saveBlogBtn.addEventListener("click", async() =>{
        //call api to create a new blog
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        console.log(data)
        
    })
}


fetchBlogs()
handleAddNewBlog()