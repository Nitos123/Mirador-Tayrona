//en este archivo se guardaran todas las variables de configuracion
const config = {
    appConfig : {
        port : process.env.APP_PORT
    },

    dbConfig : {
        uri : process.env.URI,
        dbPort : process.env.DB_PORT,
        host : process.env.DB_HOST,
        dbName : process.env.DB_NAME
    }
}


module.exports = config