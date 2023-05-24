document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");

    // Cargar el archivo JSON de prácticas
    fetch("Menu.json")
        .then(response => response.json())
        .then(data => {
            // Generar los elementos de menú dinámicamente
            data.practicas.forEach(practica => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = practica.archivo;
                a.textContent = practica.nombre;
                li.appendChild(a);
                menu.appendChild(li);
            });
        });
});
