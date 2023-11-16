import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config-db.js';

export class Veterinaria extends Model {}

Veterinaria.init(
    {
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
                len: { args: [3, 50], msg: 'El nombre tiene que tener entre 3 y 50 caracteres' },
            },
        },
        tel: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
                isNumeric: { args: true, msg: 'El telefono tiene que ser numerico' },
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
    },
    {
        sequelize: sequelize,
        modelName: 'Veterinaria',
        timestamps: true,
    }
);
