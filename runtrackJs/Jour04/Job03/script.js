document.addEventListener("DOMContentLoaded", function() {
    const filterForm = document.getElementById('filterForm');
    const filterButton = document.getElementById('filterButton');
    const pokemonListContainer = document.getElementById('pokemonList');

    filterButton.addEventListener('click', function() {
        const id = filterForm.id.value;
        const nom = filterForm.nom.value;
        const type = filterForm.type.value;

        fetch('pokemon.json')
            .then(response => response.json())
            .then(data => {
                const filteredPokemon = data.filter(pokemon => {
                    return (id === '' || pokemon.id.includes(id)) &&
                           (nom === '' || pokemon.nom.toLowerCase().includes(nom.toLowerCase())) &&
                           (type === '' || pokemon.type.includes(type));
                });

                displayPokemon(filteredPokemon);
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });

    function displayPokemon(pokemonArray) {
        pokemonListContainer.innerHTML = '';

        if (pokemonArray.length === 0) {
            pokemonListContainer.innerHTML = '<p>Aucun Pokémon ne correspond aux critères de filtrage.</p>';
            return;
        }

        const ul = document.createElement('ul');
        pokemonArray.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = `${pokemon.id} - ${pokemon.nom} (${pokemon.type.join(', ')})`;
            ul.appendChild(li);
        });
        pokemonListContainer.appendChild(ul);
    }
});
