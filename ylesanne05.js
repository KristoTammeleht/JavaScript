//Kristo Tammeleht
//18.10.2023
//ylesanne 5

 // temperatuur
let t = prompt("temp praegu");
if (t>25) {
console.error("Vaga kuum ilm!");
} else if (t<15){
    console.error("jahe ilm!");
} else {
    console.error("Monus ilm!");
}

//kasutajanimi kontroll

let nimi = prompt("nimi?");
if(nimi == "admin"){
    console.warn("Tere, administraator!");
} else {
    console.warn("Tere, kylaline!");
}

// pileti ost
let vanus = parseInt(prompt("Mis on sinu vanus?"));
let pilet = prompt("Mis pilet soodus(S)   või   tais(T)");

if (pilet == "S") {
    if (vanus < 18) {
        console.log("hind on 8 eurot");
    } else if (vanus >= 65) {
        console.log("hind on 8 eurot");
    } else {
        console.log("hind on 15 eurot");
    }
} else {
    if (vanus < 18) {
        console.log("hind on 10 eurot");
    } else if (vanus >= 65) {
        console.log("hind on 15 eurot");
    } else {
        console.log("hind on 20 eurot");
    }
}

