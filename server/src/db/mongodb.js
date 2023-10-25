import mongoose from 'mongoose';

export async function connectDB(uri) {

    mongoose.connection.on('connected', () => {
        console.log(`Connected to MongoDB`);
    });
    mongoose.connection.on('error', (err) => {
        console.log(`Cannot connect to MongoDB`)
        console.log(`Error: ${err}`);
    })

    return mongoose.connect(uri);
}