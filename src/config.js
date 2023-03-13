import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_NAME = process.env.DB_NAME;
export const DB_KEY = process.env.DB_KEY;
