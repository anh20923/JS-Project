console.log("lab 05")


const fetchUsers = async() => {
    const res = await fetch("http://localhost:8000/users")
    const data = await res.json()
    console.log(data)
    
    if(data && data.length){
        const tbody = document.querySelector("#users tbody");
        data.forEach((user, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.mail}</td>
            </tr>`
        });
        
    }
}

fetchUsers()