function showhide() {
    const article = document.getElementById("citation");
    
    // Vérifier si l'article est visible ou non
    if (article.style.display === "block") {
        // Si visible, le masquer
        article.style.display = "none";
    } else {
        // Sinon, le rendre visible avec le texte demandé
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        article.style.display = "block";
    }
}

