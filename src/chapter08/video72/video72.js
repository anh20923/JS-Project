console.log("video72")

const fetchBlogs = async() => { 
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json();
    console.log(data)

}