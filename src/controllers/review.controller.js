import { request, response } from "express";
import { ApiResponse } from "../core/response.js";
import { Review } from "../models/review.js";

export const create = async (req = request, res = response) => {
    const { idVeterinaria } = req.params;
    console.log('REQUEST USUARIO',req.usuario)
    const {score, comment} = req.body
    try {
        const review = await Review.create({score, comment, VeterinariumId: idVeterinaria, UserId: req.usuario.id})
        res.status(201).json(new ApiResponse(review, 'Se creo la review'))
    } catch (error) {
        console.log(error)
        res.status(500).json(new ApiResponse(null, error.message))
    }
}