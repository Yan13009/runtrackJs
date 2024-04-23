// Tableau pour stocker les positions des carreaux
var positions = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 0 représente la case vide

// Fonction pour mélanger les positions des carreaux
function melangerCarreaux() {
    for (var i = positions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = positions[i];
        positions[i] = positions[j];
        positions[j] = temp;
    }
    // Appliquer les nouvelles positions aux carreaux
    $(".carreau").each(function(index) {
        $(this).text(positions[index]);
    });
}

// Fonction pour vérifier si les carreaux sont dans l'ordre correct
function verifierVictoire() {
    for (var i = 0; i < positions.length - 1; i++) {
        if (positions[i] !== i + 1) {
            return false;
        }
    }
    return true;
}

$(document).ready(function() {
    // Mélanger les carreaux au chargement de la page
    melangerCarreaux();

    // Gérer le clic sur un carreau
    $(".carreau").click(function() {
        var id = parseInt($(this).attr("id").substring(7)); // Récupérer l'ID du carreau
        var index = positions.indexOf(id); // Trouver l'index du carreau dans le tableau positions

        // Vérifier si le carreau peut se déplacer dans une case vide adjacente
        if (index % 3 !== 0 && positions[index - 1] === 0) { // Case à gauche
            positions[index - 1] = id;
            positions[index] = 0;
        } else if ((index + 1) % 3 !== 0 && positions[index + 1] === 0) { // Case à droite
            positions[index + 1] = id;
            positions[index] = 0;
        } else if (index >= 3 && positions[index - 3] === 0) { // Case au-dessus
            positions[index - 3] = id;
            positions[index] = 0;
        } else if (index < 6 && positions[index + 3] === 0) { // Case en dessous
            positions[index + 3] = id;
            positions[index] = 0;
        }

        // Actualiser l'affichage des carreaux
        $(".carreau").each(function(index) {
            $(this).text(positions[index]);
        });

        // Vérifier la victoire
        if (verifierVictoire()) {
            $("#message").text("Vous avez gagné").css("color", "green");
            $(".carreau").off("click"); // Désactiver les clics sur les carreaux
            $("#recommencer").show(); // Afficher le bouton "Recommencer"
        }
    });

    // Gérer le clic sur le bouton "Recommencer"
    $("#recommencer").click(function() {
        positions = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // Réinitialiser les positions
        melangerCarreaux(); // Mélanger les carreaux
        $("#message").text(""); // Effacer le message de victoire
        $(this).hide(); // Cacher le bouton "Recommencer"
    });
});
