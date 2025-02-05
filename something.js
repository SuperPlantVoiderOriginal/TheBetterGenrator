let loveRPG = document.getElementById("LoveRPG");
let hateRPG = document.getElementById("HateRPG");
let resetRPG = document.getElementById("ResetRPG");
let x = 0;

function LoveRPG() {
    x=1;
}

function HateRPG() {
    x=-1;
}
function ResetRPG() {
    x=0;
}

loveRPG.onclick = LoveRPG; 
hateRPG.onclick = HateRPG;
resetRPG.onclick = ResetRPG;

let loveFPS = document.getElementById("LoveFPS");
let hateFPS = document.getElementById("HateFPS");
let resetFPS = document.getElementById("ResetFPS");
let y = 0;

function LoveFPS() {
    y=1;
}

function HateFPS() {
    y=-1;
}
function HateFPS() {
    y=0;
}

loveFPS.onclick = LoveFPS;  
hateFPS.onclick = HateFPS;
resetFPS.onclick = ResetRPG

let buttonatton = document.getElementById("buttyon");
let text = document.getElementById("results1");

function Button() {
    if(x==0&&y==0){
        text.textContent = "No results!"; 
    }
    if(x==1&&y==0||y==-1){
        text.textContent = "Skyrim"; 
    }
    if(y==1&&x==0){
        text.textContent = "Counter Strike 2";
    }
    if(y==1&&x==1){
        text.textContent = "Borderlands 2";
    }
    
}

buttonatton.onclick = Button;
