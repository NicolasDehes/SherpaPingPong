import express from "express";
import { Match, User } from "./models";
import { Op, Sequelize } from "sequelize";
import {nbMatches} from "./controllers/tournaments/index";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server running 🙂');
});

router.get('/allUser', (req, res) => {
    User.findAll({
        include: [{
            model: Match,
            where: { 
                [Op.or]: [
                    { player1: Sequelize.col('user.id') },
                    { player2: Sequelize.col('user.id') }
                ]
            }
        }]
    }).then(users => { res.send(users)}) 
});

router.get('/test/:nbPlayer', (req, res) => {
    res.send(nbMatches(parseInt(req.params.nbPlayer)).toString());
})

router.get('/allMatch', (req, res) => {
    Match.findAll({
        include: [{
            model: User,
        }]
    }).then(matches => { res.send(matches)})
});

router.post('/user', (req, res) => {
    User.create({
        name: req.body.name
    }).then(user => { res.send(user) })
});

router.post('/match', (req, res) => {
    Match.create({
        player1: req.body.player1,
        player2: req.body.player2,
        score1: req.body.score1,
        score2: req.body.score2,
        winner: req.body.winner
    }).then(match => { res.send(match) })
});

export default router;