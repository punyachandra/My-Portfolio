const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      serachToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");
      

      let getMode = localStorage.getItem('mode');
        if(getMode && getMode === "dark-mode"){
            body.classList.toggle("dark"); 
        }
      

    
//js code to toggle dark and light mode 
      modeToggle.addEventListener("click" ,()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode","light-mode");
        }else{
            localStorage.setItem("mode","dark-mode");
        }
      });



    //js code to toggle search box 
     serachToggle.addEventListener("click" ,()=>{
     serachToggle.classList.toggle("active");
    });


    //js to side toggle

    // sidebarOpen.addEventListener("click" , ()=>{
    //     nav.classList.add("active");
    // });


    // body.addEventListener("click" , e =>{
    //     let clickedEIN = e.target;
    //     if(!clickedEIN.classList.contains("sidebarOpen") && !clickedEIN.classList.contains("menu")){
    //         nav.classList.remove("active");
    //     }
    // });



hambur = document.querySelector(".hambur");
hambur.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active")
}