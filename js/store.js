const button = document.querySelector("button");
const h2 = document.querySelector("h2");
let userInfo = {name:"foo", age:100};


button.addEventListener("click", function () {
    if (!localStorage.getItem("user")) {
        h2.innerHTML = "el userInfo se almaceno..." 
        localStorage.setItem("user", JSON.stringify(userInfo))
    } else {
<<<<<<< HEAD
        h2.innerHTML = "el userInfo se almaceno... y ya existe el setItem" 
=======
        h2.innerHTML = "el userInfo ya estaba almacenada..." 
>>>>>>> b3d87eb00a62d289ce7f11b60b99e6ee0b852dfa
    }
})

window.onload = function(){
    if (localStorage.getItem("user") ){
        h2.innerHTML = "el userInfo se almaceno... y ya existe el setItem"
    }else{
        h2.innerHTML = "el userInfo no existe, presione el boton para guardar."
    }
}
