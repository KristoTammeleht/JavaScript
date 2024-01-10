//Kristo Tammeleht
//11.10.2023
//ylesanne 3

// soit
let a = prompt("Mis on kiieus? km/h");
let b = prompt("Mis on kaugus?");
kiirus = parseInt(a);
kaugus = parseInt(b);
aeg = kaugus / kiirus;
console.log( aeg + " tundi");

//postituse kuvamine

let c = 137;
let d =  Math.floor(c/10);
let e = c%10;

console.log( d + " veebilehte ja " + e + " postitust on viimasel lehel.");

//serveri tookulu

let f = 9.69/100;
let g = 400/1000;
let vastus = f * g;
console.log(vastus);