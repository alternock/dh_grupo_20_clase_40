const button = document.querySelector("button");
const h2 = document.querySelector("h2");
let userInfo = {name:"foo", age:100};


button.addEventListener("click", function () {
    if (!localStorage.getItem("user")) {
        h2.innerHTML = "el userInfo se almaceno..." 
        localStorage.setItem("user", JSON.stringify(userInfo))
    } else {
        h2.innerHTML = "el userInfo se almaceno... y ya existe el setItem" 
    }
})

window.onload = function(){
    if (localStorage.getItem("user") ){
        h2.innerHTML = "el userInfo se almaceno... y ya existe el setItem"
    }else{
        h2.innerHTML = "el userInfo no existe, presione el boton para guardar."
    }
}
