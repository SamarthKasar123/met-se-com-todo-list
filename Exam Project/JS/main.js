let addbutton = document.querySelector(".creat");
let popupnew = document.querySelector("#popmain");
let save = document.querySelector("#todosave");
let Name = document.querySelector("#todoname");
let description = document.querySelector("#tododescription");
let priority = document.querySelector("#todopriority");


addbutton.addEventListener("click",()=>{
    popupnew.classList.remove("d-non")
});

save.addEventListener("click",()=>{
    let newuser={name:Name.value,
     description:description.value,
    priority:priority.value,
}

    let userdetail=localStorage.getItem("user");
    
    userdetail=userdetail=== null ? [] : JSON.parse (userdetail);

    let is_exist=userdetail.find((value)=>{
        return value.name === newuser.name;

    });
    
    if (is_exist===undefined){
        userdetail.push(newuser);
        localStorage.setItem("user",JSON.stringify(userdetail));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500
            
          });popup.classList.add("d-non")
    }
    
  });
    
  