const botao3 = document.querySelector('#btnEx3')
const numeroSorteado3 = document.querySelector('#numeroSorteado')
const intervalo = document.querySelector('#intervalo')

botao3.addEventListener('click', () => {
    let numero = Math.floor(Math.random()*500)
    numeroSorteado3.textContent = (`Número sorteado: ${numero}`)

    if(numero > 100 && numero < 300)
        intervalo.textContent = ('Número entre 100 e 300.')
    else
        intervalo.textContent = ('Número fora do intervalo.')

})
