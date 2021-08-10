numOfColors = 4
let array = []
let picked

let colorMix = document.getElementByID('colorMix')
let colors = document.getElementsByClassName('colors')
let winMessage = document.getElementById('winMessage')

//function to start the game.
// function startGame() {
//   colorMix = picked
// }

array = generateRandomColors(4)

picked = arr()

function colors() {}
//Event Listeners
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')

color0.addEventListener('click', playerClick)
color1.addEventListener('click', playerClick)
color2.addEventListener('click', playerClick)
color3.addEventListener('click', playerClick)

//function when you click on the circles:

//RGBs values are numbers on a scale between 0 to 255.
function generateColor() {
  let RGBMix1 = Math.floor(Math.random() * 255)
  let RGBMix2 = Math.floor(Math.random() * 255)
  let RGBMix3 = Math.floor(Math.random() * 255)
}
//https://css-tricks.com/snippets/javascript/random-hex-color/
