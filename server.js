const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'Your token';
// this the icon you need to put infront your command to let the command work
const prefix = '/';

// The bot will display Watching over MUX_ON_WINDOWS
// Activity status (idle etc.)

bot.on('ready', () => {
  console.log('Your bot is online');
  bot.user.setActivity('over MUX_ON_WINDOWS', {type: "WATCHING"})
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

bot.on("message", message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
  const command = args.shift().toLocaleLowerCase();

  if (command === 'info') {
    const infoEmbed = new Discord.MessageEmbed()
      .setTitle('MaxArnoutsDevelopment')
      .setURL('https://maxarnouts.nl')
      .setAuthor('Max Arnouts')
      .setDescription('This is a test Description which we will see.')
      .setColor('0xff0000')
    try {
      message.reply(infoEmbed);
    } catch {
      message.reply(`<@${message.author.username}> het lukt nu niet om de info op te halen!`)
    }
  }

  if (command === "help") {
    message.reply(`
      Probeer deze commands te gebruiken:
      - /ping
      - /face
      - /porn
      - /projects
      `)
  } else
  if(command === 'ping') {
    message.reply('Pong');
  } else
  if (command === "face") {
    message.channel.send("( ͡° ͜ʖ ͡°)╭∩╮");
  } else
  if (command === "porn") {
    message.channel.send("Wat denk je nu zelf vies ventje!");
  } else
  // My projects 50/50
  if (command === "projects"){
    var d = Math.random();
    if (d < 0.5){
    // 50% chance of being here
      message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2Fhomepage_RS.png?v=1638559371704")
    } else if (d < 1) {
    // 50% chance of being here
      message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2FHomepage_KB.png?v=1638559366482")
    }
  }
})
bot.login(token);
