/* Desenvolva sua lógica aqui ... */
const renderDarkmode =()=>{
    const button = document.querySelector(".header_button");
    const html = document.querySelector("html");
    const theme = JSON.parse(localStorage.getItem("darkMode"))

    if(theme){
        button.innerText = "Light mode"
        localStorage.setItem("darkMode", true)
    }else{
        button.innerText = "Dark mode"
        localStorage.setItem("darkMode", false)
    }

    button.addEventListener("click",()=>{
        html.classList.toggle("dark_mode")

        if(html.classList.contains("dark_mode")){
            button.innerText = "Light mode"
            localStorage.setItem("darkMode", true)
        }else{
            button.innerText = "Dark mode"
            localStorage.setItem("darkMode", false)
        }
    })
}
renderDarkmode()