const osszead = document.getElementById("osszeAd");      //feltételezem hogy többször fogom használni és ezért elteszem egy constans változóban
const kivon = document.getElementById("kivon");
const szoroz = document.getElementById("szoroz");
const oszt = document.getElementById("oszt");

const szam1 = document.getElementById("szam1");
const szam2 = document.getElementById("szam2");


const p = document.getElementById("ide");



function muvelet(m) {
    let eredmeny = 0;
    switch (m) {
        case "+": eredmeny = p.innerHTML = (Number)(szam1.value) + (Number)(szam2.value); break;
        case "-": eredmeny = p.innerHTML = szam1.value - szam2.value; break;
        case "*": eredmeny = p.innerHTML = szam1.value * szam2.value; break;
        case "/": eredmeny = p.innerHTML = szam1.value / szam2.value; break;
    }
    p.innerHTML = eredmeny;
}


function osszeg() {
    p.innerHTML = (Number)(szam1.value) + (Number)(szam2.value);
}


function kulonbseg() {
    p.innerHTML = szam1.value - szam2.value;
}

function szorzat() {
    p.innerHTML = szam1.value * szam2.value;
}

function hanyados() {
    p.innerHTML = szam1.value / szam2.value;
}


osszead.addEventListener("click", function () { muvelet("+"); });
kivon.addEventListener("click", function () { muvelet("-") });
szoroz.addEventListener("click", function () { muvelet("*") });
oszt.addEventListener("click", function () { muvelet("/") });


//refactorizálás: kód csinosítás, a kód átalakátísa annak érdekében, hogy sokkal átláthatóbb legyen és gyorsabb legyen a fejlesztés


