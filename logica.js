const inicialContainer=document.getElementById('inicial-container');
const taskContainer=document.getElementById('task-container');
const qrcode= document.getElementById('qrcode-container');
let tentativas = [0, 0, 0, 0, 0, 0];
let maxTentativas = [];
let totalVerdes=0;


function nextAction_1(){
    inicialContainer.style.display = 'none';
    
    taskContainer.style.display = 'grid';
}



function inicializarTentativas(qtdCartas) {
    for (let i = 0; i < qtdCartas; i++) {
        maxTentativas[i] = Math.floor(Math.random() * 3) + 1; 
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const qtdCartas = document.querySelectorAll(".task-box").length;
    inicializarTentativas(qtdCartas);
});

function tentarSubmeter(num) {
    const containers = document.querySelectorAll(".task-box"); 
    const buttons = document.querySelectorAll(".task-box .continue-button"); 

    if (num >= containers.length) return; 

    tentativas[num]++; 

    if (tentativas[num] < maxTentativas[num]) {
        containers[num].style.backgroundColor = "red";
        containers[num].classList.toggle('transicao');

    } else {
        totalVerdes++;
        containers[num].style.backgroundColor = "green"; 
        buttons[num].style.pointerEvents = "none"; 
        buttons[num].style.opacity = "0.5"; 
        tentativas[num] = 0;
        if(totalVerdes===6){
            taskContainer.style.display='none';
            qrcode.style.display='block';
        }
    }
}


