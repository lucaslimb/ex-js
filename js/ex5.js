const botao5 = document.querySelector('#calcularCredito')
const saldoNovo = document.querySelector('#saldo')
const percentual = document.querySelector('#percentual')
const creditoEspecial = document.querySelector('#creditoEspecial')

botao5.addEventListener('click', (e) => {
    e.preventDefault()

    const saldo = document.querySelector('#saldoMedio').value
    let valorCredito = 0;

    if(saldo <= 2000){
        saldoNovo.textContent = (`Seu saldo médio: R$${saldo}`)
        percentual.textContent = ('Seu percentual de crédito é: 0%')
        creditoEspecial.textContent = ('Não há crédito especial.')
    }
    else if(saldo <= 10000){
        saldoNovo.textContent = (`Seu saldo médio: R$${saldo}`)
        percentual.textContent = ('Seu percentual de crédito é: 20%')
        valorCredito = (saldo/100) * 20
        creditoEspecial.textContent = (`O valor do crédito especial é: R$${valorCredito.toFixed(2)}`)
    }
    else if(saldo <= 20000){
        saldoNovo.textContent = (`Seu saldo médio: R$${saldo}`)
        percentual.textContent = ('Seu percentual de crédito é: 30%')
        valorCredito = (saldo/100) * 30
        creditoEspecial.textContent = (`O valor do crédito especial é: R$${valorCredito.toFixed(2)}`)
    }
    else {
        saldoNovo.textContent = (`Seu saldo médio: R$${saldo}`)
        percentual.textContent = ('Seu percentual de crédito é: 40%')
        valorCredito = (saldo/100) * 40
        creditoEspecial.textContent = (`O valor do crédito especial é: R$${valorCredito.toFixed(2)}`)
    }
    
})