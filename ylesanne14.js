//Kristo Tammeleht
//6.12.2023
//ylesanne 14


const rida = document.querySelectorAll("li.list-group-item");
rida.forEach(element => {
    const text = element.innerText
    if (text.includes("Ootel")) {
        element.setAttribute("class", "list-group-item-warning");
        element.style.setProperty("color", "orange");

    } else if (text.includes("Tehtud")){
        element.setAttribute("class", "list-group-item-success");
        element.style.setProperty("color", "green");
        element.style.setProperty("--font-weight", "700");

    } else if (text.includes("Viga")) {
        element.setAttribute("class", "list-group-item-danger");
        element.style.setProperty("color", "red");
    }
});