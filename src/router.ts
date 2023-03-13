import express from "express";
import { User } from "./models";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server running 🙂');
});

router.get('/test', (req, res) => {
    User.findAll().then(users => { res.send(users)}) 
});

export default router;