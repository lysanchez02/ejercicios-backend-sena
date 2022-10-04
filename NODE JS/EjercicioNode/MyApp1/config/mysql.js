const {Sequelize} = require("sequelize");
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, 'root' , password, {
    host: host,
    dialect: "mysql",
});

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado Correctamente a la Base de Datos");
    } catch(e){
        console.log("MySQL ERROR DE CONEXION",e)
    }
};

module.exports = {sequelize, dbConnectMySQL};
