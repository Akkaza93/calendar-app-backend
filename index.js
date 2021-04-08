const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Importar Rutas
const authRoutes = require('./routes/auth.routes');

// Crear Servidor Express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Public
app.use(express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', authRoutes);

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log('Server ON', process.env.PORT);
});