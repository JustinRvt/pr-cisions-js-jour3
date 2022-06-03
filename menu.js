// appliquer la classe active sur mes liens
// on récupère d'abord l'URL de la page
const positionActuelle = location.href;
// on sélectionne tous les élemnts de type anchor <a>
const liensMenu = document.querySelectorAll("a");
// on récupère le nombre d'éléments dans notre menu
const longueurMenu = liensMenu.length;
// on crée une boucle pour vérifier que le lien cliqué correspond à la bonne URL
for (let lien = 0; lien < longueurMenu; lien++ ) {
    // si c'est le bon lien
    if (liensMenu[lien].href === positionActuelle){
        // alors on lui passe la classe active
        liensMenu[lien].classList.add("active") 
    }
}
