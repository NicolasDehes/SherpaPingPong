import express from 'express';
import { Sequelize } from 'sequelize';

//init sequelize
export const sequelize = new Sequelize('sherpapingpong', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const app = express();
const port = 3000;

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🙂`);
});