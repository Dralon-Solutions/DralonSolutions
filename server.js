const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save-form', (req, res) => {
    const { name, email, message } = req.body;
    const formData = `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}\n\n`;
/*
    fs.appendFile('formulario.txt', formData, (err) => {
        if (err) {
            return res.status(500).send('Error al guardar los datos');
        }
        res.send('Datos guardados correctamente');
    });*/
});
