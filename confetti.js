import confetti from 'https://cdn.skypack.dev/canvas-confetti';
function makeConfetti(){
    confetti()
}
document.getElementById("confetti_button").addEventListener("click", makeConfetti)
