const calcularIMC = document.querySelector('#calcularIMC')
const pesoNovoIMC = document.querySelector('#pesoNovoIMC')
let imc = 0;

calcularIMC.addEventListener('click', (e) => {
    e.preventDefault()

    const pesoIMC = document.querySelector('#pesoIMC').value
    const alturaIMC = document.querySelector('#alturaIMC').value

    imc = (pesoIMC / (alturaIMC * alturaIMC))

    if(imc <= 18.5){
        pesoNovoIMC.textContent = (`Abaixo do peso, imc: ${imc.toFixed(2)}`)
    }
    else if(imc <= 25){
        pesoNovoIMC.textContent = (`Peso normal, imc: ${imc.toFixed(2)}`)
    }
    else if(imc <= 30){
        pesoNovoIMC.textContent = (`Sobrepeso, imc: ${imc.toFixed(2)}`)
    }
    else if(imc <= 35){
        pesoNovoIMC.textContent = (`Obeso leve, imc: ${imc.toFixed(2)}`)
    }
    else if(imc <= 40){
        pesoNovoIMC.textContent = (`Obeso moderado, imc: ${imc.toFixed(2)}`)
    }
    else{
        pesoNovoIMC.textContent = (`Obeso mórbido, imc: ${imc.toFixed(2)}`)
    }
})
