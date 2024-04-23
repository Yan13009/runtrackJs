// Récupérer le bouton et le compteur
const button = document.getElementById("button");
const compteur = document.getElementById("compteur");

// Initialiser le compteur de clics
let nombreClics = 0;

// Ajouter un écouteur d'événement sur le bouton pour détecter les clics
button.addEventListener("click", function() {
    // Incrémenter le nombre de clics
    nombreClics++;
    // Mettre à jour le contenu de la balise <p> avec le nouveau nombre de clics
    compteur.textContent = nombreClics;
});
