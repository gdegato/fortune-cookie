//variaveis
const imgCookie = document.querySelector('#cookie')
const screen2 = document.querySelector('.screen2')
const btnReset = document.querySelector('#btnReset')

//eventos

imgCookie.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)

let textArray = [
  'Gente como você é igual nuvem. A gente olha e vê um animal.',
  'É só uma fase ruim, logo vai piorar.',
  'Nunca subestime sua incapacidade.',
  'O problema não está na segunda-feira, está na sua vida.',
  'Pode ser que o seu propósito na vida seja servir de aviso para os outros.',
    'Não sabendo que era impossível, foi lá e soube.',
    'Hoje é o primeiro dia do resto da sua vida. Mas ontem também foi, e veja como acabou.',
    'Daqui pra frente, só pra trás',
    'As piores coisas da sua vida provavelmente ainda não aconteceram com você.',
    'Aqueles que duvidam de sua capacidade provavelmente têm um motivo válido.',
    'A única coisa que todas as suas falhas têm em comum é você.',
    'A recompensa pelo bom trabalho é mais trabalho.',
    'O sonho de todo profissional é abandonar sua profissão'


  
]

let randomIndex = Math.floor(Math.random() * textArray.length)
let randomElement = textArray[randomIndex]

function handleClick() {
  screen2.querySelector('h2').innerText = `${randomElement}`
  toggleScreen()
  console.log(randomElement)
}

function toggleScreen() {
  screen2.classList.toggle('hide')
}

function handleResetClick() {
  toggleScreen()
  location.reload()
}
