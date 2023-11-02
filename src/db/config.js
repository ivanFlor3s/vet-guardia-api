import { Sequelize } from 'sequelize';




export const sequelize = new Sequelize('veterinarias', null, null, { 
    dialect: 'mssql',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialectOptions: {
        connectionString: 'Driver={SQL Server Native Client 10.0};Server=localhost\\SQLEXPRESS;Database=veterinarias;Trusted_Connection=yes;'
    },
});

