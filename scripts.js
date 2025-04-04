const result = document.querySelector(".result")
const play_values = document.querySelector(".play-values")

const user_score = document.querySelector("#user-score")
const computer_score = document.querySelector("#computer-score")

let user_score_value = 0
let computer_score_value = 0

const userPlay = (userChoice) => {
    startGame(userChoice, computerPlay())
    document.querySelector(".results").style.display = "block"
}

const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const startGame = (user, computer) => {
    play_values.innerHTML = "&#x1F464;" + user + "&#x1F4BB;" + computer

    if (user == computer) {
        result.innerHTML = "Empate! <div>&#x1F440;</div>"
    } else if ((user == "rock" && computer == "scissors") || (user == "paper" && computer == "rock") || (user == "scissors" && computer == "paper")) {
        user_score_value++
        user_score.innerHTML = user_score_value
        result.innerHTML = "Você ganhou! <div>&#x1F60E;</div>"
    } else {
        computer_score_value++
        computer_score.innerHTML = computer_score_value
        result.innerHTML = "Você perdeu! <div>&#x1F611;</div>"
    }
}