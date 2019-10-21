// Stykket er i 16-deler
// Vi må kunne legge inn pauser, og toner av forskjellig lengde
// Det er 2 toner som må varieres

let cembalo;
let tempo = 3;
let diskant;
let bass;
let frekvens;
let d; //Et array med alle notene i diskanten
let b; //Og et for bassen
let sveisLeft; //Sveisen på venstre side



let lastet = [];
let bilder = [];

/*
window.onload = function() {

    bilder.push("img/tupeLeft.png", "img/hodeLeft.jpg");

    for (var i=0; i<bilder.length; i++) {
        var bilde = new Image();
        bilde.onload = startSlideShow;
        bilde.src = bilder[i];
    }

}
*/

function startSlideShow(){

    //document.getElementById("laster").innerHTML += "Lastet " + this.src + "<br>";

    lastet.push(0);
    if (lastet.length == bilder.length) {

        //document.getElementById("laster").innerHTML += "Alle bilder er lastet";
        //document.body.style.background = "url(BigWhale.jpg)";
        //setTimeout(init, 1000);
    }

}

function init() {

    //Stopper det hele hvis de ikke har riktig nettleser
    try {
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        cembalo = new AudioContext();
    }
    catch(e) {
        alert("Dette fungerer kun i nyere versjoner av nettlesere som Chrome og Firefox");
    }


    sveisLeft = document.querySelector("#left img");
    diskant = document.getElementById("diskant");
    bass = document.getElementById("bass");

    //Diskanten. P betyr pause, de andre er toner som matcher et klaviatur. A4 er knyttet til tonen med frekvens = 440. A5 er en oktav opp.
    //Frekvensene som er knyttet til bokstav- og tall-kodene ligger i filen toner.js
    var d1 = [[P,1],[E4,1], [A4,1], [C5,1], [B4,1], [E4,1], [B4,1], [D5,1], [C5,1], [P,1], [E5,2], [P,1], [GX4,1], [P,1], [E5,1], [P,1] ];
    var d2 =  [[A4,1],[E4,1], [A4,1], [C5,1], [B4,1], [E4,1], [B4,1], [D5,1], [C5,1], [P,1], [A4,1], [P,1], [P,1], [P,1], [P,1], [P,1] ];
    var d3 = [[P,1],[E5,1], [C5,1], [E5,1], [A4,1], [C5,1], [E4,1], [G4,1], [F4,1], [P,1], [A4,1], [P,1], [D5,1], [P,1], [F5,1], [P,1] ];
    var d4 = [[P,1],[D5,1], [B4,1], [D5,1], [G4,1], [B4,1], [D4,1], [F4,1], [E4,1], [P,1], [G4,1], [P,1], [C5,1], [P,1], [E5,1], [P,1] ];
    var d5 = [[P,1],[C5,1], [A4,1], [C5,1], [F4,1], [P,1], [D5,1], [P,1], [P,1], [B4,1], [G4,1], [B4,1], [E4,1], [P,1], [C5,1], [P,1] ];
    var d6 = [[P,1],[A4,1], [F4,1], [A4,1], [D4,1], [P,1], [B4,1], [P,1], [C5,1], [P,1], [P,1], [P,1], [P,1], [P,1], [P,1], [P,1] ];
    var d7 = [[P,1],[G4,1], [C5,1], [E5,1], [D5,1], [G4,1], [D5,1], [F5,1], [E5,1], [P,1], [G5,1], [P,1], [B4,1], [P,1], [G5,1], [P,1] ];
    var d8 = [[C5,1],[G4,1], [C5,1], [E5,1], [D5,1], [G4,1], [D5,1], [F5,1], [E5,1], [P,1], [C5,1], [P,1], [G5,1], [P,1], [E5,1], [P,1] ];
    var d9 = [[C6,1],[A5,1], [E5,1], [A5,1], [C5,1], [E5,1], [A4,1], [C5,1], [D5,1], [P,1], [FX5,1], [P,1], [A5,1], [P,1], [C6,1], [P,1] ];
    var d10 = [[H5,1],[G5,1], [D5,1], [G5,1], [H4,1], [D5,1], [G4,1], [H4,1], [C5,1], [P,1], [E5,1], [P,1], [G5,1], [P,1], [H5,1], [P,1] ];
    var d11 = [[A5,1],[FX5,1], [DX5,1], [FX5,1], [H4,1], [DX5,1], [FX4,1], [A4,1], [G4,1], [P,1], [G5,1], [P,1], [P,1], [E5,1], [C5,1], [E5,1] ];
    var d12 = [[A4,1],[P,1], [FX5,1], [P,1], [P,1], [D5,1], [H4,1], [D5,1], [G4,1], [P,1], [E5,1], [P,1], [P,1], [C5,1], [A5,1], [C5,1] ];
    var d13 = [[FX4,1],[G5,1], [FX5,1], [E5,1], [DX5,1], [FX5,1], [H4,1], [DX5,1], [E5,1], [P,1], [P,1], [P,1], [P,1], [P,1], [P,1], [P,1] ];

    //d = d1.concat(d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13);
    d = [...d1, ...d2, ...d3, ...d4, ...d5, ...d6, ...d7, ...d8, ...d9, ...d10, ...d11, ...d12, ...d13 ];

    //Bassen
    var b1 = [ [A2,1],[P,1], [A3,1], [P,1], [P,1], [P,1], [GX3,1], [P,1], [A3,1], [E3,1], [A3,1], [C4,1], [B3,1], [E3,1], [B3,1], [D4,1] ];
    var b2 = [ [C4, 1],[P,1],[A3,1],[P,1],[GX3,1],[P,1],[E3,1],[P,1],[A3,1],[E3,1],[A3,1],[C4,1],[B3,1],[E3,1],[B3,1],[D4,1] ];
    var b3 = [[C4,1],[P,1], [A3,1], [P,1], [C4,1], [P,1], [A3,1], [P,1], [D4,1], [A3,1], [F3,1], [A3,1], [D3,1], [F3,1], [A2,1], [C3,1] ];
    var b4 = [[B2,1],[P,1], [D3,1], [P,1], [G3,1], [P,1], [B3,1], [P,1], [P,1], [G3,1], [E3,1], [G3,1], [C3,1], [E3,1], [G2,1], [B2,1] ];
    var b5 = [[A2,1],[P,1], [C3,1], [P,1], [D3,1], [F3,1], [B2,1], [D3,1], [G2,1], [P,1], [B2,1], [P,1], [C3,1], [E3,1], [A2,1], [C3,1] ];
    var b6 = [[F2,1],[P,1], [D2,1], [P,1], [G2,1], [G3,1], [F3,1], [G3,1], [C3,1], [G3,1], [C4,1], [E4,1], [D4,1], [G3,1], [D4,1], [F4,1] ];
    var b7 = [[E4,1],[P,1], [C4,1], [P,1], [B3,1], [P,1], [G3,1], [P,1], [C4,1], [G3,1], [C4,1], [E4,1], [D4,1], [G3,1], [D4,1], [F4,1] ];
    var b8 = [[E4,1],[P,1], [C4,1], [P,1], [P,1], [P,1], [P,1], [P,1], [P,1], [G4,1], [E4,1], [G4,1], [C4,1], [E4,1], [G3,1], [B4,1] ];
    var b9 = [[A3,1],[P,1], [C4,1], [P,1], [E4,1], [P,1], [G4,1], [P,1], [FX4,1], [A4,1], [D4,1], [FX4,1], [A3,1], [D4,1], [FX3,1], [A3,1] ];
    var b10 = [[G3,1],[P,1], [H3,1], [P,1], [D4,1], [P,1], [FX4,1], [P,1], [E4,1], [G4,1], [C4,1], [E4,1], [G3,1], [C4,1], [E3,1], [G3,1] ];
    var b11 = [[FX3,1],[P,1], [A3,1], [P,1], [H3,1], [P,1], [DX4,1], [P,1], [P,1], [E4,1], [C4,1], [E4,1], [A3,1], [C4,1], [E4,1], [G4,1] ];
    var b12 = [[FX4,1],[D4,1], [H3,1], [D4,1], [G3,1], [H3,1], [D4,1], [FX4,1], [E4,1], [C4,1], [A3,1], [C4,1], [FX3,1], [A3,1], [C4,1], [P,1] ];
    var b13 = [[P,1],[H3,1], [C4,1], [A3,1], [H3,1], [P,1], [H2,1], [P,1], [E3,1], [E4,1], [H3,1], [G3,1], [E3,1], [H2,1], [G2,1], [H2,1] ];

    //b = b1.concat(b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13);
    b = [...b1, ...b2, ...b3, ...b4, ...b5, ...b6, ...b7, ...b8, ...b9, ...b10, ...b11, ...b12, ...b13 ];

    for (var i=0; i<d.length; i++) {

        //Knytter den grafiske fremstillingn til hver enkelt tone
        //Ganger med 1000, siden setTimeout bruker millisekunder, mens noteOn bruker hele sekunder
        //setTimeout(visGrafikk, i * tempo / 16 * 1000);

        playSound (d[i][0], i,  d[i][1]);
        playSound (b[i][0], i, b[i][1]);
    }




    }

var tone = 0;
/*
function visGrafikk() {

    diskant.style.width = d[tone][0] / 3 + "px";
    bass.style.width = b[tone][0] / 3 + "px";
    if (d[tone][0] > 0)
        sveisLeft.style.top = 45 - d[tone][0] / 15 + "px";
    console.log (d.indexOf(d[tone]));
    tone++;
}
*/
function playSound(frekvens, start, lengde) {

    if (frekvens < 0)
    return;

        //left.style.width = frekvens / 10 + "px";

        let tone = cembalo.createOscillator();
        tone.frequency.value = frekvens;
        tone.connect(cembalo.destination);

        if (frekvens != 0) {
            tone.start(tempo * start / 16 );
            tone.stop(tempo * start / 16 + (tempo * lengde / 16));
        } else {
            tone.start(0);
            tone.stop(tempo * lengde / 16);
        }
}


document.onclick = init;



