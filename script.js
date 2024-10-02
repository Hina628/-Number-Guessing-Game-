"use strict";

const containerEL = document.querySelector(".container");

const btnPLayEL = document.querySelector(".btn_again");

const btnChckEL = document.querySelector(".btn_check");

const hideNumEL = document.querySelector(".hide_num");

const msgEL = document.querySelector(".message");

const inputNumEL = document.querySelector(".input_number");

const highScoreEL = document.querySelector(".high_score");

const scoreEL = document.querySelector(".score");

// ------------------------Generate random number from 1 to 30------------------//


let secretNum = Math.trunc(Math.random() * 30 + 1);
let score = 30;
let highscore = 0;

console.log(secretNum);

//-------------------------Event to check the hide num--------------//

btnChckEL.addEventListener("click", () => {
    const guess = Number(inputNumEL.value);

    //----------check empty input--------//

    if (guess) {

        //-----------------not match hide number-------//
        if (guess != secretNum) {

            if (score > 1) {

                score--;
                scoreEL.textContent = score;

                msgEL.textContent = guess > secretNum ? "To High " : "To Low";
                scoreEL.textContent = score;


            } else {
                dispLayMessage = ("You have Lossed the Game");
                containerEL.style.backgroundColor = "#fff";
                scoreEL.textContent = 0
            }
        } else {  //success
            hideNumEL.textContent = secretNum;
            hideNumEL.style.width = "50%";
            hideNumEL.style.transition = "all 0.5s ease-in";
            containerEL.style.backgroundColor = "#e0d8d3";
            msgEL.textContent = "Congratualation You have Won the Game :)";
            dispLayMessage = ("Congratualation You have Won the Game :)");
        }
    } else {
        dispLayMessage = ("Congratualation You have Won the Game :)");
    }
});

//------------display message----------//

const dispLayMessage = function (message) {
    msgEL.textContent = message;
};

//-------------rest the game----------//

btnPLayEL.addEventListener("click", () => {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    scoreEL.textContent = score;
    hideNumEL.textContent = "?";
    hideNumEL.style.width = "25%";
    hideNumEL.style.transition = "all 0.5s ease-in";
    inputNumEL.value = ""
    containerEL.style.backgroundColor = "#ddd";
    dispLayMessage("start Guesing.........")
});