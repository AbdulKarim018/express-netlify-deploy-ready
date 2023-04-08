const express = require('express');
const exphbs = require('express-handlebars').engine;
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.use('/', router);  // path must route to lambda

module.exports.handler = serverless(app);