// ce qu'il ne faut pas faire !

if (Utilisateur1.online) {
    if(Utilisateur1.typeDeCompte === "standard"){
        console.log("Bonjour " + Utilisateur1.prenom);
    }
    else {
        console.log("Bienvenue à notre utilisateur premium " + Utilisateur1.prenom)
    }
}

if (Utilisateur2.online) {
    if(Utilisateur2.typeDeCompte === "standard"){
        console.log("Bonjour " + Utilisateur2.prenom);
    }
    else {
        console.log("Bienvenue à notre utilisateur premium " + Utilisateur2.prenom)
    }
}

if (Utilisateur3.online) {
    if(Utilisateur3.typeDeCompte === "standard"){
        console.log("Bonjour " + Utilisateur3.prenom);
    }
    else {
        console.log("Bienvenue à notre utilisateur premium " + Utilisateur3.prenom)
    }
}


// Il est plus pertinent de de factoriser ce code dans une fonction.
function envoiMessageBienvenue(utilisateur) {
    // en passant en paramètre une variable utilisateur
    // on peut récupérer n'importe quel profil

    // si l'user est en ligne
    if (utilisateur.online) {
        // et si son type de compte est normal
        if (utilisateur.typeDeCompte === "normal") {
            // alors on renvoie un message lambda
            console.log("Bonjour " + utilisateur.prenom);
        }
        // sinon, il s'agit d'un utilisateur premium
        // On en profite pour le flatter un peu
        else {
            console.log("Bienvenue à notre utilisateur premium " + utilisateur.prenom)
        }
    }
}

envoiMessageBienvenue(Utilisateur1);


// Ecrire des noms clairs pour les variables et fonctions 
// Mauvais exemple :

function cl(s) {
    const m = s.split('');
    let l = 0;
    for (let mt of m) {
        mt.replace("thisString");
        l += m.length;
    }
    return 1;
}

// en réécrivant correctement
function compterLesLettres(stringDeTest){
    const motsDansLeTableau = stringDeTest.split('');
    let nombreDeLettresTotales = 0;
    for (let mot of motsDansLeTableau){
        mot.replace("thisString");
        nombreDeLettresTotales += mot.length
    }

    return nombreDeLettresTotales;
}