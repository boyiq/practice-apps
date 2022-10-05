require("dotenv").config();
const express = require("express");
const path = require("path");
const controller = require('./controllers')

const app = express();
const port = process.env.PORT || 3000;


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/glossory', controller.glossary.get)

app.post('/glossory', controller.glossary.post)

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
