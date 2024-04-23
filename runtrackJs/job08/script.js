function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Test de la fonction
const premier1 = 5;
const premier2 = 7;
const nonPremier = 10;

console.log("La somme de " + premier1 + " et " + premier2 + " est : " + sommeNombresPremiers(premier1, premier2));
console.log("La somme de " + premier1 + " et " + nonPremier + " est : " + sommeNombresPremiers(premier1, nonPremier));
