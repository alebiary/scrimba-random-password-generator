const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]


let firstBtnEl = document.getElementById("btn-first-password")
let secondBtnEl = document.getElementById("btn-second-password")
let numbersEl = document.getElementById("numbers")
let symbolsEl = document.getElementById("symbols")
let passwordLength = document.getElementById("password-length")
passwordLength.value = 10

numbersEl.addEventListener("input", function (event) {
    console.log(numbersEl.checked)
})

passwordLength.addEventListener("input", function (event) {
    let len = passwordLength.value;
    if (len < 8) {
        passwordLength.value = 8
    }

    if (len > 32) {
        passwordLength.value = 32
    }

})



function generateRandomPassword() {
    let hasNumbers = numbersEl.checked;
    let hasSymbols = symbolsEl.checked;
    let length = parseInt(passwordLength.value)
    let result = ""

    let chars = [...characters]
    if (hasNumbers) {
        console.log("has numbers")
        chars = [...chars, ...numbers]
    }
    if (hasSymbols) {
        console.log("has symbols")
        chars = chars.concat(symbols)
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length)
        let randomChar = chars[randomIndex]
        result += randomChar
    }
    return result
}

function generatePasswords() {
    firstBtnEl.textContent = generateRandomPassword()
    secondBtnEl.textContent = generateRandomPassword()
}

function copyFirstPassword() {
    let text = firstBtnEl.textContent
    if (text) {
        navigator.clipboard.write(text)
    }
}

function copySecondPassword() {
    let text = secondBtnEl.textContent
    if (text) {
        navigator.clipboard.write(text)
    }
}

