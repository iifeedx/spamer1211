const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('دواي عندك اخ عليك بس @àBdulAziz.#8111')
          .then(m => {
            count++;
          })

        }
      }
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\ADMINISTRATOR`ليس لديك صلاحيات**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


client.login(process.env.BOT_TOKEN);
