const botao2 = document.querySelector('#btnEx2')
const exibirNmrs2 = document.querySelector('#numerosSorteados2')
const media = document.querySelector('#media')
const maiorQueMedia = document.querySelector('#maiorQueMedia')


botao2.addEventListener('click', function(){
    const numeros = []
    const maiores = []
    let mediaSorteio = 0
    let soma = 0

    for(i = 0; i < 10; i++){
        let = numeroSorteado2 = Math.floor(Math.random()*100)
        numeros.push(numeroSorteado2)
    }

    for(i = 0; i < numeros.length; i++){
        soma += numeros[i]
        mediaSorteio = soma / 10
    }    

    for(i = 0; i < numeros.length; i++){
        if(numeros[i] > mediaSorteio)
        maiores.push(numeros[i])
    }

    exibirNmrs2.textContent = (`Numeros sorteados: ${numeros}`)
    media.textContent = (`Média dos numeros sorteados: ${mediaSorteio}`)
    maiorQueMedia.textContent = (`Numeros maiores que a media: ${maiores}`)
})