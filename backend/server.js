require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouts = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouts);

app.listen(3000, () => {
    console.log('Servidor rodando')
})
