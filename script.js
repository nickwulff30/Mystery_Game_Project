// numOfColors = 5
let array = []
let picked

let colorMix = document.getElementByID('colorMix')
let colors = document.getElementsByClassName('colors')
let winMessage = document.getElementById('winMessage')

//function to start the game.
function startGame() {
  colorMix = picked
}

//Event Listeners
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')

color0.addEventListener('click', playerClick)
color1.addEventListener('click', playerClick)
color2.addEventListener('click', playerClick)

//function when you click on the circles:

//RGBs values are numbers on a scale between 0 to 255.
// let RGBMix1 = (Math.round, Math.
