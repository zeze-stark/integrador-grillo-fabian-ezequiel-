const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

require('ejs');
require('dotenv').config();


const { sequelize } = require('./database');

sequelize.authenticate()
    .then(() => console.log('Conexión a BD Exitosa'))
    .catch(err => console.log('Error al conectar BD: ', err))

const port = process.env.PORT || 3000;
const app = express()

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Routes
const blogRoutes = require('./routes/blog.routes');
app.use(blogRoutes)

app.use((req, res, next) => {
    res.status(404).send("Error 404: Ruta no encontrada")
})


app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))