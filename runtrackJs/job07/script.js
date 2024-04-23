function fizzbuzz() {
    const fizzbuzzList = document.getElementById("fizzbuzzList");

    for (let i = 1; i <= 151; i++) {
        let output = "";

        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (output === "") {
            output = i;
        }

        const liElement = document.createElement("li");
        liElement.textContent = output;
        fizzbuzzList.appendChild(liElement);
    }
}

// Appel de la fonction
fizzbuzz();
