const router = require('express').Router();
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicacion,
    obtenerPublicaciones,
} = require('../controllers/blog.controllers');



// Ruta para obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones);

// Ruta para obtener una publicación
router.get('/publicacion/:id', obtenerPublicacion);

// Ruta para crear nueva publicación
router.post('/publicacion/', crearPublicacion);

// Ruta para actualizar publicación
router.put('/publicacion/:id', actualizarPublicacion);

// Ruta para eliminar publicación
router.delete('/publicacion/:id', eliminarPublicacion);



module.exports = router;