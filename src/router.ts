import { Router } from 'express';
const router = Router();

router.post('/auth/register', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    
    res.send('Hello World!');
})

router.get('/auth/login', (req, res) => {
    res.send('Hello World!');
})

router.get('/auth/logout', (req, res) => {
    res.send('Hello World!');
})

export default router;


