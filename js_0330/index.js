const gomb= document.getElementById("gomb");
const kep = document.getElementById("kep");




kep.style.visibility= "hidden";



function megjelenit(a){
    kep.style.visibility = a;

    if(a === "hidden"){
        kep.src="188001.775x400.jpg";
    }
}

gomb.addEventListener("mouseover", ()=> {megjelenit("visible")});
gomb.addEventListener("mouseout", ()=> {megjelenit("hidden")});


gomb.addEventListener("click", () => {kep.src = "vicces-cicas-kepek-5-1080x675.jpg"});


//---------------------------------------------------------------------------------------------------------------------


const gomb2 = document.getElementById("gomb2");
const almenu1= document.getElementById("almenu");

almenu1.style.visibility= "hidden";

function megjelenites(){

    almenu1.style.visibility =
    almenu1.style.visibility==="hidden"
    ? "visible" : "hidden";

}
gomb2.addEventListener("click", megjelenites);


//--------------------------------------------------------------------------------------------------------------------


const gomb3 = document.getElementById("gomb3");
const almenu2= document.getElementById("almenu2");


almenu2.style.visibility= "hidden";

function markak(){
    almenu2.style.visibility =
    almenu2.style.visibility=== "hidden"
    ? "visible" : "hidden";
}

gomb3.addEventListener("click", markak);

//------------------------------------------------------------------------------------------------------------------------

const novel= document.getElementById("novel");
const csokken = document.getElementById("csokken");
const p = document.getElementById("ide");
let meret=20;
p.style.fontSize= meret+"px";



function meretez(a){
    meret+=a;
    p.style.fontSize= meret+"px";

}

csokken. addEventListener("click", ()=> {meretez(-1)});
novel.addEventListener("click", () => {meretez(1)});


 



