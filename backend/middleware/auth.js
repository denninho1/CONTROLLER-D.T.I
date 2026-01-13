const jwt = require('jsonwebtoken');
const SECRET = 'CONTROLLER_DTI_2025';

function auth(requiredRole) {
    return (req, res, next) => {
        const header = req.headers.authorization;
        if (!header) return res.status(401).json({error: 'Token ausente'});

        const token = header.split(' ')[1];

        try {
            const decoded = jwt.verify(token, SECRET);

            if (requiredRole && decoded.role !== requiredRole) {
                return res.status(403).json({error: 'Acesso negado'});
            }

            req.user = decoded;
            next();
        } catch {
            return res.status(401).json({error: 'Token inválido'});
        }

    }
}

module.exports = auth;