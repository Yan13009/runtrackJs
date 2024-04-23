function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("Erreur : L'ordre doit être 'asc' ou 'desc'.");
        return numbers;
    }
}

function afficherTableau(idElement, tableau) {
    const ulElement = document.getElementById(idElement);
    ulElement.innerHTML = ""; // Effacer le contenu précédent

    tableau.forEach(element => {
        const liElement = document.createElement("li");
        liElement.textContent = element;
        ulElement.appendChild(liElement);
    });
}

// Test de la fonction
const numbersAsc = [3, 1, 4, 1, 5, 9, 2, 6];
const numbersDesc = [3, 1, 4, 1, 5, 9, 2, 6];

afficherTableau("original", numbersAsc);

const numbersAscSorted = tri([...numbersAsc], "asc");
const numbersDescSorted = tri([...numbersDesc], "desc");

afficherTableau("triAscendant", numbersAscSorted);
afficherTableau("triDescendant", numbersDescSorted);
