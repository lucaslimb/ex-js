const btnDiaria = document.querySelector('#btnDiaria')
const taxaServico = document.querySelector('#taxaServico')
const totalDias = document.querySelector('#totalDias')
const totalGeral = document.querySelector('#totalGeral')

btnDiaria.addEventListener('click', (e) => {
    e.preventDefault()

    const numeroDiarias = Number(document.querySelector('#numeroDiarias').value)
    let valorTaxa;

    if(numeroDiarias < 15){
        valorTaxa = 58
    }
    else if (numeroDiarias < 16){
        valorTaxa = 46
    }
    else{
        valorTaxa = 35.5
    }

    let total = 360 * numeroDiarias + valorTaxa

    totalDias.textContent = (`Diárias: ${numeroDiarias}`)
    taxaServico.textContent = (`Taxa de serviço: R$${valorTaxa}`)
    totalGeral.textContent = (`Valor total: R$${total}`)
})
