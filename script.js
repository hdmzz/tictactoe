const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const xClass = 'x';
const circleClass = 'circle';
let circleTurn

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
    });
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass
    placeMark(cell, currentClass)
    //changement de tour 
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(xClass)
    board.classList.remove(circleClass)
    if (circleTurn) {
        board.classList.add(circleClass)
    } else {
        board.classList.add(xClass)
    }
}