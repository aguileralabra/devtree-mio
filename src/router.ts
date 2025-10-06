import { Router } from 'express';
import User from './models/User';
const router = Router();

router.post('/auth/register', async (req, res) => {
    try{
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
    
        await User.create({
            name,
            email,
            password
        })
    
        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: {
                name,
                email,
                password
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error al crear el usuario',
            error
        });
    }
})

router.get('/auth/login', (req, res) => {
    res.status(200).json({
        message: 'Login exitoso'
    });
})

router.get('/auth/logout', (req, res) => {
    res.send('Hello World!');
})

export default router;


