import * as Sequelize from 'sequelize';

export const sequelize = new Sequelize.Sequelize('sherpapingpong', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
});

export const Match = sequelize.define('match', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    player1: {
        type: Sequelize.INTEGER
    },
    player2: {
        type: Sequelize.INTEGER
    },
    score1: {
        type: Sequelize.INTEGER
    },
    score2: {
        type: Sequelize.INTEGER
    },
    winner: {
        type: Sequelize.INTEGER
    }
});

Match.belongsTo(User, {foreignKey: 'player1', as: "Player1"});
Match.belongsTo(User, {foreignKey: 'player2', as: "Player2"});
Match.belongsTo(User, {foreignKey: 'winner', as: "Winner"});