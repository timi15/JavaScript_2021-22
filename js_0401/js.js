const gomb = document.getElementById("gomb");
const szam = document.getElementById("szam");
const p = document.getElementById("p");

p.style.fontSize = "12px";


function betu() {
    p.style.fontSize = szam.value + "px"
}

gomb.addEventListener("click", betu)

//-------------------------------------------------------------------------------------------------------------

const kep = document.getElementById("kep")
const gomb2 = document.getElementById("gomb2")


let kepek = ["188001.775x400.jpg", "szomoru.jpg", "vicces-cicas-kepek-5-1080x675.jpg"];

let szamlalo = 0;

function kepvalt() {

    // kep.src= kepek [Math.floor(Math.random() * kepek.length)];

    
    kep.src = kepek[(szamlalo++) % kepek.length];

}
  


gomb2.addEventListener("click", kepvalt)

//-------------------------------------------------------------------------------------------------------------

const egy= document.getElementById("egy");
const ketto= document.getElementById("ketto");
const harom= document.getElementById("harom");
const negy= document.getElementById("negy");

const ide= document.getElementById("szoveg");

let szam2=0;

function muvelet(a){
    szam2+=a;
    ide.innerHTML=szam2;
   
}

egy.addEventListener("click", ()=> {muvelet(1)})
ketto.addEventListener("click", ()=> {muvelet(2)})
harom.addEventListener("click", ()=> {muvelet(3)})
negy.addEventListener("click", ()=> {muvelet(4)})






