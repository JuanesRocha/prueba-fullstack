const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
    user: 'juanes', // Reemplaza con tu usuario real
    host: 'localhost',
    database: 'base_de_datos_prueba', // Reemplaza con tu base de datos real
    password: 'tamara', // Reemplaza con tu contraseña real
    port: 5432,
});

// Ruta para obtener datos de la tabla usuarios
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en la consulta');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});