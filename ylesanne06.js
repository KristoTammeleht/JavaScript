//Kristo Tammeleht
//18.10.2023
//ylesanne 6


// number
let i = prompt("Ytle mulle number (Saab olla ka negatiivne)");
switch (true) {
    case (i >0):
        l = i + " on pos.";
    break;
    case(i == 0):
        l = i + " on nul.";
    break;
    default:
        l = i + " on neg.";
}

console.log(l);



//restoran
let nimi = prompt("Mitu inimest tuleb sooma?")
let tervitus;
 
 
switch (true) {
  case (nimi == 1 || nimi == 2):
    tervitus = "Valige laud kahele inimesele.";
    break;
    case (nimi == 3 || nimi == 4):
    tervitus = "Valige laud neljale inimesele.";
    break;
    case (nimi == 5 || nimi == 6):
    tervitus = "Valige laud kuuele inimesele.";
    break;
    case (nimi > 6):
    tervitus = "Valige suur laud.";
    break;
  default:

}
 
console.log(tervitus);