const calcular = document.querySelector('#calcular')
const pesoNovo = document.querySelector('#pesoNovo')

calcular.addEventListener('click', (e) => {
    e.preventDefault() // função para manter a informação do formulario

    const pTerra = document.querySelector('#peso').value
    const planeta = document.querySelector('#planeta').value
    let peso;

    switch (planeta) {
        case '1': //mercurio
            peso = pTerra * 0.37 //nota: no exercicio é preciso dividir por 100 o peso na terra, mas como o peso é em kg só é preciso multiplicar pela gravidade do planeta.
            break
        case '2': //venus
            peso = pTerra * 0.88
            break
        case '3': //marte
            peso = pTerra * 0.38
            break
        case '4': //jupiter
            peso = pTerra * 2.64
            break
        case '5': //saturno
            peso = pTerra * 1.15
            break
        case '6': //urano
            peso = pTerra * 1.17
            break
        default:
            pesoNovo.textContent = ('Valor do planeta incorreto!')
            break
    }
    pesoNovo.textContent = (`Peso: ${peso.toFixed(3)}`)

})