let holes = document.querySelectorAll(".hole");

let deadTag = document.querySelector("#dead");
let lostTag = document.querySelector("#lost");


for (let hole of holes) {
    hole.addEventListener("click", onUserClick)
}



function onUserClick (event) {
const clear = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}
const tag = event.target;
if (tag.classList.contains('hole_has-mole')) {
    let deadMole = Number(deadTag.textContent) + 1;
    
     if (deadMole > 10) {
         alert("Вы выиграли!");
         clear();
     } else {
        dead.textContent = deadMole;
     }
} else {
    let loses = Number(lostTag.textContent) + 1;

    if (loses > 5) {
        alert("Вы проиграли!");
        clear();
    } else {
        lost.textContent = loses;
    }
}
} 