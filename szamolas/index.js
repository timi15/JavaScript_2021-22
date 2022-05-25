const szam = document.getElementById("szam");
const szam2= document.getElementById("szam2")
const gombabszolut = document.getElementById("abszolut");
const gombdupla = document.getElementById("dupla");
const gombnegalt = document.getElementById("negalt");
const gombnegyzet = document.getElementById("negyzet");
const gombkob= document.getElementById("kob");
const p = document.getElementById("p");


function kiir(a) {
    p.innerHTML = a;
};

gombabszolut.addEventListener("click", () =>  { //nyílt függvény
    kiir(szam.value < 0 ? szam.value*-1  :szam.value);
})


gombdupla.addEventListener("click", () => {
    kiir(szam.value*2);
})

gombnegalt.addEventListener("click",() => {
    kiir(szam.value*-1);
})

gombnegyzet.addEventListener("click", () =>{
    kiir(szam.value**2)
})


gombkob.addEventListener("click", () => {
    kiir(szam.value**3)
})

const fv= () => {
    p.innerHTML="Hello";
}

fv();
debugger;

// az erro functiont nem lehet metódusként alkalmazni


// írjunk egy erro functiont amelyet eltárolunk egy const összeg -be  amely a két paraméter összegét adja vissza

const osszeg = (a, b) => {
    return p.innerHTML=a+b;
}

osszeg(2,5);

debugger;


//írjunk erro functiont amely két paraméterje van az alap (a) és a kitevő (n)  hatványozás

const hatvany= (a,n) => {
    return p.innerHTML= a**n;
}

hatvany(2,3);


//DEBUGGER

// csináljunk egy for ciklust, melyben 1-10 ig számoljon és le lehessen kérdezni a változó értékét

for (let i = 0; i < 10; i++) {
   
    debugger;
    
}


for (let i = 20; i <= 30; i++) {
    document.writeln(i, " ");
    debugger;
    
}

