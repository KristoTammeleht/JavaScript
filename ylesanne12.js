//Kristo Tammeleht
//6.11.2023
//ylesanne 12

// Ostukorv objekt
const ostukorv = {
  tooted: [
    { nimi:'Piim', hind:3.60, kogus:2 },
    { nimi:'Leib', hind:2.00, kogus:1 },
    { nimi:'Munad', hind:1.50, kogus:6 },
    { nimi:'Juust', hind:4.20, kogus:1 },
    { nimi:'Tomatid', hind:2.30, kogus:3 },
  ],

  kuvaNimiHindKogus: function () {
    const ostukorviElement = document.getElementById('ostukorv');
    this.tooted.forEach(toode => {
      const listItem = document.createElement('li');
      listItem.textContent = `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`;
      ostukorviElement.appendChild(listItem);
    });
  },

  lisaToode: function (nimi, hind, kogus) {
    this.tooted.push({ nimi: nimi, hind: hind, kogus: kogus });
  },

  koguSumma: function () {
    let summa = 0;
    for (const toode of this.tooted) {
      summa += toode.hind * toode.kogus;
    }
    return summa;
  },
};

// Kuvatakse ostukorv
ostukorv.kuvaNimiHindKogus();

// Lisatakse uus toode
ostukorv.lisaToode('Kohv', 5.80, 2);

// Kuvatakse ostukorvi kogusumma
const koguSummaElement = document.getElementById('kogu-summa');
koguSummaElement.textContent = 'Ostukorvi kogu summa: ' + ostukorv.koguSumma();
