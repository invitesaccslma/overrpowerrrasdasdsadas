const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
var adminprefix = '!'


//bc

client.on("message", message => {
    if (message.content.startsWith("!obc")) {
                 if (!message.member.hasPermission(""))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "!";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

 

  client.on('message', msg => {
    if(msg.content === '!adminhelp')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === "!adminhelp") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب
       !obc | لأرسال برود كاست للكل
       !bc  |  لأرسال برود كاست للأونلاين
       Admin Commands :
       !setw | WATCHING
       !setl | LISTENING
       !sets | STREAMING
       !setg | PLAYING
       !setname | CHANGE NAME 
       !setav | CHANGE AVATAR
       !leave | THE BOT LEAVE FROM THE SERVER
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["331954822494289921","552936847202975760"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/sytra_ayman");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changed The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setav')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changed The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
