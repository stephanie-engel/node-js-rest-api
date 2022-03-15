import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {v4 as uuidv4} from 'uuid';
import models from './models/index.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.users);
app.use('/messages', routes.messages);

app.listen(process.env.PORT, () =>
    console.log(`Stephz Node JS app listening on port ${process.env.PORT}`),
);

//TODO! Stopped here: https://www.robinwieruch.de/postgres-express-setup-tutorial/
