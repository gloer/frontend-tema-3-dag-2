
const ta = document.getElementById("ta");
const inpProsent = document.getElementById("inpProsent");
const inpKode = document.querySelector("#inpKode");


function regnUt() {
    let antall = Number(inpProsent.value);

    ta.value = "";

    antall--;

    for(let i = 0; i <= antall; i++) {
        ta.value += 100 / antall * i + "% {" + inpKode.value + " }" + "\n";
    }
}

inpProsent.oninput = regnUt;
inpKode.oninput = regnUt;

regnUt();
