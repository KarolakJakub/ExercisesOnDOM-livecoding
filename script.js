let display = document.getElementById('display')
// display.disabled = true

display.addEventListener('click', (event) => {

    alert('Hello')

})

let operators = document.getElementsByClassName('operator')
operators = Array.from(operators)

let buttons = document.getElementsByTagName('button')
buttons = Array.from(buttons)
let numbers = buttons.filter((button) => {
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
    return htmlElement

}

let acButton = addElement('button', 'AC', display)

let dot = document.createElement('button')
dot.innerText = "."

let space = document.createElement('text')
space.innerText = " "

display2 = document.lastElementChild.lastElementChild.children[4].children[1]

let lastRowButtons = document.lastElementChild.lastElementChild.children[4]
let zeroButton = lastRowButtons.firstElementChild

lastRowButtons.insertBefore(space, display2)
lastRowButtons.insertBefore(dot, display2)

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const number = event.target.innerText
        display.value = display.value + number
    })

})

acButton.addEventListener('click', (event) => {
    display.value = ''
})

let notNumbers = !numbers;

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        const operator = event.target.innerText
        let displayValue = display.value
        const operatorsArr = ['+', '-', '/', '*']

        if(operator === '=')
        {
            display.value = eval(displayValue)
        }

        displayValue
        const hasOperator = operatorsArr.some(opr => {
            return displayValue.includes(opr)
        })
        if (hasOperator) {
            return
        } else {
            display.value = display.value + operator
        }
    })

})