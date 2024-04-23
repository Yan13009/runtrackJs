function jsonValueKey(jsonString, key) {
    // Convertir la chaîne JSON en objet JavaScript
    const jsonObject = JSON.parse(jsonString);
    

    if (jsonObject.hasOwnProperty(key)) {
        // Retourner la valeur associée à la clé
        return jsonObject[key];
    } else {
        
        return null; // ou "Clé non trouvée" ou toute autre valeur par défaut
    }
}


const jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
const key = 'city';
const value = jsonValueKey(jsonString, key);
console.log("La valeur associée à la clé '" + key + "' est : " + value);
