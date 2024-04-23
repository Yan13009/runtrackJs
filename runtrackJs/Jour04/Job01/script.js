document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier.');
            }
            return response.text();
        })
        .then(data => {
            const resultDiv = document.getElementById('result');
            const paragraph = document.createElement('p');
            paragraph.textContent = data;
            resultDiv.appendChild(paragraph);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
});
