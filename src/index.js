import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models, { sequelize } from './models/index.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('sengel'),
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
        createUsersWithMessages();
      }

    app.listen(process.env.PORT, () => {
        console.log(`Stephz Node JS app listening on port ${process.env.PORT}`)
    });
});

const createUsersWithMessages = async () => {
    await models.User.create(
      {
        username: 'sengel',
        messages: [
          {
            text: 'This is a great message!',
          },
        ],
      },
      {
        include: [models.Message],
      },
    );
    await models.User.create(
      {
        username: 'otherUsername',
        messages: [
          {
            text: 'Buy more bananas',
          },
          {
            text: 'I love art.',
          },
        ],
      },
      {
        include: [models.Message],
      },
    );
};
//TODO! Stopped here: At the top of the file, you create a Sequelize instance - https://www.robinwieruch.de/postgres-express-setup-tutorial/
