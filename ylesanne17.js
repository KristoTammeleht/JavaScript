//Kristo Tammeleht
//6.12.2023
//ylesanne 17


const formElement = document.getElementById('myForm');
const vastusekast = document.getElementById('vastusekast');


formElement.addEventListener('submit', e => {
    e.preventDefault(); // Takistame vaikimisi vormi esitamist
    let eesnimi = firstName.value;
    let perenimi = lastName.value;
    let ema = email.value;
    let suurus = document.querySelector('input[name="gender"]:checked').value;
    let riik = country.value;
    let parool = password.value;
    vastusekast.innerHTML = "esinimi: " + eesnimi + "<br>" + "Perekonnanimi: " + perenimi + "<br>" + "Email: " +  ema + "<br>" + "sugu: " + suurus + "<br>" + "riik: " + riik + "<br>" + "Parool: " +  parool;


});