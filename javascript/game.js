/**
 * SELECTOR
 */

const rockPlayer = document.getElementById("rockPlayer")
const paperPlayer = document.getElementById("paperPlayer")
const scissorsPlayer = document.getElementById("scissorsPlayer")


function chooseRock(){
    document.getElementById("bgRockPlayer").classList.add("bgAbu")
    choosePlayer("rock")
    paperPlayer.removeAttribute("onclick")
    scissorsPlayer.removeAttribute("onclick")
}

function choosePaper(){
    document.getElementById("bgPaperPlayer").classList.add("bgAbu")
    choosePlayer("paper")
    rockPlayer.removeAttribute("onclick")
    scissorsPlayer.removeAttribute("onclick")
}

function chooseScissors(){
    document.getElementById("bgScissorsPlayer").classList.add("bgAbu")
    choosePlayer("scissors")
    rockPlayer.removeAttribute("onclick")
    paperPlayer.removeAttribute("onclick")
}

function choosePlayer(choose){
    if (choose === "rock"){
        chooseCom(randomComPlayer);
        gamePlay(choose,randomComPlayer);
     
    } else if (choose === "paper"){
        chooseCom(randomComPlayer);
        gamePlay(choose,randomComPlayer);

    } else if (choose === "scissors"){
        chooseCom(randomComPlayer);
        gamePlay(choose,randomComPlayer);
    }
}

const rockCom = document.getElementById("rockCom")
const paperCom = document.getElementById("paperCom")
const scissorsCom = document.getElementById("scissorsCom")


const comPlayer = ['rock', 'paper', 'scissors']
const randomComPlayer = comPlayer[Math.floor(Math.random()*comPlayer.length)]

function chooseCom(choose2){
    if (choose2 === 'rock'){
        document.getElementById("bgRockCom").classList.add("bgAbu")
    } else if (choose2 === 'paper') {
        document.getElementById("bgPaperCom").classList.add("bgAbu")
    } else if (choose2 === 'scissors') {
        document.getElementById("bgScissorsCom").classList.add("bgAbu")
    }
}

let bgVersus = document.getElementById("versus")

const gamePlay = (player1,player2) => {
    let cekPlayer = player1+player2
    console.log(cekPlayer)
    if (cekPlayer === "rockrock" || cekPlayer === "paperpaper" || cekPlayer === "scissorsscissors"){
        console.log("draw")
        bgVersus.src='html2-bg-draw.png'
        bgVersus.classList.add("setImgVs")
    } else if (cekPlayer === "rockscissors" || cekPlayer === "paperrock" || cekPlayer === "scissorspaper"){
        console.log("player 1 win")
        bgVersus.src='html2-bgPlayer1Win.png'
        bgVersus.classList.add("setImgVs")
    } else if (cekPlayer === "rockpaper" || cekPlayer === "paperscissors" || cekPlayer === "scissorsrock"){
        console.log("COM win")
        bgVersus.src='html2-bgComWin.png'
        bgVersus.classList.add("setImgVs")
    }
}

function refreshPage(){
    window.location.reload()
}