import * as mongoose from "mongoose";

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,          
        });

        console.log('Database is running and up');
        
    } catch(error) {
        console.log(error);
        throw new Error ('Error starting database');
    }

}

export {
    dbConnection
}