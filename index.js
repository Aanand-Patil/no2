let mainHeading = document.getElementById('main-heading')
mainHeading.innerText = 'Fruit World'
mainHeading.style.color = 'orange'
let header = document.getElementById("header")
header.style.backgroundColor = 'green'
header.style.borderBottomColor = 'orange'
header.style.borderStyle = 'solid '
let basketHeading = document.getElementById('basket-heading')
basketHeading.style.color = 'green'
let thanks = document.getElementById("thanks")
let para = document.createElement("p")
para.innerText = 'Please visit us again'
thanks.appendChild(para)
let fruits = document.getElementsByClassName("fruit")

for (i = 0; i < fruits.length; i++) {
    fruits[i].style.fontWeight = "bold"
}
fruits[2].style.backgroundColor = "yellow"