//Kristo Tammeleht
//18.10.2023
//ylesanne 8


//mundid

let counta = 0;
let kokku = 0 ;
let massiiv = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let count = 0;
while (count < massiiv.length){
    count++;
    if (massiiv[count] <= 2){
        counta++;
        kokku += massiiv[count];

    }
}
console.log("Nii palju munte: " + counta);
console.log("Kokku vordub: " +kokku);