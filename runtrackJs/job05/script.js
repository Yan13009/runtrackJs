function afficherJoursSemaines() {
    const joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const joursSemaineList = document.getElementById("joursSemaineList");

    joursSemaines.forEach(jour => {
        const liElement = document.createElement("li");
        liElement.textContent = jour;
        joursSemaineList.appendChild(liElement);
    });
}

// Appel de la fonction
afficherJoursSemaines();
