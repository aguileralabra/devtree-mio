import { Router } from 'express';
import createAccount from './handlers';
const router = Router();

router.post('/auth/register', createAccount);

router.get('/auth/login', (req, res) => {
    res.status(200).json({
        message: 'Login exitoso'
    });
})

router.get('/auth/logout', (req, res) => {
    res.send('Hello World!');
})

export default router;


