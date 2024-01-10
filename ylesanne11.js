//Kristo Tammeleht
//6.11.2023
//ylesanne 10

//Nimed
const nimed = [
    "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve",
    "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe",
    "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask",
    "Tiina Teder", "Kaidi Koppel", "tiina Toom"
  ];
  
  const formattedNames = [];
  for (const name of nimed) {
    const parts = name.split(' ');
    const firstName = parts[0][0].toUpperCase() + parts[0].slice(1);
    const lastName = parts[1][0].toUpperCase() + parts[1].slice(1);
    const email = `${lastName}@metshein.com`;
    const formattedName = `${firstName} ${lastName} (${email})`;
    formattedNames.push(formattedName);
    console.error(formattedName);
  };
  
  // Sünniaeg ja vanus
  function searchAndDisplayFullName(nameToSearch) {
    const foundName = nimed.find(name => name.toLowerCase() === nameToSearch.toLowerCase());
    if (foundName) {
      console.error(`Full Name: ${foundName}`);
    } else {
      console.error(`Name not found`);
    }
  }

  searchAndDisplayFullName("Kristo Tammeleht");
  
  //Kaugushüpe
  
  const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Kristo Tammeleht", isikukood: "50503230231" }

  ];
  

function extractBirthdateAndAge(person) {
    let birthYear;
    if (person.isikukood[0] === "3" || person.isikukood[0] === "4") {
      birthYear = 1900 + parseInt(person.isikukood.slice(1, 3));
    } else if (person.isikukood[0] === "5" || person.isikukood[0] === "6") {
      birthYear = 2000 + parseInt(person.isikukood.slice(1, 3));
    } else {
      console.warn("Invalid isikukood prefix");
      return null;
    }
  
    const birthdate = person.isikukood.slice(5, 7) + '.' + person.isikukood.slice(3, 5) + '.' + birthYear;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return { birthdate, age };
  }
  

  for (const person of inimesteAndmed) {
    const result = extractBirthdateAndAge(person);
    if (result) {
      const { birthdate, age } = result;
      console.warn(`${person.nimi}: Birthdate - ${birthdate}, Age - ${age}`);
    }
  }

  const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },

  ];
  
  function calculateAverage(arr) {
    const sum = arr.reduce((total, result) => total + result, 0);
    return (sum / arr.length).toFixed(2);
  }
  
  for (const opilane of opilased) {
    const bestResult = Math.max(...opilane.tulemused);
    const averageResult = calculateAverage(opilane.tulemused);
    console.log(`${opilane.nimi}: Best Result - ${bestResult}, Average Result - ${averageResult}`);
  }