
//conseil: il faut penser à toutes les éventualité même si cela n'a pas été évoqué dans le sujet

function ageCategories() {
    let welcome = parseInt(prompt('Veuillez entrez votre âge :'));
    if(welcome <= 0){
        alert('Vraiment ! Ce n\'est pas crédible que tu ais un âge négatif !');
    } else if(welcome >= 1 && welcome <= 17){
        alert('Tu n\'es pas encore majeur !');
    } else if(welcome >= 18 && welcome <= 49){
        alert('Tu es major mais pas encore senior !');
    } else if(welcome >= 50 && welcome <= 59){
        alert('Vous êtes senior mais pas encore retraité !');
    } else if(welcome >= 60 && welcome <= 120){
        alert('Vous êtes retraité, profitez de votre temps libre !');
    } else if(welcome > 120){
        alert('RIP');
    } else {
        alert('Tu n\'as pas entrez d\'âge !');
    }
};

// ==============================================================


function listeAmies() {
    let nicks = [], nick;
    while(nick = prompt('Entrez un prénom:')){
        nicks.push(nick);
    }
    if(nicks.length > 0){
        alert(`Wahou ! Tu as ${nicks.length} amies :\n${nicks.join(' - ')}`);
    } else {
        alert("Tu n'as aucun ami ? C'est triste :(");
    }
}

// ==============================================================

/*PROGRAMME QUI PERMET DE CONVERTIR UN CHIFFRE EN LETTRE*/
function num2Letters(number){
    if(isNaN(number) || number < 0 || number > 999){
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }

    var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
        tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
    
    var units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;
    
    var unitsOut, tensOut, hundredsOut;

    if(number === 0){
        return 'zéro';
    } else {
        //traitement des unités
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

        //traitement des dizaines
        if(tens === 1 && units > 0){
            tensOut = units2Letters[10 + units];
            unitsOut = '';
        } else if(tens === 7 || tens === 9){
            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et' : '') + units2Letters[10 + units];
            unitsOut = '';
        } else {
            tensOut = tens2Letters[tens];
        }

        tensOut += (units === 0 && tens === 8 ? 's' : '');

        //traitement des centaines
        hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

        //retour du total
        return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
    }
}

function letterConversion() {
    let userEntry;
    userEntry = prompt('Indique le nombre entier à ecrire en toute lettres (entre 0 et 999):');
    alert(num2Letters(parseInt(userEntry, 10)));
}

// ==============================================================

function lesDixNombresSuivants() {

    let premierDesDixNombres, numb;

    numb = [];
    premierDesDixNombres = parseInt(prompt('Entrez un nombre pour afficher les 10 autres suivants :'))

    if(isNaN(premierDesDixNombres)) {
        alert(`Mais un peu de raison voyons ! Vous n'avez saisie ni un chiffre ni un nombre, recommencez !`);
        lesDixNombresSuivants();
    } else {
        for(i = 0; i < 10; i++) {
            premierDesDixNombres += 1
            numb.push(premierDesDixNombres);
        }
    
        alert(numb.join(' - '));
    }
}


// ==============================================================

function multiplication() {

    let nombreAmultiplier, tableDeMultiplication;

    nombreAmultiplier = parseInt(prompt('Ici tu entres le nombre à multiplier : '));
    tableDeMultiplication = [`La table de multiplication de ${nombreAmultiplier} est:`];

    if(isNaN(nombreAmultiplier)) {
        alert(`Tu n'as pas entré de nombre, recommence !`);
        multiplication();
    } else {
        for(i = 0; i <= 10; i++) {
            tableDeMultiplication.push(`${nombreAmultiplier} x ${i} = ${nombreAmultiplier*i}`)
        }
        alert(tableDeMultiplication.join('\n'));
    }
    
}

// ==============================================================

function lePlusGrandNombre() {
    let currentNumber, PG, IPG, i, resultOfCurrentNumber;
    PG = 0;
    resultOfCurrentNumber = [];
    for(i = 1; i <= 5; i++) {
        currentNumber = parseInt(prompt('Entrez un nombre :'));
        if(isNaN(currentNumber)) {
            return alert('Impossible de continuer tu n\'as pas entré un nombre !');
        };
        if (i == 1 || currentNumber > PG) {
            PG = currentNumber;
            IPG = i;
        };
        resultOfCurrentNumber.push(currentNumber);
    };
    alert(`Tu as entré ${resultOfCurrentNumber.join(' - ')}\nParmis eux le plus grand nombre est ${PG}. \nIl se trouve à la position n°${IPG} !`);
}


// ==============================================================

