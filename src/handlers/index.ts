import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

const createAccount = async (req: Request, res: Response) => {
    try{
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        //Buscamos coincidencia
        const userExist = await User.findOne({email});

        if(userExist){
            const error = new Error('El usuario ya existe');
            error.name = 'UserExist';
            
            return res.status(409).json({
                message: 'El usuario ya existe',
                error
            })
        }

        password = await hashPassword(password);
        
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
}

export default createAccount;