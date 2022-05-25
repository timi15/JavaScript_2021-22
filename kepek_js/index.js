const kep1 = document.getElementById("kep1");
const kep2 = document.getElementById("kep2");
const kep3 = document.getElementById("kep3");
const kep4 = document.getElementById("kep4");
const gombElore= document.getElementById("gombElore");
const gombHatra= document.getElementById("gombHatra");
const kepNagy= document.getElementById("kepNagy");
const p= document.getElementById("p");

function fole(kep){

    kep.width= 120;
    kep.height=120;

}

function le(kep){

    kep.width= 100;
    kep.height=100;

}

function mutat(kep){
    kepNagy.src= kep;
}

kep1.addEventListener("mouseover", () => fole(kep1));
kep1.addEventListener("mouseout", () => le (kep1));
kep1.addEventListener("click", () => mutat (kep1.src));

kep2.addEventListener("mouseover", () => fole(kep2));
kep2.addEventListener("mouseout", () => le (kep2));
kep2.addEventListener("click", () => mutat (kep2.src));

kep3.addEventListener("mouseover", () => fole(kep3));
kep3.addEventListener("mouseout", () => le (kep3));
kep3.addEventListener("click", () => mutat (kep3.src));

kep4.addEventListener("mouseover", () => fole(kep4));
kep4.addEventListener("mouseout", () => le (kep4));
kep4.addEventListener("click", () => mutat (kep4.src));

