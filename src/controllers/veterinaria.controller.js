import { response, request } from 'express';
import { Veterinaria } from '../models/veterinaria.js';
import { ApiResponse } from '../core/response.js';
import { Op } from 'sequelize';
import { Review } from '../models/review.js';

export const create = async (req = request, res = response) => {
    const { nombreVeterinaria, telefono, email, direccion } = req.body;
    try {
        await Veterinaria.create({ name: nombreVeterinaria, tel: telefono, address: direccion, neighborhood: null });
        res.status(201).send({ success: true, message: 'Se creo la veterinaria' });
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));
    }
};

export const getAll = async (req = request, res = response) => {
    const { name: filter } = req.query;
    try {
        const query = filter ? Veterinaria.findAll({ where: { name: { [Op.iLike]: `%${filter}%` } } }) : Veterinaria.findAll();
        const veterinarias = await query;
        res.status(200).send(new ApiResponse(veterinarias, veterinarias.length == 0 ? 'No hubo veterinarias' : ' Se obtuvieron las veterinarias'));
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));
    }
};

export const remove = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const veterinaria = await Veterinaria.findByPk(id);
        if (!veterinaria) {
            res.status(404).send(new ApiResponse(null, 'No se encontro la veterinaria'));
        } else {
            await veterinaria.destroy();
            res.status(200).send(new ApiResponse(veterinaria, 'Se elimino la veterinaria'));
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));
    }
};


export const update = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombreVeterinaria, telefono, email, direccion } = req.body;
    try {
        const veterinaria = await Veterinaria.findByPk(id);
        if (!veterinaria) {
            res.status(404).send(new ApiResponse(null, 'No se encontro la veterinaria'));
        } else {
            veterinaria.name = nombreVeterinaria;
            veterinaria.tel = telefono;
            veterinaria.address = direccion;
            await veterinaria.save();
            res.status(200).send(new ApiResponse(veterinaria, 'Se actualizo la veterinaria'));
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));
    }
}

export const getById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const veterinaria = await Veterinaria.findByPk(id);
        if (!veterinaria) {
            res.status(404).send(new ApiResponse(null, 'No se encontro la veterinaria'));
        } else {
            const reviews = await Review.findAll({where: {VeterinariumId: id}})
            res.status(200).send(new ApiResponse({'veterinaria': {...veterinaria.dataValues, reviews}, }, 'Se obtuvo la veterinaria'));
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(null, error.message));
    }
}