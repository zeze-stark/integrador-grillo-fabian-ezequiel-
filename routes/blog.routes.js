
// const { Router } = require('express');
// const router = Router();
const router = require('express').Router();

const posts = [
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        img_url: "https://www.bbva.com/wp-content/uploads/2023/05/salud-financiera-BBVA-viajes-sorpresa-barato.jpg"
    },
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        img_url: "https://wp.growproexperience.com/wp-content/uploads/2022/06/Que-llevar-a-un-viaje.jpg"
    },
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        img_url: "https://images.hola.com/imagenes/viajes/20230712235648/como-planificar-viajes-con-inteligencia-artificial/1-280-487/planificar-viajes-ia-t.jpg"
    },
]

const listaCanciones = [
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        url_youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iTxOKsyZ0Lw?si=Q0hPHgNJqZlMGhgm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        url_youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7f2wg1pqQDs?si=YU0_R5UyAl5YYaNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        id: "1",
        titulo: "Primer Post",
        detalle: "Primer Detalle",
        fecha_creacion: new Date(),
        url_youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VdphvuyaV_I?si=JP1_7UYD61ccG7AI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
]


router.get('/', (req, res) => {
    res.render("index", { posts } )
})

router.get('/viajes', (req, res) => {
    res.render("index", { posts } )
})

router.get('/canciones', (req, res) => {
    res.render("canciones")
})

router.get('/obtener-canciones', (req, res) => {
    res.send(listaCanciones)
})







module.exports = router;