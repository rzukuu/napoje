let napoj = {                   //tworzymy pierwszy obiekt
    nazwa: "Napoj orzezwiajacy",
    objetosc : 500,
    cena: 3.20
}

let napoje = [         //tworzymy tablice z pozostaymi obiektami
    {
        nazwa: "Napoj helena",
        objetosc : 500,
        cena: 4.30
    },
    {
        nazwa: "Woda",
        objetosc : 250,
        cena: 1.20
    },
    {
        nazwa: "sok pomarancza",
        objetosc : 500,
        cena: 2.10
    }
];

console.log("Tablica ma dlugosc: ", napoje.length);         //wyswietlamy dlugosc tablicy

function wypisz(napooj){           //funkcja wypisujaca elementy obiektow w tabblicy
    console.log(napooj);
}

wypisz(napoje);

napoje.push(napoj);     //dodajemy pierwszy obiekt do tablicy

console.log("Po dodaniu elementu do tablicy: ");
wypisz(napoje);             //wyswietlamy wszystkie obiekty

let napoje2 = napoje.slice(0,4);        //kopiujemy pierwsza tablice do drugiej

napoje.shift();             //usuwamy ostatni element z pierwszej

console.log("Dlugosc 1 tablicy: ", napoje.length);             //wyswietlamy dlugosci obu tablic
console.log("Dlugosc 2 tablicy: ", napoje2.length);

