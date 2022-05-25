function $(id) {
    return document.getElementById(id)
}

const nev = $("nev");
const kor = $("kor");
const no = $("no");
const ferfi = $("ferfi");
const astra = $("astra");
const moderna = $("moderna");
const pfizer = $("pfizer");
const p = $("p");
const gomb = $("gomb");
const kep = $("kep");





function kiir() {

    let tipus;
    let nem;

    if (astra.checked) {
        tipus = "Astra";
    }
     else if (moderna.checked) {
        tipus = "Moderna";
    }
     else {
        tipus = "Pfizer";
    }


    

    if (no.checked) {
        nem = "Nő";
    } else {
        nem = "Féri";
    }


    p.innerHTML = nev.value + " " + kor.value + " " + nem + " " + tipus;

}


gomb.addEventListener("click", kiir);



kep.addEventListener("mouseover", () => { kep.src = "oltas2.jpg" });
kep.addEventListener("mouseout", () => { kep.src = "oltas.jpg" });



const szam= $("szam");
const megoldas=$("megoldas");
const szamol=$("szamol");


szamol.addEventListener("click", szamolas);

function szamolas(){
    megoldas.innerHTML= (Number) (szam.value) % 10 ;
}










