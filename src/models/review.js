import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config-db.js';
import { User } from './user.js';
import { Veterinaria } from './veterinaria.js';

export class Review extends Model {

}

Review.init(
    {     
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 0,
                max: 5,
            },
        },
        comment: {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Review',
        timestamps: true,
    }
);


