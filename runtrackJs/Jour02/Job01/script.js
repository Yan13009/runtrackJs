function citation() {
    const citationText = document.getElementById("citation").textContent;
    console.log(citationText);
}

const button = document.getElementById("button");
button.addEventListener("click", citation);
