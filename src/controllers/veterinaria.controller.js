import { response, request } from 'express';
import { Veterinaria } from '../models/veterinaria.js';

export const crearVeterinaria =  async (req = request, res = response) => {
    const {nombreVeterinaria, telefono, email, direccion } = req.body;
    
    try {
        console.log('Este es el nombre',nombreVeterinaria)
        console.log('Este es el telefono', telefono)
        await Veterinaria.create({ name: nombreVeterinaria, tel: telefono, address: direccion, neighborhood: null })
        res.status(200).send({ success: true, message: 'Se creo la veterinaria' });

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: ':(' });
    }
    
};
