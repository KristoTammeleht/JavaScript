//Kristo Tammeleht
//6.12.2023
//ylesanne 13


const rida = document.querySelectorAll("div.card");
console.log(rida)
rida.forEach(element => {
  const image = element.querySelector("img.card-img-top")
  const cardtitle = element.querySelector("h5.card-title")
  const cardtext = element.querySelector("p.card-text")
    cardtitle.innerText = image.dataset.title;
    cardtext.innerText = image.dataset.description;
});
