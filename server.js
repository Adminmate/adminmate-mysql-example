// Import all env vars from .env file
import "dotenv/config";
import express from "express";
import Adminmate from "adminmate-express-sequelize";
import db from "./database.js";
import adminmateConfig from "./config/adminmate.js";

// Environment vars
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3020;

const app = express();

// Global vars
global.NODE_ENV = env;

// Set up jade
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Connect to database
db.sequelize.sync().then(() => {
  console.log('Adminmate Admin has started');
  console.log(`Env: ${global.NODE_ENV}`);
});

// Add Adminmate
app.use(Adminmate.init(adminmateConfig));

// Handle error 404 page
app.use((req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});

// Listen for requests
app.listen(port, () => console.log(`App listening on port ${port}`));

// Handle all uncaught errors
process.on('uncaughtException', err => console.log(err));
