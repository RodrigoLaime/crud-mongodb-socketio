import { config } from "dotenv";
config();

export const DB_NAME = process.env.DB_NAME;
export const DB_KEY = process.env.DB_KEY;
