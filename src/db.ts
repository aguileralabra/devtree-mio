import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const url = "mongodb://localhost:27017/devtree";
        const {connection} = await mongoose.connect(url);

        console.log(connection);

        console.log("MongoDB Conectado");
    }catch(error){
        console.log("Error al conectar a MongoDB");
        process.exit(1);
    }
}