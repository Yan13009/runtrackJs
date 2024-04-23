document.addEventListener("DOMContentLoaded", function() {
    const updateButton = document.getElementById('updateButton');
    const userTableBody = document.getElementById('userTableBody');

    updateButton.addEventListener('click', function() {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(data => {
                updateUserTable(data);
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });

    function updateUserTable(users) {
        userTableBody.innerHTML = '';

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            userTableBody.appendChild(tr);
        });
    }

    // Déclencher le clic sur le bouton "update" au chargement du contenu DOM
    document.addEventListener('DOMContentLoaded', function() {
        updateButton.click();
    });
});
