import Sequelize from 'sequelize';
import usersDb from "./models/users.js";

const sequelize = new Sequelize(process.env.AM_DB_URL, {
  pool: {
    minConnections: 1,
    maxConnections: 5
  },
  logging: false
});

const db = {};

db.users = usersDb(sequelize, Sequelize.DataTypes);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
