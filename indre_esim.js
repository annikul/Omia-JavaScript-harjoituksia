// muuttuja alustetaan arvolla
let a = 10;
let b = 9;

// muuttuja alustetaan if lausekkeella
let kumpi = a > b ? 'kissa' : 'koira';

// muuttujan kumpi sisältö tulostetaan console.log() funktiolla
console.log(kumpi); // funktio jonka sisällä on muuttuja kumpi
console.log("Olen " + kumpi) 


//luodaan oma "console.log" funktio joka ottaa vastaan yhden muuttujaa joka on teksti tai numero
function konsoolilog(teksti) {   //konsoolilog on omakeksimä funktionimi. oma keksimä muuttuja
    console.log(teksti)         // funktio suorittaa aaltosulkujen sisällä olevan koodin kun sitä kutsutaan
}                               //rivit 13-16 on funktio

// kutsutaan konsoolilog funktiota ja annetaan sille teksti + muuttuja joka sisältää tekstiä ja ne yhdistetään + merkillä yhdeksi stringiksi
konsoolilog("Olen " + kumpi) //'Olen' = string kumpi = muuttuja jonka sisällä on string 'kissa'




// sama funktio kuin yllä mutta ottaa vastaan kaksi erillistä muuttujaa jotka voi olla numeroita tai tekstiä ja sitten yhdistää ne ennen tulostamista
function konsoolilogi2(teksti1, teksti2) {
    console.log(teksti1 + teksti2)
}

// String on tekstiä joka on lainausmerkkien tai muuttujan sisällä esim 'kissa'
konsoolilogi2("Iso ", kumpi) // string



function logikkaa(sana) {
    let text = sana;
    for (let i = 0; i < 5; i++) {
        text += i + sana;
     }
     console.log(text)
}

logikkaa("Koira")
logikkaa("Kissa")
logikkaa("Marsu")


//
function ika(nimi, syntymavuosi) {
    let kuluvavuosi = 2023
    let ika = kuluvavuosi - syntymavuosi
    console.log(nimi + " on " + ika + "v")
}


ika("Anni", 1989)