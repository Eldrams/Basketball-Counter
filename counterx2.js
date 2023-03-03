let countHomeScore = 0;
let countGuestScore = 0;

const counterHome = document.getElementById("counter-home")
const counterGuest = document.getElementById("counter-guest")
const plusOneHome = document.getElementById("plusOneHome")
const plusTwoHome = document.getElementById("plusTwoHome")
const plusThreeHome = document.getElementById("plusThreeHome")
const plusOneGuest = document.getElementById("plusOneGuest")
const plusTwoGuest = document.getElementById("plusTwoGuest")
const plusThreeGuest = document.getElementById("plusThreeGuest")
const newGame = document.getElementById("newGame-btn")

plusOneHome.addEventListener("click", function(){
    countHomeScore += 1
    counterHome.innerHTML = `${countHomeScore}`
})

plusTwoHome.addEventListener("click", function(){
    countHomeScore += 2
    counterHome.innerHTML = `${countHomeScore}`
})

plusThreeHome.addEventListener("click", function(){
    countHomeScore += 3
    counterHome.innerHTML = `${countHomeScore}`
})

plusOneGuest.addEventListener("click", function(){
    countGuestScore += 1
    counterGuest.innerHTML = `${countGuestScore}`
})

plusTwoGuest.addEventListener("click", function(){
    countGuestScore += 2
    counterGuest.innerHTML = `${countGuestScore}`
})

plusThreeGuest.addEventListener("click", function(){
    countGuestScore += 3
    counterGuest.innerHTML = `${countGuestScore}`
})

newGame.addEventListener("click", function(){
    countGuestScore = 0
    countHomeScore = 0
    counterGuest.innerHTML = `${countGuestScore}`
    counterHome.innerHTML = `${countHomeScore}`
})

