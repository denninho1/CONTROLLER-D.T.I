const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "controller_user",
    password: "C0ntroll3rL@s3R",
    database: "controller_dti"
});

async function criar() {
    const senha = await bcrypt.hash("123456", 10);

    db.query(
        "INSERT INTO usuarios (usuario, pass, role) VALUES (?, ?, ?)",
        ["laser", senha, "admin"],
        () => {
            console.log("Usuário criado");
            process.exit();
        }
    );
}

criar();