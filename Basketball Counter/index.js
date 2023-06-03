let num = 0
let homePoint = document.getElementById("homePoint")
let guestPoint = document.getElementById("guestPoint")

function addOne() {
    let result = num += 1
    homePoint.innerText = result
}
function foulHome() {
    let result = num -= 1
    homePoint.innerText = result
}
function addTwo() {
    let result = num += 2
    homePoint.innerText = result
}
function addThree() {
    let result = num += 3
    homePoint.innerText = result
}
//////////////////////////

function addOneGuest() {
    let result = num += 1
    guestPoint.innerText = result
}
function addTwoGuest() {
    let result = num += 2
    guestPoint.innerText = result
}
function addThreeGuest() {
    let result = num += 3
    guestPoint.innerText = result
}
function foulGuest() {
    let result = num -= 1
    guestPoint.innerText = result
}
function newGame(){
    guestPoint.innerText = 0
    homePoint.innerText = 0
    num = 0
}
