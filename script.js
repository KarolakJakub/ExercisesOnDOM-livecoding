let display = document.getElementById("display")
display.disabled = true

let operators = document.getElementsByClassName("operator")
operators = Array.from(operators)

let buttons = document.getElementsByTagName("button")
let numbers = Array.from(buttons).filter((button) => {
    let number = Number(button.textContent)
    if (isNaN(number)) {
        return false
    } else{
        return true
    }

})
console.log(numbers)