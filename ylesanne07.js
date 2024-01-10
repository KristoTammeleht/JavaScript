//Kristo Tammeleht
//18.10.2023
//ylesanne 7

// tooted
let x = 0; // jarjekorranumber
const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i<products.length; i++) {
    
    if (!products[i] != "Muna" && products[i] != "Sibul" && !products[i] != "Riis"){
        x +=1
        console.log(x+ ". " + products[i]);
    }

    if (x == 10){
        break;
    }
}

// temperatuurid
const temperatures = [
[5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
[1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
[8, 10, 13, 15, 16, 18, 19, 20, 17, 15, 13, 11, 10, 9, 8, 10, 12, 14, 16, 18, 20, 22, 21, 18, 16, 14],
[2, 5, 7, 9, 12, 15, 17, 18, 15, 13, 11, 8, 6, 5, 4, 7, 9, 12, 14, 16, 19, 21, 20, 18, 16, 13],
[6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
[11, 14, 17, 19, 21, 23, 24, 22, 19, 16, 13, 11, 10, 9, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18],
[9, 11, 14, 16, 18, 20, 22, 21, 18, 16, 13, 11, 9, 8, 7, 10, 13, 16, 18, 21, 23, 24, 23, 21, 18, 15],
[7, 10, 13, 15, 17, 20, 22, 23, 20, 17, 14, 12, 10, 9, 8, 11, 14, 17, 19, 22, 24, 26, 25, 23, 20, 17],
[3, 6, 9, 11, 13, 15, 17, 18, 16, 14, 11, 9, 7, 6, 5, 8, 10, 13, 15, 17, 19, 21, 20, 18, 15, 12],
[1, 3, 5, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
[6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
[10, 13, 16, 18, 20, 22, 23, 24, 21, 18, 15, 13, 11, 10, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18]
];

const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
let monthsi = months.split(", ");

let keskmine = 0
let maks = 0
let min = 100
let maksi = ""
let mini = ""
for (let i = 0;i<temperatures.length;i++) {   //kaib termperatuuridest labi
    if (Math.min(...temperatures[i]) < min){ 
        min = Math.min(...temperatures[i])
        mini = monthsi[i]
    }

    if (Math.max(...temperatures[i]) > maks){
        maks = Math.max(...temperatures[i])
        maksi = monthsi[i]
    }



    let m = 0
    for (let x = 0; x < temperatures[i].length; x++){
        m += temperatures[i][x]
    }  // maksimum
    let t = temperatures[i].length;  // temperatuuri 
    keskmine = m / t

    console.warn(monthsi[i] +" "+ keskmine)
    
}

console.log(mini + " " +min);
console.log(maksi + " " +maks);







