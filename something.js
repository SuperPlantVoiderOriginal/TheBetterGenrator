let loveRPG = document.getElementById("LoveRPG");
let hateRPG = document.getElementById("HateRPG");
let x = 1;

function LoveRPG() {
    x++;
}

function HateRPG() {
    x--;
}

loveRPG.onclick = LoveRPG; 
hateRPG.onclick = HateRPG;

let loveFPS = document.getElementById("LoveFPS");
let hateFPS = document.getElementById("HateFPS");
let y = 1;

function LoveFPS() {
    y++;
}

function HateFPS() {
    y--;
}

loveFPS.onclick = LoveFPS;  
hateFPS.onclick = HateFPS;

let buttonatton = document.getElementById("buttyon");
let text = document.getElementById("results1");

function Button() {
    if(x<=0||y<=0){
        text.textContent = "No results!"; 
    }
    if(x>=1){
        text.textContent = "Skyrim"; 
    }
    if(y>=0){
        text.textContent = "Counter Strike 2";
    }
    if(y>=1||x>=1){
        text.textContent = "Borderlands";
    }
    
}

buttonatton.onclick = Button;
