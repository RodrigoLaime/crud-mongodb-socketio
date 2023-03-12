import { connect } from 'mongoose';
import { DB_NAME, DB_KEY } from './config';

export const connectDB = async () => {
    try {
        await connect(`mongodb+srv://${DB_NAME}:${DB_KEY}@cluster0.kpp1aja.mongodb.net/websocket`);
        console.log('connect to db')
    } catch (error) {
        console.error(error)
    }
};
