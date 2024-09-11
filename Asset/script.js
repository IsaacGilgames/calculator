//Híbás script!!!!!

let bevitel = 0;
let number1 = 0;
let number2 = 0;
let eredmeny = 0;
let muvelet = "egyenloseg";
let kezdes = true;
let helyiertek_egesz = [];
let helyiertek_tizedes = [];
//let minusz = false;
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
//console.log(mon_text);
if (localStorage.getItem("mentve") != 0) {

    eredmeny = Number(localStorage.getItem("mentve"));
    mon_text.innerText = eredmeny;
}
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

tizedespont.onclick = function () {
    egesz = false;
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
    if (tudomanyos) {
        tud();
    }
    else {
        muv();
        //kezdes = true;
    }

}

function tud() {
    tudomanyos = false;
    eredmeny = bevitel;
    mon_text.innerText = eredmeny;
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

function muv() {
    console.log(muvelet);
    console.log(eredmeny);
    console.log(bevitel);
    console.log(kezdes);
    if (tudomanyos) {
        eredmeny = bevitel;
        mon_text.innerText = eredmeny;
        tudomanyos = false;
    }
    if (kezdes) {
        eredmeny = bevitel;
        kezdes = false;
    }
    else {
        if (muvelet == "osszeadas") {
            eredmeny = eredmeny + bevitel;
            //aktualis_muvelet = kovetkezo_muvelet;
            //muvelet = "";

        }
        else if (muvelet == "kivonas") {
            eredmeny = eredmeny - bevitel;
            //aktualis_muvelet = kovetkezo_muvelet;
            //muvelet = "";
        }
        else if (muvelet == "szorzas") {
            eredmeny = eredmeny * bevitel;
            //aktualis_muvelet = kovetkezo_muvelet;
            //muvelet = "";
        }
        else if (muvelet == "osztas") {
            eredmeny = eredmeny / bevitel;
            //aktualis_muvelet = kovetkezo_muvelet;
            //muvelet = "";
        }
    }
    if (muvelet != "" || kezdes) {
        mon_text.innerText = eredmeny;
        bevitel = 0;
        egesz = true;
        clearArray(helyiertek_egesz);
        clearArray(helyiertek_tizedes);
        number_write();
        memoria();[]
        muvelet = "";
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

pi.onclick = function () {
    bevitel = 3.141592654;
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







//.reverse()

