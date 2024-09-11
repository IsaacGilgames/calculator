let bevitel = 0;
let eredmeny = 0;
let muvelet = "";
let kezdes = true;
let helyiertek_egesz = [];
let helyiertek_tizedes = [];
let egesz = true;
let tudomanyos = false;
console.log(localStorage.getItem("mentve"))

let number_buttons = document.querySelectorAll(".number_b");
let aritmetik_buttons = document.querySelectorAll(".aritmetik_b");
let mon_text = document.querySelector("#mon_text");
let bevitel_text = document.querySelector("#bevitel_text");
let tizedespont = document.querySelector("#tizedesvesszo");
let osszeadas = document.querySelector("#osszeadas");
let kivonas = document.querySelector("#kivonas");
let szorzas = document.querySelector("#szorzas");
let osztas = document.querySelector("#osztas");
let vegrehajt = document.querySelector("#egyenlosegjel");
let del = document.querySelector("#del");
let back = document.querySelector("#back");
let pi = document.querySelector("#pi");
let hatvany = document.querySelector("#hatvany");
let gyok = document.querySelector("#gyok");
let fakt = document.querySelector("#fakt");
let absz = document.querySelector("#absz");
let Ans = document.querySelector("#Ans");
let afa = document.querySelector("#afa");

//Memória
if (localStorage.getItem("mentve") != 0) {

    eredmeny = Number(localStorage.getItem("mentve"));
    mon_text.innerText = eredmeny;
}

//Szám legenerálása
function number_generator(nb) {
    if (egesz) {
        temp = Number(nb.value);
        helyiertek_egesz.push(temp);
        //console.log(temp);
        number_write();
    }
    else {
        temp = Number(nb.value);
        helyiertek_tizedes.push(temp);
        //console.log(temp);
        number_write();
    }
}

function number_write() {
    //helyiertek.reverse();
    //console.log(helyiertek_egesz)
    bevitel = 0;
    for (let i = 0; i < helyiertek_egesz.length; i++) {
        bevitel += helyiertek_egesz[i] * Math.pow(10, helyiertek_egesz.length - 1 - i);
    }
    if (!egesz) {
        for (let i = 0; i < helyiertek_tizedes.length; i++) {
            bevitel += helyiertek_tizedes[i] * Math.pow(10, (i + 1) * (-1));
        }
    }
    bevitel_text.innerText = bevitel;
}

tizedespont.onclick = function () {
    egesz = false;
}

for (let nb of number_buttons) {
    nb.onclick = function () {
        number_generator(nb);
    }
}

for (let ab of aritmetik_buttons) {
    ab.onclick = function () {
        number_write();
    }
}

osszeadas.onclick = function () {
    muv();
    muvelet = "osszeadas";
}
kivonas.onclick = function () {
    muv();
    muvelet = "kivonas";
}
szorzas.onclick = function () {
    muv();
    muvelet = "szorzas";
}
osztas.onclick = function () {
    muv();
    muvelet = "osztas";
}
vegrehajt.onclick = function () {
    muv();
    
}

function muv() {
    if (kezdes || tudomanyos) {
        eredmeny = bevitel;
        megjelen();
        kezdes = false;
        tudomanyos = false;
    }
    else{
        if (muvelet == "osszeadas") {
            eredmeny += bevitel;
            megjelen();
        }
        else if (muvelet == "kivonas") {
            eredmeny -= bevitel;
            megjelen();
        }
        else if (muvelet == "szorzas") {
            eredmeny *= bevitel;
            megjelen();
        }
        else if (muvelet == "osztas") {
            eredmeny /= bevitel;
            megjelen();
        }

    }
}




function megjelen() {
    mon_text.innerText = eredmeny;
    bevitel = 0;
    egesz = true;
    clearArray(helyiertek_egesz);
    clearArray(helyiertek_tizedes);
    number_write();
    memoria();[]
    muvelet = "";
}




//Törlés és memória
del.onclick = function () {
    bevitel = 0;
    eredmeny = 0;
    kezdes = true;
    clearArray(helyiertek_egesz);
    clearArray(helyiertek_tizedes);
    mon_text.innerText = eredmeny;
    bevitel_text.innerText = bevitel;
    memoria();
}

back.onclick = function () {
    if (!egesz && helyiertek_tizedes.length < 1) {
        egesz = true;
    }
    if (egesz) {
        vissza(helyiertek_egesz);
    }
    else {
        vissza(helyiertek_tizedes);
    }

}

function clearArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}

function vissza(array) {
    array.pop();
    number_write()
}

function memoria() {
    localStorage.setItem("mentve", eredmeny);
}

//Tudományos műveletek
pi.onclick = function () {
    bevitel = 3.141592654;
    bevitel_text.innerText = bevitel;
}

hatvany.onclick = function () {
    tudomanyos = true;
    bevitel = bevitel ** 2;
    bevitel_text.innerText = bevitel;
}

Ans.onclick = function () {
    tudomanyos = true;
    bevitel = eredmeny;
    bevitel_text.innerText = bevitel;
}

gyok.onclick = function () {
    tudomanyos = true;
    bevitel = Math.sqrt(bevitel);
    bevitel_text.innerText = bevitel;
}

fakt.onclick = function () {
    tudomanyos = true;
    for (let i = (bevitel - 1); i >= 1; i--) {
        bevitel = bevitel * i;


    }
    bevitel_text.innerText = bevitel;
}

absz.onclick = function () {
    tudomanyos = true;
    if (bevitel < 0) {
        bevitel *= (-1);
    }
    bevitel_text.innerText = bevitel;
}


//Áfa számítás -> Nem működik
/*
absz.onclick = function () {
    tudomanyos = true;
    eredmeny *= 1.27;
    mon_text.innerText = eredmeny; 
}*/
