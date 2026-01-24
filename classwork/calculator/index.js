let Amount = document.getElementById("loan")
let Rante = document.getElementById("rante")
let Term = document.getElementById("term")
let btn = document.getElementById("btn")
let circle = document.getElementById("circle")

function loan() {
    if (Amount.value && Rante.value && Term.value) {
        circle.style.display = "block"
        let all = (Amount)*(Rante/100)*(Term/12)
        circle.innerHTML = all
    } else {
        circle.style.display = "none"
    }
}
