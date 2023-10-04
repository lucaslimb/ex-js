const btnNota = document.querySelector('#btnNota')
const notas = document.querySelector('#notas')
const mediaNotas = document.querySelector('#mediaNotas')
const conceitoNotas = document.querySelector('#conceitoNotas')
const mensagemNotas = document.querySelector('#mensagemNotas')

btnNota.addEventListener('click', (e) => {
    e.preventDefault()

    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)
    let nota4 = Number(document.querySelector('#nota4').value)

    let media2 = (nota1 + nota2 + nota3 + nota4) / 4
    let conceito;
    let mensagem;

    if(media2 <= 4){
        conceito = 'E'
        mensagem = 'REPROVADO'
    }
    else if(media2 <= 6){
        conceito = 'D'
        mensagem = 'REPROVADO'
    }
    else{ 
        mensagem = 'APROVADO'
        if(media2 <= 7.5){
            conceito = 'C'
        }
        else if(media2 <= 9){
            conceito = 'B'
        }
        else{
            conceito = 'A'
        }
    }
    
    notas.textContent = (`Notas: ${nota1} - ${nota2} - ${nota3} - ${nota4}`)
    mediaNotas.textContent = (`Média: ${media2}`)
    conceitoNotas.textContent = (`Conceito: ${conceito}`)
    mensagemNotas.textContent = (mensagem)    
})