const bcrypt = require('bcrypt');
const db = require('./db');

async function create() {
    const senha = await bcrypt.hash('123456', 10)

    db.query(
        "INSERT INTO usuarios (usuario, pass, role) VALUES (?, ?, ?)",
        ["reginaldo", senha, "admin"],
        () => {
            console.log("Usuário criado");
            process.exit();
        }
    );

}

create();