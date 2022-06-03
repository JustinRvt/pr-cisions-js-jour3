// différentes personnes
let personne1 = "solange";
let personne2 = "paul";
let personne3 = "athanagore";

// on met la 1ère lettre en majuscule, on salue la personne et on donne le 
// nombre de lettres dans son prénom
personne1 = personne1[0].toUpperCase() + personne1.substring(1);
const longueurPrenom1 = personne1.length;
console.log (` Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`)
// on met la 1ère lettre en majuscule, on salue la personne et on donne le 
// nombre de lettres dans son prénom
personne2 = personne2[1].toUpperCase() + personne2.substring(1);
const longueurPrenom2 = personne2.length;
console.log (` Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`)
// on met la 1ère lettre en majuscule, on salue la personne et on donne le 
// nombre de lettres dans son prénom
personne3 = personne3[2].toUpperCase() + personne3.substring(1);
const longueurPrenom3 = personne3.length;
console.log (` Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`)