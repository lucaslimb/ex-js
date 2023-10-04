const calcularByte = document.querySelector('#calcularByte')
const valorByte = document.querySelector('#valorByte')

calcularByte.addEventListener('click', (e) => {
    e.preventDefault()

    const valorMegaByte = document.querySelector('#valorMegaByte').value

    let valorConvertido = valorMegaByte * 1000000

    valorByte.textContent = (`${valorMegaByte} megabyte(s) em bytes é: ${valorConvertido}`)
})