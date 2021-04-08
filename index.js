const express = require('express');
require('dotenv').config();

// Importar Rutas
const authRoutes = require('./routes/auth.routes');

// Crear Servidor Express
const app = express();

// Public
app.use(express.static('public'))

// Rutas
app.use('/api/auth', authRoutes);

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log('Server ON', process.env.PORT);
});