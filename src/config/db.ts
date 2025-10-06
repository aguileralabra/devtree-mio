import mongoose from 'mongoose';
import * as colors from 'colors';

export const connectDB = async ()  => {
    try{
        const url = process.env.MONGO_URI;
        const {connection} = await mongoose.connect(url);

        console.log(connection);
        console.log("MongoDB Conectado");
    }catch(error){
        console.log(colors.red("Error al conectar a MongoDB"));
        process.exit(1);
    }
}