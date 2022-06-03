// rajouter des méthodes d'instances aux classes
class CompteEnBanque {
    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    }
    afficherLeSolde() {
        console.log("Solde de " + this.solde + "€");
    }

    depot(montant) {
        console.log("Dépot de " + montant + "€");
        this.solde += montant;
        this.afficherLeSolde();
    }
    retrait(montant) {
        if (montant > this.solde) {
            alert("Retrait refusé, fonds insuffisants");
        }
        else {
            console.log("Retrait de " + montant + "€");
            this.solde -= montant;
            this.afficherLeSolde();
        }
    }
}

const nouveauCompte = new CompteEnBanque("Jean-Michel Aléatoire", 500);

nouveauCompte.afficherLeSolde();

nouveauCompte.depot(200);

nouveauCompte.retrait(1500);


nouveauCompte.retrait(600);