let input = document.querySelector("#search")
console.log(input.placeholder)
input.addEventListener("keydown",() =>{
    const lupa = document.querySelector(".lupa")
    console.log(input.value)
    if(input.value){
        lupa.style.visibility = "hidden"
        return
    }
        lupa.style.visibility = "visible"
    

  
})