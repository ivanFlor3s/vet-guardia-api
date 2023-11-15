import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/config.js';

export class Veterinaria extends Model {}

Veterinaria.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    tel: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    neighborhood: {
        type: DataTypes.STRING(50),
        allowNull: true,
        
    },
}, {
    sequelize: sequelize,
    modelName: 'Veterinaria',
    timestamps: true,
});
