let Discord = require("discord.js");
let Client = new Discord.Client();

Client.on("message", message => {
  if (message.content === "Ping") {
    message.channel.send("Kom dan kut wurm")
  }

})

Client.on("message", message => {
  if (message.content === "Ik hoek je") {
    message.channel.send("( ͡° ͜ʖ ͡°)╭∩╮")
  }
})


Client.login("Your token")
