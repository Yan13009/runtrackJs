// Récupérer le textarea
const keylogger = document.getElementById("keylogger");

// Ajouter un écouteur d'événement sur l'événement "keypress" du document
document.addEventListener("keypress", function(event) {
    const keyPressed = event.key;

    if (/[a-z]/i.test(keyPressed)) {
        if (document.activeElement === keylogger) {
            // Si le focus est dans le textarea, ajouter la lettre deux fois
            keylogger.value += keyPressed + keyPressed;
        } else {
            // Sinon, ajouter la lettre une fois
            keylogger.value += keyPressed;
        }
    }
});
