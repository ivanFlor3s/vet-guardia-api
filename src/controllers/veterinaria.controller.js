import { response, request } from 'express';
import { Veterinaria } from '../models/veterinaria.js';
import { ApiResponse } from '../core/response.js';

export const crearVeterinaria =  async (req = request, res = response) => {
    const {nombreVeterinaria, telefono, email, direccion } = req.body;
    try {
        await Veterinaria.create({ name: nombreVeterinaria, tel: telefono, address: direccion, neighborhood: null })
        res.status(201).send({ success: true, message: 'Se creo la veterinaria' });
    } catch (error) {
        console.log(error)
        res.status(500).send(new ApiResponse(null, error.message));
    }
};
