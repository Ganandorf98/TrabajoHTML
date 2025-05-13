function cargarRestaurantes() {
    fetch('/api/')
        .then(response => response.json())
        .then(data => {
            const listaRestaurantes = document.getElementById("listaRestaurantes");
            listaRestaurantes.innerHTML = '';

            data.forEach(restaurante => {
                const li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerHTML = `
                    <h3>${restaurante.nombre}</h3>
                    <p>Dirección: ${restaurante.dirección}</p>
                    <p>Tipo: ${restaurante.tipo}</p>
                    <h4>Platos:</h4>
                    <ul>
                        ${restaurante.platoList.map(plato => `
                            <li>
                                <h5>${plato.nombre} - $${plato.precio}</h5>
                                <img src="${plato.imagenUrl}" alt="${plato.nombre}" class="img-thumbnail" style="width: 200px;">
                            </li>
                        `).join('')}
                    </ul>
                `;
                listaRestaurantes.appendChild(li);
            });
        });
}
