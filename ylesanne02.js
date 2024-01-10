//Kristo Tammeleht
//11.10.2023
//ylesanne 2

// kell
let h = 8; 
let m = 56;
let s = 17;

let kell = h+":"+m+":"+s+"AM"

console.log(kell);


//tsitaat
let tsitaat = '"Ja synnitakse, kuigi tuleb surra, ja armutakse pettumuste trotsiks. M6nd ilu, h2mmastavalt peent ja kurba hing leiab, ilma et ta yldse otsiks.", Artur Alliksaar';

console.log(tsitaat);


//lause nime ja nime esitähtedega
let enimi = "Kristo";
let pnimi = "Tammeleht";
let eenimi = enimi.charAt(0).toUpperCase();
let ppnimi = pnimi.charAt(0).toUpperCase();
let lause = enimi+" "+pnimi+" nimetahed on "+eenimi+"."+ppnimi+".";

console.log(lause);

//perenime pikkus

let nimi = pnimi+","+enimi;
let ind = nimi.indexOf(',');
let snimi= nimi.split(",");
let pikkus = snimi[0].length;
let perenimi = snimi[0].toUpperCase();



console.log(perenimi);
console.log("pikkus: "+pikkus);

//emaili muutmine

let epost = "fake.gmail@hkhk.edu.ee";
let katki = epost.split("@");
let uusepost = katki[0]+"@gmail.com";

console.log(uusepost);


//andmerida analüüs

let aus = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
let paus = aus.split(",")


for (let i=0; i< paus.length; i++) {
    let a = paus[i];

    let specialchar = a.includes("@")
    if (specialchar) {
        let b = a.split("@")
        console.log(b[0])
    }
    let isip = true
    let specialchars = a.includes(".")
    if (specialchars) {
        let b = a.split(".")
        if (b.length == 4) {
            for (let i = 0; i<4; i++)
            if (parseInt(b[i]) != NaN) {
             if (b[i] >255 && b[i] < 0) {
                isip = false
             }
             
            }
            if (isip){
                console.log(a)
             }
        }

    }



}








