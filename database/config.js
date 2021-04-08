const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // await mongoose.connect( process.env.DB_CNN , {
        //     useNewUrlParser: true, 
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // });
        mongoose.connection.openUri('mongodb://localhost:27017/mern_calendar', (err , res) => {
            if (err) throw err;

            console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
        });

        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}