let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);
let userAnswer = document.querySelector("#answer")
let result = document.querySelector("#result")
let btns = document.querySelectorAll(".btn-secondary")
let tries = document.querySelector(".tries")

let count = 3

tries.textContent = `Попыток осталось: ${count}`

btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        userAnswer.textContent += this.textContent.trim()
    })
})

let rightAnswer = ["dog", "cat"]

checkNode.addEventListener(`click`, function () {
    if (result.textContent.length > 0) {
        result.textContent = ""
    }
    if (rightAnswer.includes(userAnswer.textContent.trim().toLowerCase())) {
        result.textContent += "Это верный ответ"
    } else {
        result.textContent += "Это неправильный ответ"
        count--
        tries.textContent = `Попыток осталось: ${count}`
        if (count == 0) {
            result.textContent = "Вы проиграли"
            checkNode.style.display = "none"
        }
    }
    userAnswer.textContent = ""
});

