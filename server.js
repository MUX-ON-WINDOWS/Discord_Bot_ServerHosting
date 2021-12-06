let Discord = require("discord.js");
let Client = new Discord.Client();

// All commands that /help displays
Client.on("message", message => {
  if (message.content === "Ping") {
    message.channel.send("Kom dan kut wurm");
  }
  else if (message.content === "Ik hoek je" || message.content === "Ik sloop je" || message.content === "Ik klap jouw") {
    message.channel.send("( ͡° ͜ʖ ͡°)╭∩╮");
  }
  else if (message.content === "!pls porn" || message.content === "porn") {
    message.channel.send("Wat denk je nu zelf vies ventje!");
  }
  if (message.content === "Show your self") {
    message.channel.send(
      "https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2Fdisco_bot_profilepic.png?v=1638557028864"
    );
  }
  // My projects 50/50
  if (message.content === "/projects" || message.content === "/Projects" || message.content === "/Project" || message.content === "/project"){
    var d = Math.random();
    if (d < 0.5){
    // 50% chance of being here
      message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2Fhomepage_RS.png?v=1638559371704")
    } else if (d < 1) {
    // 50% chance of being here
       message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2FHomepage_KB.png?v=1638559366482")
    }
  }
});
Client.on("message", message => {
  if (message.content === "/Count" || message.content === "/count") {

}
})

// /help command
Client.on("message", message => {
  if (message.content === "/Help" || message.content === "/help") {
message.channel.send(`
  Probeer deze commands te gebruiken:
  - Ik sloop je of Ik hoek je
  - Kom dan
  - !pls porn
  - Show your self
  `)}
});


Client.login("Your token")
