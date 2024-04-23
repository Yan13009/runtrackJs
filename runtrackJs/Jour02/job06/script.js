window.addEventListener("scroll", function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = `rgb(${scrolled * 2.55}, ${scrolled * 2.55}, ${scrolled * 2.55})`;
});

// Ajout de l'effet Konami
const easter_egg = new Konami(() => {
    // Code à exécuter lorsque le code Konami est entré
    document.body.classList.add('plateforme-style');
});
