// Variáveis globais
let quizzes = document.querySelectorAll('.quiz')
let quizOne = document.querySelector('.question-01')
let quizTwo = document.querySelector('.question-02')
let quizThree = document.querySelector('.question-03')

let alternativesQuizOne = document.querySelectorAll('.question-01 li')
let alternativesQuizTwo = document.querySelectorAll('.question-02 li')
let alternativesQuizThree = document.querySelectorAll('.question-03 li')

let statusOne = quizOne.querySelector('.statusOne')
let statusTwo = quizTwo.querySelector('.statusTwo')
let statusThree = quizThree.querySelector('.statusThree')

// Contador de acertos
let correctAnswers = 0

// Total de quizzes na página
let totalAnswers = document.querySelector('.total')
totalAnswers.textContent = quizzes.length

// quizOne

//Adicionei duas classes iniciais para que o 'quizTwo' e o 'quizThree' permaneçam, por enquanto, inativos
quizTwo.classList.add('inactive','opacity')
quizThree.classList.add('inactive','opacity')

// Cada elemento dentro da variável 'alternativesQuizOne' ouvirá um click, despertando o evento 'CheckAnswerone'.
for ( let alternativeQuizOne of alternativesQuizOne ) {
    alternativeQuizOne.addEventListener( 'click', checkAnswerOne )
}

// Criei evento para checar se a resposta do 'quizOne' está certa
function checkAnswerOne ( event ) {

    // Defini o target do evento. Isto é, as alternativas do 'quizOne'
    let alternativeQuizOne = event.target

    // Adicionei uma classe 'clicked' com o intuito de mudar o estilo da alternativa clicada
    alternativeQuizOne.classList.add('clicked')

    if ( alternativeQuizOne.classList.contains('correct') ) {

        // Uma vez que a alternativa clicada é a correta:
        
        // O status de andamento do PL passa a ser visível
        statusOne.style.display = 'initial'

        // Adiciona uma resposta correta a contagem
        correctAnswers = correctAnswers + 1

        // Mudar o texto para 'Acertou!'
        document.querySelector('.statusOne > .status-de-acerto').textContent = 'Acertou!'

    } else {

        // Uma vez que a alternativa clicada é a incorreta:

        // O status de andamento do PL passa a ser visível de qualquer forma
        statusOne.style.display = 'initial'

        // Mudar o texto para 'Errou!'
        document.querySelector('.statusOne > .status-de-acerto').textContent = 'Errou!'

    }

    // Uma vez já respondido, deixei o 'quizOne' inativo
    quizOne.classList.add('inactive')

    // Removi as classes que inativam e diminuem a opacidade do 'quizTwo'
    quizTwo.classList.remove('inactive','opacity')

}


// quizTwo

// Cada elemento dentro da variável 'alternativesQuizTwo' ouvirá um click, despertando o evento 'CheckAnswerone'.
for ( let alternativeQuizTwo of alternativesQuizTwo ) {
    alternativeQuizTwo.addEventListener( 'click', checkAnswerTwo )
}

// Criei evento para checar se a resposta do 'quizTwo' está certa
function checkAnswerTwo ( event ) {

    // Defini o target do evento. Isto é, as alternativas do 'quizTwo'
    let alternativeQuizTwo = event.target

    // Adicionei uma classe 'clicked' com o intuito de mudar o estilo da alternativa clicada
    alternativeQuizTwo.classList.add('clicked')

    if ( alternativeQuizTwo.classList.contains('correct') ) {

        // Uma vez que a alternativa clicada é a correta:

        // O status de andamento do respectivo PL passa a ser visível
        statusTwo.style.display = 'initial'

        // Adiciona uma resposta correta a contagem
        correctAnswers = correctAnswers + 1

        // Mudar o texto para 'Acertou!'
        document.querySelector('.statusTwo > .status-de-acerto').textContent = 'Acertou!'

    } else {

        // Uma vez que a alternativa clicada é a incorreta:

        // O status de andamento do PL passa a ser visível de qualquer forma
        statusTwo.style.display = 'initial'

        // Mudar o texto para 'Errou!'
        document.querySelector('.statusTwo > .status-de-acerto').textContent = 'Errou!'

    }

    // Uma vez já respondido, deixei o 'quizTwo' inativo, assim como o 'quizOne
    quizTwo.classList.add('inactive')

    // Removi as classes que inativam e diminuem a opacidade do 'quizThree'
    quizThree.classList.remove('inactive','opacity')

}

// quizThree

// Cada elemento dentro da variável 'alternativesQuizThree' ouvirá um click, despertando o evento 'CheckAnswerone'.
for ( let alternativeQuizThree of alternativesQuizThree ) {
    alternativeQuizThree.addEventListener( 'click', checkAnswerThree )
}

// Criei evento para checar se a resposta do 'quizThree' está certa
function checkAnswerThree ( event ) {

    // Defini o target do evento. Isto é, as alternativas do 'quizThree'
    let alternativeQuizThree = event.target

    // Adicionei uma classe 'clicked' com o intuito de mudar o estilo da alternativa clicada
    alternativeQuizThree.classList.add('clicked')

    if ( alternativeQuizThree.classList.contains('correct') ) {

        // Uma vez que a alternativa clicada é a correta:

        // O status de andamento do respectivo PL passa a ser visível
        statusThree.style.display = 'initial'

        // Adiciona uma resposta correta a contagem
        correctAnswers = correctAnswers + 1

        // Mudar o texto para 'Acertou!'
        document.querySelector('.statusThree > .status-de-acerto').textContent = 'Acertou!'

    } else {

        // Uma vez que a alternativa clicada é a incorreta:

        // O status de andamento do PL passa a ser visível de qualquer forma
        statusThree.style.display = 'initial'

        // Mudar o texto para 'Errou!'
        document.querySelector('.statusThree > .status-de-acerto').textContent = 'Errou!'

    }

    // Uma vez já respondido, deixei o 'quizOne' inativo
    quizThree.classList.add('inactive')

    // Selecionei o elemento HTML 'output' e substitui o seu respectivo texto pelo número total de acertos.
    document.querySelector( 'output' ).textContent = correctAnswers

}
