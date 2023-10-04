const btnRespostas = document.querySelector('#btnRespostas')
const resultado = document.querySelector('#resultado')

btnRespostas.addEventListener('click', (e) => {
    e.preventDefault()

    let resposta1 = document.querySelector('#resposta1').value
    let resposta2 = document.querySelector('#resposta2').value
    let resposta3 = document.querySelector('#resposta3').value
    let resposta4 = document.querySelector('#resposta4').value
    let resposta5 = document.querySelector('#resposta5').value

    let respostaArray = [resposta1, resposta2, resposta3, resposta4, resposta5]
    
    let sim = 0;

    for(i = 0; i < respostaArray.length; i++){
        if((respostaArray[i] === 'sim') || (respostaArray[i] === 'Sim') || (respostaArray[i] === 'SIM') || (respostaArray[i] === 's') || (respostaArray[i] === 'S')){
            sim++
        }
    }

    if(sim <= 1){
        resultado.textContent = (`Inocente (respostas positivas: ${sim})`)
    }
    else if(sim < 3){
        resultado.textContent = (`Suspeito (respostas positivas: ${sim})`)
    }
    else if(sim <= 4){
        resultado.textContent = (`Cumplice (respostas positivas: ${sim})`)
    }
    else{
        resultado.textContent = (`Assassino (respostas positivas: ${sim})`)
    }
})