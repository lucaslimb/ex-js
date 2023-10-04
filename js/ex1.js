const botao = document.querySelector('#btnEx1')
const exibirNmrs = document.querySelector('#numerosSorteados')
const exibirMaiorq10 = document.querySelector('#maioresQue10')


botao.addEventListener('click', function(){
    const numeros = []
    const maiorQue10 = []

    for(i = 0; i < 5; i++){
        let = numeroSorteado = Math.floor(Math.random()*100)
        numeros.push(numeroSorteado)
        exibirNmrs.textContent = (`Números sorteados: ${numeros}`)
        if(numeroSorteado > 10)      
        maiorQue10.push(numeroSorteado)
        exibirMaiorq10.textContent = (`Quantidade de números maiores que 10: ${maiorQue10.length}`)
    }
    
})