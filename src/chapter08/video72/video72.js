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
fetchBlogs()