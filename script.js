document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            const sectionId = this.getAttribute("data-section");

            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === sectionId) {
                    section.classList.add("active");
                }
            });
        });
    });

    document.querySelector(".sidebar-button").addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });
});
