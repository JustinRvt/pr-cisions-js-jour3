let elt = document.getElementById("main");
elt.innerText = "<div>chou, carotte</div><div style='visibility:hidden'> et des tomates</div>"
let elt2 = document.getElementById("main2");
elt2.textContent = "<div>chou, carotte</div><div style='visibility:hidden'> et des tomates</div>"
// modifier des classes
// grâce à la propriété classList on a accès à un panel de fonctions :

// add(<string>, [<string>, ...]) -- ajoute la ou les classes voulues
// remove(<string>, [<string>, ...]) -- retire la ou les classes voulues
// contains(<string>)  -- vérifie si la classe est contenue
// replace(<old>, <new>) -- remplace l'ancienne classe par la nouvelle

elt.classList.add("rouge");
elt.classList.remove("rouge");
elt.classList.add("rouge");
elt.classList.contains("rouge");
elt.classList.replace("rouge", "vert");


// Changer les styles d'un élément grâce à style

elt.style.color = "#fff" // change la couleur en blanc
elt.style.backgroundColor = "#000"  // change le bg en noir
elt.style.fontWeight = "bold" // mets le texte en gras



// Créer de nouveaux éléments

// La fonction document.createElement nous permet créer un nouvel elt
// du type spécifié que nous insérons dans le dom.

const newDiv = document.createElement("div");
