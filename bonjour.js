// Les méthodes statiques

class Bienvenue {
    // pas besoin de constructeur ici
    static direBonjour() {
        console.log("Bonjour !");
    }

    static direBonjourA(prenom) {
        console.log("Bonjour " + prenom + " !")
    }
}

Bienvenue.direBonjour();
Bienvenue.direBonjourA("Céline");