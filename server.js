const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express');
const server = express();
const name = "MAINTENANCE#4598";

server.all('/', (req, res) => {
    res.send(`${name} has been reborn!`)
})

function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is ready!");
        console.log("Launched at: " + new Date());
    });
}

module.exports = keepAlive();
