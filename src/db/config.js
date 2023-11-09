import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('veterinaria', 'postgres', 'awg1947', {
    dialect: process.env.DIALECT ?? 'postgres',
    host: process.env.HOST,
    port: process.env.PORT,
    pool: {
        max: process.env.POOL_MAX,
        min: process.env.POOL_MIN,
        acquire: process.env.POOL_ACQUIRE,
        idle: process.env.POOL_IDLE,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });
