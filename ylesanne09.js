//Kristo Tammeleht
//31.10.2023
//ylesanne 9

// ananüümne funktsioon
var nimiklassika = function() {
    console.log("Kristo Tammeleht");
};
 
nimiklassika();
// noole funktsioon
const niminoolega= () => {
    console.log("Kristo Tammeleht");
};
niminoolega();


// ananüümne funktsioon, mis väljastab kuu eesti keeles
var kuupaevEesti = function(kuupaev) {
    const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
let monthsi = months.split(", ");
    let kuupav = kuupaev.split(".");
    console.log(kuupav[0] +"." + monthsi[parseInt(kuupav[1])] + "." + kuupav[2]);
};
kuupaevEesti("29.07.22")


// ananüümne funktsioon, mis annab esitatud arvude keskmise
var keskmine = function(arv) {
    let m = 0
    for (let x = 0; x < arv.length; x++){
        m += arv[x]
        
    } 
    let t = arv.length;
    keskmine = m / t

    console.log(keskmine);
};
keskmine([1,2,3,4,5])  // kutsume valja funktsiooni ja esitame numbrid


const salajaneSonum= (sonum) => {
    console.error(sonum.indexOf('a'));
    console.error(sonum.indexOf('g'));
    let letterstring = "a e i o u õ ä ö ü";   // tähed mis muudetakse
    let letterstringsuur = letterstring.toUpperCase();  //lisame ka need samad tähed suurena
    let letterarray = letterstring.split(" "); // splittin letterstringi
    let letterarraysuur = letterstringsuur.split(" "); // splittin letterstringisuure
    for (let i = 0;i<letterarray.length;i++){  // loopin läbi tähtede
        while (sonum.indexOf(letterarray[i]) != -1){  // kui on olemas sõnumis vaheta
            sonum = sonum.replace(letterarray[i],"*" );  // vahetan 
        }
    
    }
    for (let i = 0;i<letterarraysuur.length;i++){  // loopin läbi suurte tähtede
        while (sonum.indexOf(letterarraysuur[i]) != -1){ // kui on olemas sõnumis vaheta
            sonum = sonum.replace(letterarraysuur[i],"*" ); // vahetan 
        }
    
    }
    console.log(sonum);
};
salajaneSonum("mA olen lahe Liiga lahe muhahahah"); // kutsun funktsiooni koos sõnumi sisendiga



const leiaUnikaalsedNimed= (nimed) => {
    let uniqueItems = [...new Set(nimed)];  // võtab unikaalsed välja 
    console.log(uniqueItems); 
};
leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]);