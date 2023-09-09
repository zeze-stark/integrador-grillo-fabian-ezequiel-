
const configurarIframe = (url) => {
    let iframe = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7f2wg1pqQDs?si=YU0_R5UyAl5YYaNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
    return iframe;
}

// Referencia al elemento html donde se cargarán las canciones
const divCanciones = document.querySelector("#lista-canciones")

// Eventos
document.addEventListener('DOMContentLoaded', async () => {
    // Pedir los datos al servidor
    const response = await fetch('/obtener-canciones')
    const canciones = await response.json()
    console.log(canciones)


    let registros = ""
    canciones.forEach((cancion) => {

        registros += `
        <section class="d-flex gap-2">
        ${cancion.url_youtube}
  
        <div class="textos d-flex flex-column justify-content-between">
            <h5>
                ${cancion.titulo}

            </h5>
            <p>
                ${cancion.detalle}
            </p>
            <p>
                ${cancion.fecha_creacion}
            </p>
        </div>
    </section>

        `
    });


    divCanciones.innerHTML = registros;
})