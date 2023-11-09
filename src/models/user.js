import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/config.js';
// import bcrypt from 'bcrypt';

export class User extends Model {
    // validatePassword = async (myPlaintextPassword) => {
    //   const validate = await bcrypt.compare(myPlaintextPassword, this.password);
    //   return validate;
    // };
    //   validatePassword = async (myPlaintextPassword) => {
    //     const validate = await bcrypt.hash(myPlaintextPassword, this.salt);
    //     return validate===this.password
    //   };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false, 
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'Tiene que tener formato de email',
                },
                notEmpty: {
                    msg: 'no puede estar vacio',
                },
            },
        },
        salt: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: sequelize,
        modelName: 'User',
        timestamps: true,
    }
);

// User.beforeCreate(async (user) => {
//     const salt = await bcrypt.genSalt();
//     user.salt = salt;

//     const passwordHash = await bcrypt.hash(user.password, salt);
//     // const passwordHash= await bcrypt.hash(user.password, 10)
//     user.password = passwordHash;
// });

