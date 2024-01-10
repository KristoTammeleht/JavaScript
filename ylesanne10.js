//Kristo Tammeleht
//31.10.2023
//ylesanne 10

const toode = {
  nimetus: 'Leib',
  hind: 2.00,
  kogus: 1,
  koguhind: function () {
    return this.hind * this.kogus;
  },
  muudaKogust: function (uusKogus) {
    this.kogus = uusKogus;
  },
  kuvamine: function () {
    console.log(`Toode: ${this.nimetus}, Hind: ${this.hind} EUR, Kogus: ${this.kogus}`);
  }
};

toode.kuvamine();


// loome ostukorvi objekti
const ostukorv = {
  tooted: [
    { nimi: 'Piim', hind: 3.60, kogus: 2 },
    { nimi: 'Leib', hind: 2.00, kogus: 1 },
    { nimi: 'Munad', hind: 1.50, kogus: 6 },
    { nimi: 'Juust', hind: 4.20, kogus: 1 },
    { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
  ],
  koguSumma: function () {
    let summa = 0;
    for (const toode of this.tooted) {
      summa += toode.hind * toode.kogus;
    }
    return summa;
  },
  kuvamine: function () {
    for (const toode of this.tooted) {
      console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
    }
  },
  lisaToode: function (nimi, hind, kogus) {
    this.tooted.push({ nimi, hind, kogus });
  }
};


ostukorv.kuvamine();
ostukorv.lisaToode('Kohv', 5.80, 2);
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
