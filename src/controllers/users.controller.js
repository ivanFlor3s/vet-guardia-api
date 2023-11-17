import { response, request } from 'express';
import bcrypt  from 'bcryptjs';
import { User } from '../models/user.js';
import { ApiResponse } from '../core/response.js';

export const create = async (req = request, res = response) => {
    let { name, lastName, email, password } = req.body;
    console.log(name)
    //Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);

    try {
        //CREAR USUARIO
        const user = await User.create({ name, lastName, email, password, salt: '' })
        res.status(201).send(new ApiResponse(user, 'Se creo el usuario'));
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));        
    }
    
}

export const getUserId = async (req = request, res = response) => {
    res.json({
        msg: 'get user id - controller',
    });
};

export const createUser = async (req = request, res = response) => {
    //CREAR USUARIO
};