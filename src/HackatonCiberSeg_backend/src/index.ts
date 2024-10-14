import {Server} from 'azle';
import express from 'express';
import cors from 'cors';




export default Server( () => {
    const app = express();
    app.use(cors());
    return app.listen()
})