function transaction(){
    let N1, N2, somdue, reste, NB5000A, NB2000A, NB1000A, NB500A, NB200A, NB100A, result, resteF;
    N1 = 1;
    somdue = 0;
    result = [];
    do{
        N1 = parseInt(prompt(`Entrez le prix en AR d\'un produit que vous avez acheté (entrez 0 s\'il y en a plus) - ${somdue} AR:`));
        if(isNaN(N1)) {
            alert(`Eh oh ! Ce n'est pas une valeur ça, essayez à nouveau !`);
            return transaction();
        } else {
            somdue += N1;
            result.push(N1);
        }
    } while (N1 != 0);

    alert(`La somme à payer pour votre achat est ${somdue} AR \nMaintenant entrez la somme de votre argent !`);

    N2 = parseInt(prompt(`Vous devez payer ${somdue} AR \nSomme de votre argent :`));
    reste = N2 - somdue;

    if(isNaN(N2)) {
        return alert(`Eh oh ! Ce n'est pas une valeur ça, tout est à refaire à présent !`);
    }

    if(reste < 0){
        return alert(`Votre argent est insuffisant pour l\'achat que vous tentez d\'effectuer \nDétail: \nSomme versée: ${N2} AR < Total à payer: ${somdue} AR`);
    };

    let vraiereste = reste;
    alert(`La somme que nous devons vous rendre est: ${reste} AR`);

    NB5000A = 0;
    while (reste >= 5000) {
        NB5000A++;
        reste -= 5000;
    }
    NB2000A = 0;
    while (reste >= 2000 && reste < 5000) {
        NB2000A++;
        reste -= 2000;
    }
    NB1000A = 0;
    while (reste >= 1000 && reste < 2000) {
        NB1000A++;
        reste -= 1000;
    }
    NB500A = 0;
    while (reste >= 500 && reste < 1000) {
        NB500A++;
        reste -= 500;
    }

    NB200A = 0;
    while(reste >= 200 && reste < 500) {
        NB200A++;
        reste -= 200;
    }

    NB100A = 0;
    if (reste >= 100 && reste < 200) {
        NB100A = 1;
        reste -= 100;
    }
    resteF = NB5000A*5000 + NB2000A*2000 + NB1000A*1000 + NB500A*500 + NB200A*200 + NB100A*100

    alert(`============= RESUME DE VOTRE ACHAT ============= \n${result.join(' AR\n')} \n\nTOTALE A PAYER : ${somdue} AR \nTOTALE VERSEE : ${N2} AR \nA RENDRE : ${vraiereste} AR \n\nDétail de la rendue : \n${NB5000A} billet(s) de 5000 AR \n${NB2000A} billet(s) de 2000 AR \n${NB1000A} billet(s) de 1000 AR \n${NB500A} billet(s) de 500 AR \n${NB200A} billet(s) de 200 AR \n${NB100A} billet de 100 AR`);
    alert('Merci de votre visite. A bientôt !')
}

// ==============================================================

let mois;
const saison1 = 'ÉTÉ';
const saison2 = 'PRINTEMPS';
const saison3 = 'HIVER';

function numbmonth() {
    mois = parseInt(prompt('Afin de connaître les différentes saisons du temps à Madagascar, \nEntrez un numéro de mois compris entre 1 et 12:'));


    while(mois < 1 || mois > 12) {
        alert(`${mois} ?? Ce numéro n'existe pas ! Recommencez la saisie`);
        return numbmonth();
    };

    while(isNaN(mois)) {
        alert(`J'ai dis un numéro de mois pas une lettre ou je ne sais pas quoi ! Recommence !`);
        return numbmonth();
    }

    switch (mois) {
        case 1:
            alert(`Nous sommes en Janvier c'est l'${saison1} !`);
            break;

        case 2:
            alert(`Nous sommes en Février c'est l'${saison1} !`);
            break;

        case 3:
            alert(`Nous sommes en Mars l'${saison1} prend fin et le ${saison2} commence !`);
            break;

        case 4:
            alert(`Nous sommes en Avril c'est le ${saison2} !`);
            break;

        case 5:
            alert(`Nous sommes en Mai le ${saison2} prend fin et l'${saison3} commence !`);
            break;

        case 6:
            alert(`Nous sommes en Juin c'est l'${saison3} !`);
            break;

        case 7:
            alert(`Nous sommes en Juillet c'est l'${saison3} !`);
            break;

        case 8:
            alert(`Nous sommes en Aoùt c'est l'${saison3} !`);
            break;

        case 9:
            alert(`Nous sommes en Septembre l'${saison3} prend fin et l'${saison1} commence !`);
            break;

        case 10:
            alert(`Nous sommes en Octobre c'est l'${saison1} !`);
            break;

        case 11:
            alert(`Nous sommes en Novembre c'est l'${saison1} !`);
            break;

        case 12:
            alert(`Nous sommes en Décembre c'est l'${saison1} !`);
            break;
    }

}

// ==============================================================

