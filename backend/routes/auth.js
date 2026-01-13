const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const auth = require("../middleware/auth");

const router = express.Router();
const SECRET = "CONTROLLER_DTI_2025";

router.post("/login", (req, res) => {
    const { usuario, pass } = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE usuario = ?",
        [usuario],
        async (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0)
                return res.status(401).json({ error: "Usuário não existe" });

            const user = result[0];

            const valid = await bcrypt.compare(pass, user.pass);

            if (!valid)
                return res.status(401).json({ error: "Senha incorreta" });

            const token = jwt.sign(
                { id: user.id, role: user.role },
                SECRET,
                { expiresIn: "2h" }
            );

            res.json({ token });
        }
    );
});

// 🔐 Rotas protegidas
router.get("/admin-area", auth("admin"), (req, res) => {
    res.json({ message: "Bem-vindo, admin" });
});

router.get("/dashboard", auth(), (req, res) => {
    res.json({ user: req.user });
});

//LISTAR USUÁRIOS (só admin)
router.get('/users', auth('admin'), (req, res) => {
    db.query('SELECT id, usuario, role, status FROM usuarios', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result)
    })
})

router.post('/users', auth('admin'), async (req, res) => {
    const {usuario, pass, role} = req.body;

    const senhaHash = await bcrypt.hash(pass, 10);

    db.query(
        'INSERTO INTO usuarios (usuario, pass, role) VALUES (?, ?, ?)',
        [usuario, senhaHash, role],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Usuario criado'})      
        }
    )
});

// BLOQUEAR / ATIVAR
router.put('/users/:id/status', auth('admin'), (req, res) => {
    const {status} = req.body;

    db.query(
        'UPDATE usuarios SET status =? WHERE id=?',
        [status, req.params.id],
        () => res.json({ message: 'Status atualizado'})
    )
});

// MUDAR CARGO
router.put('/users/:id/role', auth('admin'), (req, res) => {
    const {role} = req.body;

    db.query(
        'UPDATE usuarios SET role=? WHERE id=?',
        [role, req.params.id],
        () => res.json({ message: 'Cargo Atualizado'})
    );
});

router.delete('/users/:id', auth('admin'), (req, res) => {
    db.query(
        'DELETE FROM usuarios WHERE id=?',
        [req.params.id],
        () => res.json({ message: 'Usuario removido'})
    )
})





module.exports = router;