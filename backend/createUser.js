const bcrypt = require('bcrypt');
const db - require('./db');

async function create() {
    const password = await bcrypt.hash('123456', 10)

    db.query(
        'INSER INTO usuarios (usuario, pass) VALUES (?, ?)'
        ['laser', password]
    );

    console.log('Usuário criado');
}

create();