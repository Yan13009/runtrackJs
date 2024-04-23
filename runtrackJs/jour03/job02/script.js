// Fonction pour mélanger les images
function melangerImages() {
    var images = $("#arc-en-ciel img");
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i].src;
        images[i].src = images[j].src;
        images[j].src = temp;
    }
}

$(document).ready(function() {
    // Gérer le clic sur le bouton pour mélanger les images
    $("#melanger").click(function() {
        melangerImages();
    });

    // Vérifier l'ordre des images lors du clic sur une image
    $("#arc-en-ciel img").click(function() {
        if (verifierOrdre()) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    });
});