/*JEUX DU PIERRE PAPIER CISEAUX*/
const p = 'PIERRE';
const f = 'PAPIER';
const c = 'CISEAUX';

    function pierrePapierCiseaux(){
        j1 = prompt('Lance ton arme JOUEUR 1 (pierre ou papier ou ciseaux):');
        j2 = prompt('A ton tour maintenant JOUEUR 2 (pierre ou papier ou ciseaux):');
        j1.toUpperCase();
        j2.toUpperCase();

        if(j1.toUpperCase() === p && j2.toUpperCase() === f){
            alert(j1 + ' vs ' + j2 + '\nJOUEUR 2 a gagné ! \nBien sûr, le papier est plus forte que la pierre !');
        } else if(j1.toUpperCase() === p && j2.toUpperCase() === c){
            alert(j1 + ' vs ' + j2 + '\nJOUEUR 1 a gagné ! \nBien sûr, la pierre est plus forte qu\'une vulgaire paire de ciseaux !');
        } else if(j1.toUpperCase() === f && j2.toUpperCase() === p){
            alert(j1 + ' vs ' + j2 + '\nJOUEUR 1 a gagné ! \nBien sûr, le papier est plus fort que la pierre !');
        } else if(j1.toUpperCase() === f && j2.toUpperCase() === c){
            alert(j1 + ' vs ' + j2 + '\nVictoire du JOUEUR 2 ! \nPapier à mille morceaux !');
        } else if(j1.toUpperCase() === c && j2.toUpperCase() === p){
            alert(j1 + ' vs ' + j2 + '\nVictoire pour le JOUEUR 2 ! \nCiseaux en miettes !');
        } else if(j1.toUpperCase() === c && j2.toUpperCase() === f){
            alert(j1 + ' vs ' + j2 + '\nVictoire du JOUEUR 1 ! \nPapier à mille morceaux !');
        } else if(j1.toUpperCase() === p && j2.toUpperCase() === p || j1.toUpperCase() === f && j2.toUpperCase() === f || j1.toUpperCase() === c && j2.toUpperCase() === c){
            alert(j1 + ' vs ' + j2 + '\nForce égale ! Impossible de vous départagez, recommencez la partie !');
            enter();
        } else{
            alert(`${j1} VS ${j2} ?? Armes invalides ! Va jouer ailleurs !`);
        }
    }

    // ==============================================================

    function minuteToHour() {
        let minute = parseInt(prompt('Entrez la munute: '));
        if(isNaN(minute)) {
            return alert('Ce n\'est pas un nombre ça !');
        }
        let hour = 0;
        let day = 0;
        while(minute > 59) {
            minute -= 60;
            hour++;
        }
        while(hour > 23) {
            hour -= 24;
            day++;
        }
        day > 0 ? alert(`Cela fait : ${day}j ${hour}h ${minute}min`) : alert(`Cela fait : ${hour}h ${minute}min`);
    }

    // ==============================================================

    function duration() {
        let hdepart = parseInt(prompt('Entrez l\'heure de départ : '));
        let mdepart = parseInt(prompt('Entrez la minute de départ : '));
        if(isNaN(hdepart) || isNaN(mdepart)) {
            return alert('Vous avez erronez quelque part !');
        }
        alert(`Votre départ est à : ${hdepart}h ${mdepart}min`);
        let harrive = parseInt(prompt('Entrez l\'heure d\'arrivé : '));
        let marrive = parseInt(prompt('Entrez la minute d\'arrivé : '));
        if(isNaN(harrive) || isNaN(marrive)) {
            return alert('Vous avez erronez quelque part !');
        }
        alert(`Votre départ est à : ${harrive}h ${marrive}min`);
        let hduree;
        let mduree;

        if(hdepart > harrive) {
            hdepart -= 12;
            harrive += 12;
        };

        if(hdepart <= harrive && mdepart <= marrive) {
            hduree = harrive - hdepart;
            mduree = marrive - mdepart;
        } else if(mdepart > marrive) {
            marrive += 60;
            harrive -=1;
            mduree = marrive - mdepart;
            hduree = harrive - hdepart;
        }
        alert(`Départ : ${hdepart}h ${mdepart}min\nArrivée : ${harrive}h ${marrive}min\n\nLa durée est : ${hduree}h ${mduree}min`);
    }

//fonction de recherche

const searchInput = document.querySelector('.search-input');
const titles = document.querySelectorAll('h3');
const projects = document.querySelectorAll('.project');

searchInput.addEventListener('input', recherche);

function recherche() {

    for(let i = 0; i < projects.length; i++) {

        let filter = searchInput.value.toLowerCase();
        let alltitles = titles[i].innerText;

        if(alltitles.toLowerCase().indexOf(filter) > -1) {
            projects[i].style.display = 'flex';
        } else {
            projects[i].style.display = 'none';
        }


    }

}
