import express, {Express} from 'express';
import dotenv from "dotenv";
if (process.env.NODE_ENV === 'development') {
    dotenv.config();
}
dotenv.config();
import mongoose, { mongo, Mongoose } from "mongoose";
class App {
    private app: Express;
    //private port: number;
    private clientMongo: Mongoose;

    constructor() {
        this.app=express();
        this.clientMongo = mongoose;
        this.configure();

    }
    private configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    private configureDatabase () {
        const dataBaseName = "";
        const dataBaseHost = "";
        const dataBasePort = "";
        const dataBaseUser = "";
        const dataBasePassword = "";
    }
}
export default App;