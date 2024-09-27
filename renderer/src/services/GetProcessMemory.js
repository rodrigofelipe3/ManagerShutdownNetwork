import swal from "sweetalert"

export const getProcessMemory = async (IP) => { 
    const URL = `http://${IP}:5001/api/sendprocess/memory`
    const options = { 
        method: "GET",
        headers: { 
            "Content-Type":"application/json"
        }
    }
    
    const response = await fetch(URL, options)
    .then((response)=> response.json())
    .then((data)=> {
        return data
    })
    .catch((err)=> { 
        swal({
            title: "Error",
            text: err,
            icon: "error",
            timer: 2000
        })
        return console.error(err)
    })

    return response
}