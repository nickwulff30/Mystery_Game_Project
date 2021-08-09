let numOfColors = 5
let array = []
let container = document.getElementById('RGBValue')
let colorSelection = document.getElementsByClassName('colors')
let winMessage = document.getElementById('winMessage')

//Event Listeners
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')

color0.addEventListener('click', playerClick)
color1.addEventListener('click', playerClick)
color2.addEventListener('click', playerClick)
