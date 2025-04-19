
    let fetchData= async()=>{
    
    let url='http://localhost:3000/whatsapp'
    
    // let res =await fetch(url)
    let res =await fetch(url ,{method:"GET"})
    
    
    let data = await res.json()
    
    console.log(data);
    
    let show = document.getElementById('datashow')
    data.map((e)=>{
        show.innerHTML+=`
          <div class="message my_msg">
                    <p>${e.name}</p>
                </div>
    
        `
    })

    }
    
    
    fetchData()
    // :- isko body mai dal diya
    
    
    
    //post method 
    let book=()=>{
    let inpname = document.getElementById('inpmsg').value
    
    
    let url = "http://localhost:3000/whatsapp"
    
    fetch(url,{
    method:"POST",
    headers:{
    "content-type":"application/json"
    },
    body:JSON.stringify(
    {
        "name":inpname,
    
    }
    )
    })

    return false
    }
    
