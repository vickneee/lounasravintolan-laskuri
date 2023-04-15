function laskeOsudeet() {
    let lasku = parseFloat(document.getElementById('lasku').value);
    let henkilomaara = parseFloat(document.getElementById('henkilomaara').value);
    let veroprosentti = parseFloat(document.getElementById('veroprosentti').value);
    let laskumin = parseInt(document.getElementById('lasku').min);
    let laskumax = parseInt(document.getElementById('lasku').max);
    let henkilomaaramin = parseInt(document.getElementById('henkilomaara').min);
    let henkilomaaramax = parseInt(document.getElementById('henkilomaara').max);

    veroprosentti = veroprosentti / 100
    let osuus = (lasku - (lasku * veroprosentti)) / henkilomaara;
    let tulos = "";

    if (lasku > laskumax || lasku < laskumin) {
        tulos = "Lasku hinta pitää olla väliltä 0-10000.<br>Syötä uusi luku."
    } else if (henkilomaaramin < henkilomaaramin || henkilomaara > henkilomaaramax) {
        tulos = "Henkilömäärä pitää olla väliltä 0-30.<br>Syötä uusi luku.";
    } else {
        for (let i = 1; i <= henkilomaara; i++) {
            tulos += "Henkilö " + i + ": " + osuus.toFixed(2) + " euroa. <br>";
        }
    }
    document.getElementById("osudeet").innerHTML = tulos;
}

    

    
    
    
    
    
    
    
    
    
    
