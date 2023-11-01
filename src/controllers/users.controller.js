import { response, request } from "express";

export const getUsers = async (req= request, res=response) => {
    res.json({
        msg: "get API - controller"
    });
  };

  export const getUserId = async (req= request, res=response) => {
    res.json({
        msg: "get user id - controller"
    });
  }