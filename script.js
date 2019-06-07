let display = document.getElementById('display')
display.disabled = true

let operators = document.getElementsByClassName('operator')
operators = Array.from(operators)

let buttons = document.getElementsByTagName('button')
let numbers = Array.from(buttons).filter((button) => {
    let number = Number(button.textContent)
    if (isNaN(number)) {
        return false
    } else{
        return true
    }

})
console.log(numbers)

let divs = Array.from(document.firstElementChild.children[1].children).filter(element => element.tagName === 'DIV')


function addElement(element, text, target){

    let htmlElement = document.createElement(element)
    htmlElement.innerText = text
    target.after(htmlElement)

}

addElement('button', 'AC', display)

let dot = document.createElement('button')
dot.innerText = "."

let space = document.createElement('text')
space.innerText = " "

display = document.lastElementChild.lastElementChild.children[4].children[1]

// insertBefore(dot, display)
let lastRowButtons = document.lastElementChild.lastElementChild.children[4]
let zeroButton = lastRowButtons.firstElementChild

lastRowButtons.insertBefore(space, display)
lastRowButtons.insertBefore(dot, display)