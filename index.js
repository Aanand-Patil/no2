const header = document.querySelector('#header')
const subHead = document.createElement('h3')
subHead.innerHTML = 'Buy high quality organic fruits online'
header.appendChild(subHead)
subHead.style.fontStyle = 'italic'


const para = document.createElement('p')
const paratext = document.createTextNode('Total Fruits: 4')

para.appendChild(paratext)

const divs = document.getElementsByTagName('div')
const secondDiv = divs[1]
const fruits = secondDiv.querySelector('.fruits')
secondDiv.insertBefore(para, fruits)
para.id = 'fruits-total'