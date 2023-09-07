const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/home', (req, res) => {
    res.send("Bienvenid@ al servidor")
})

// Recibir datos por body
app.post('/register', (req, res) => {
    // Cuerpo de la petición (body)
    const { username, password } = req.body;
    res.send("Registro exitoso")
})

// Recibir datos por parámetros (variables en url)
app.post('/usuario/:userId', (req, res) => {
    const { userId } = req.params

    const { rol } = req.query

    res.send({ userId, rol })
})

// Recibir datos por parámetros de consulta
app.get('/consulta', (req, res) => {
    const { q } = req.query

    // http:localhost:3000/?q=facebook
    res.send(req.query)
})


app.use((req, res, next) => {
    res.status(404).send("Error 404: Ruta no encontrada")
})


app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))