$(document).ready(function() {
    // Sélectionner la balise <button> et ajouter un gestionnaire d'événements pour afficher le texte
    $("#afficher").click(function() {
        $("#texte").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
    });

    // Sélectionner l'autre bouton et ajouter un gestionnaire d'événements pour cacher l'élément HTML
    $("#cacher").click(function() {
        $("#texte").hide();
    });
});
