const egyik = document.getElementById("egyik");
const masik = document.getElementById("masik");
const kerulet = document.getElementById("kerulet");
const terulet = document.getElementById("terulet");
const ide = document.getElementById("ide");
const ide2 = document.getElementById("ide2");





function ker() {
    ide.innerHTML = 2 * ((Number)(egyik.value) + (Number)(masik.value));
}


function ter() {
    ide2.innerHTML = (Number)(egyik.value) * (Number)(masik.value);

}




kerulet.addEventListener("click", ker);
terulet.addEventListener("click", ter);


//3 kép ha fölé viszem változzon meg, ha lenyomom akkor irja ki a p be hogy lenyomva a képet irja ki hogy lenymva

const kep = document.getElementById("kep");
const kiir = document.getElementById("kiir");
kep.style.visibility = "visible";


kep.addEventListener("mouseover", () => {
    kep.src = "süni.jpg";
}
);

kep.addEventListener("mouseout", () => {
    kep.src = "flower.jpg";

});

kep.addEventListener("click", () => {
    kiir.innerHTML = "lenyomva";


});



//beviteli mező, 2gomb
// benyom egy szám akkor kiirja hanyadjára irtunk be 0-t

const szam = document.getElementById("szam");
const gomb1 = document.getElementById("gomb1");
const gomb2 = document.getElementById("gomb2");
const kiir2 = document.getElementById("kiir2");
const kiir3 = document.getElementById("kiir3");
const szamok = [];





gomb1.addEventListener("click", () => {
    szamok.push(szam.value);
    kiir2.innerHTML = szamok;



});


function szamol() {
    let szamlalo = 0;
    while (szamok[szamlalo] != "0") {

        szamlalo++;


    }
    kiir3.innerHTML = szamlalo+1 + " 0 volt";

}




gomb2.addEventListener("click", szamol);

//BEVITELI MEZŐBE EGY SZÁM ÉS IRJA KI A számokat , és addig számoljon el a forciklus


const szam1 = document.getElementById("szam1");
const kiir4 = document.getElementById("kiir4");
const kiir5 = document.getElementById("kiir5");


function szamolok(){
let i;
for(i=1; i<=szam1.value; i++){
kiir5.innerHTML=i.value;
}

}



kiir4.addEventListener("click",szamolok);