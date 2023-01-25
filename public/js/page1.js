let fire = document.querySelector(".fire")
let acide = document.querySelector(".acide")
let smoke = document.querySelector(".smoke")
let rock = document.querySelector(".rock")

let barre1 =document.querySelector(".barre1")
let barre2 =document.querySelector(".barre2")

function attaque1() {
    barre1.value -=10
}
function attaque2(params) {
    barre2.value -=10
}
fire.addEventListener('click',()=>{
    attaque1()
    attaque2()
})


