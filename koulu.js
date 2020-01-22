//////

const printMessage = (message) => {
    console.log(message);
    window.alert(message);
}

//////

const handler = event => {
    event.preventDefault();
    window.alert("Terve, ", event.target.input.value);
}

<form onSubmit={handler}>
    <input type="text" name="input" />
    <button type="submit">submit</button>
</form>


//////

const leviska (leviskaa, naulaa, luotia) => {
    let grammaa = 0;
    naulaa += leviskaa * 20;
    luotia += naulaa * 32
    grammaa += luotia * 13.3

    console.log("Massa nykymittojen mukaan:\n", Math.floor(grammaa), " kilogrammaa ja ", grammaa % 1000, " grammaa.");
    return grammaa;
}

//////

const monopoliNoppa = () => {
    let luvut = [];

    for (let i = 0; i < 2; i++) {
        luvut[i] = Math.floor(Math.random() * (6 - 1)) + 1;
    }

    window.alert("1. Luku: ", luvut[0], " 2. Luku: ", luvut[1]\n, "Yhteensä: ", luvut[0] + luvut[1]);
}

//////

const tunnusNumerot = () => {
    let kolmeNluvut = [];
    let neljaNluvut = [];

    for (let i = 0; i < 3; i++) {
        kolmeNluvut[i] = Math.floor(Math.random() * 9);
    }

    for (let i = 0; i < 4; i++) {
        neljaNluvut[i] = Math.floor(Math.random() * (6 - 1)) + 1);
    }

    window.alert("Kolmenumeroisen koodi: ", kolmeNluvut[0], kolmeNluvut[1], kolmeNluvut[2]\n, "Nelinumeroisen koodi: ", neljaNluvut[0], neljaNluvut[1], neljaNluvut[2], neljaNluvut[3]);
}

//////

const pyyntiMitta = (mitta) => {
    if (mitta >= 37) {
        window.alert("Kuha on tapeeksi pitkä, saat pitää sen");
    } else if (mitta < 37) {
        window.alert("Kuhan pitää olla vähintään 37cm. Tämän kuhan pituudesta puuttuu: ", 37 - mitta, "cm");
    } else {
        window.alert("virheellinen mitta")
    }

}

//////

const arpovaHattu = (nimi) => {
    let luku = Math.floor(Math.random() * (4 - 1) + 1);
    switch (luku) {
        case 1:
            window.alert(nimi, ", olet Rohkelikko")
        case 2:
            window.alert(nimi, ", olet Luihuinen")
        case 3:
            window.alert(nimi, ", olet Puuskupuh")
        case 4:
            window.alert(nimi, ", olet Korpinkynsi")
        default:
            console.log("errorororo")
    }
}

///////

const hemoglobiini = (sukupuoli, hemo) => {
    if (sukupuoli == "m") {
        if (hemo >= 134 && hemo <= 195) {
            window.alert("Hemoglobiinitasosi on normaali")
        } else if (hemo < 134) {
            window.alert("Hemoglobiinitasosi on alhainen")
        } else if (hemo > 195) {
            window.alert("Hemoglobiinitasosi on korkea")
        } else {
            window.alert("invalid input")
        }
    } else if (sukupuoli == "n") {
        if (hemo >= 117 && hemo <= 175) {
            window.alert("Hemoglobiinitasosi on normaali")
        } else if (hemo < 117) {
            window.alert("Hemoglobiinitasosi on alhainen")
        } else if (hemo > 175) {
            window.alert("Hemoglobiinitasosi on korkea")
        } else {
            window.alert("invalid input")
        }
    } else {
        window.alert("invlaid gender");
    }
}

///////

const karkausvuosi = (vuosi) => {

    if (vuosi % 4 == 0) {

        if (vuosi % 100 == 0) {

            if (vuosi % 400 == 0) {
                window.alert("vuosi ", vuosi, " on karkausvuosi");
                return true;
            } else {
                window.alert("vuosi ", vuosi, " ei ole karkausvuosi");
                return false;
            }
        } else {
            window.alert("vuosi ", vuosi, " on karkausvuosi");
            return true;
        }
    } else {
        window.alert("vuosi ", vuosi, " ei ole karkausvuosi");
        return false;
    }

}

//////

