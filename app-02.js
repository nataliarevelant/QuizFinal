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

//quizOne
for ( let alternativeQuizOne of alternativesQuizOne ) {
    alternativeQuizOne.addEventListener( 'click', checkAnswerOne )
}

quizTwo.classList.add('inactive','opacity')
quizThree.classList.add('inactive','opacity')

function checkAnswerOne ( event ) {

    let alternativeQuizOne = event.target

    alternativeQuizOne.classList.add('clicked')

    if ( alternativeQuizOne.classList.contains('correct') ) {

        statusOne.style.display = 'initial'
        correctAnswers = correctAnswers + 1
        document.querySelector('.statusOne > .status-de-acerto').textContent = 'Acertou!'

    } else {

        statusOne.style.display = 'initial'
        document.querySelector('.statusOne > .status-de-acerto').textContent = 'Errou!'

    }

    quizOne.classList.add('inactive')
    quizTwo.classList.remove('inactive','opacity')

}


// quizTwo
for ( let alternativeQuizTwo of alternativesQuizTwo ) {
    alternativeQuizTwo.addEventListener( 'click', checkAnswerTwo )
}

function checkAnswerTwo ( event ) {

    let alternativeQuizTwo = event.target

    alternativeQuizTwo.classList.add('clicked')

    if ( alternativeQuizTwo.classList.contains('correct') ) {

        statusTwo.style.display = 'initial'
        correctAnswers = correctAnswers + 1
        document.querySelector('.statusTwo > .status-de-acerto').textContent = 'Acertou!'

    } else {

        statusTwo.style.display = 'initial'
        document.querySelector('.statusTwo > .status-de-acerto').textContent = 'Errou!'

    }

    quizTwo.classList.add('inactive')
    quizThree.classList.remove('inactive','opacity')

}

// quizThree
for ( let alternativeQuizThree of alternativesQuizThree ) {
    alternativeQuizThree.addEventListener( 'click', checkAnswerThree )
}

function checkAnswerThree ( event ) {

    let alternativeQuizThree = event.target

    alternativeQuizThree.classList.add('clicked')

    if ( alternativeQuizThree.classList.contains('correct') ) {

        statusThree.style.display = 'initial'
        correctAnswers = correctAnswers + 1
        document.querySelector('.statusThree > .status-de-acerto').textContent = 'Acertou!'

    } else {

        statusThree.style.display = 'initial'
        document.querySelector('.statusThree > .status-de-acerto').textContent = 'Errou!'

    }

    quizThree.classList.add('inactive')

    document.querySelector( 'output' ).textContent = correctAnswers

}
