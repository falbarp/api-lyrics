import express from 'express'

import { router } from '../routes/lyrics.js';
import {dbConnection} from '../database/config.js'

class Server {

    constructor () {
        this.app = express(); 
        this.port = process.env.PORT;
        this.lyricsPath = '/api/lyrics';

        this.dbConnection();
    

        this.routes();
        
    }

    async dbConnection() {
        
        await dbConnection();
    }

    routes() {

        this.app.use(this.lyricsPath, router);    
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log('Server running on', this.port);
        })
    }

}

export {
    Server
}