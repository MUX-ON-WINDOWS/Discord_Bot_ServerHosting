let Discord = require("discord.js");
let Client = new Discord.Client();

Client.on("message", message => {
  if (message.content === "Ping") {
    message.channel.send("Kom dan kut wurm");
  }
  else if (message.content === "Ik hoek je" || message.content === "Ik sloop je") {
    message.channel.send("( ͡° ͜ʖ ͡°)╭∩╮");
  }
  if (message.content === "Show your self") {
    message.channel.send(
      "https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2Fdisco_bot_profilepic.png?v=1638557028864"
    );
  }
});


Client.login("Your token")
