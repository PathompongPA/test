const express = require('express');
const app = express()

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function Home(req, res) {
    res.send("test")
}

app.get("/", Home)

module.exports = app
