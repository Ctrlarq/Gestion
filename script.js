
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#sidebar .nav-link").forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            document.querySelectorAll("#sidebar .nav-link").forEach(function(navLink) {
                navLink.classList.remove("active");
            });
            this.classList.add("active");
            loadSection(this.textContent.trim());
        });
    });

    function loadSection(section) {
        const content = document.getElementById("content");
        content.innerHTML = `<h2>${section}</h2><p>Contenido de ${section}</p>`;
    }
});
