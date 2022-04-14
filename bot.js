const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'Your token';
const keepAlive = require('./server.js')
keepAlive();
// this the icon you need to put infront your command to let the command work
const prefix = '/';

// The bot will display Watching over MUX_ON_WINDOWS
// Activity status (idle etc.)

bot.on('ready', () => {
  console.log(`${bot.user.tag} has logged in.`);
  bot.user.setPresence({ activities: [{ name: `MUX_ON_WINDOWS`, type: `WATCHING` }], status: 'dnd', afk: false });
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
      .setDescription('This is me check me out if ur interested.')
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
      - %face
      - %projects
      `)
  } else if (command === "face") {
    var q = Math.random();
    if (q < 0.5) {
      message.channel.send("ʕっ•ᴥ•ʔっ");
    } else if (q < 1) {
      message.channel.send("( ͡° ͜ʖ ͡°)╭∩╮");
    }
  } else if (command === "projects") {
    var d = Math.random();
    if (d < 0.5) {
      message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2Fhomepage_RS.png?v=1638559371704")
    } else if (d < 1) {
      message.channel.send("https://cdn.glitch.me/5bc11192-3217-4ac2-a1ea-14bf684e28ec%2FHomepage_KB.png?v=1638559366482")
    }
  }
})

bot.login(token);

