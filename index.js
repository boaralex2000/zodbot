const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once("ready", () => {
  console.log("Ready!");
  bot.user.setActivity("netflix with Obama", {type: "WATCHING"});
});

bot.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice[1];

  switch(cmd) {
  case ".help":
    help();
    break;
  case ".citatmaskinen":
    citatmaskinen();
    break;
  case ".memes":
    memes();
    break;
  case ".mikke":
    mikke();
    break;
  case ".lillen":
    lillen();
    break;
  case ".soggy":
    soggy();
    break;
  case ".zod":
    zod();
    break;
  case ".frasse":
    frasse();
    break;
  case ".baok":
    baok();
    break;
  case ".tompan":
    tompan();
    break;
  default:
    // code block
}

  function help() {
    const embed = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .setTitle("COMMANDS:")
      .addField(".help:","List of commands.")
      .addField(".citatmaskinen:","Posts a random quote from Lucas.")
      .addField(".memes:","Posts a random meme.")
      .addField(".mikke:","Posts a random picture of Michael.")
      .addField(".lillen:","Posts a random picture of Lucas.")
      .addField(".soggy:","Posts a random picture of Sebbe.")
      .addField(".zod:","Posts a random picture of Möller.")
      .addField(".frasse:","Posts a random picture of Påden.")
      .addField(".baok:","Posts a random picture of Jaok.")
      .addField(".tompan:","Posts a random picture of Tomas.")

    const embed2 = new Discord.RichEmbed()
      .setColor(0x1D82B6)
      .setDescription(`**Check your DMs ${message.author}!**`)

    message.author.sendEmbed(embed);
    message.delete();
    message.channel.send(embed2).then(d_msg => {d_msg.delete(3000);});
  }

  function citatmaskinen() {
    let quote = " - Citatmaskinen";
    var citat = [
      "Armén var inget utan Hitler",
      "Jag ska moppa golvet med påden. Sen ska jag moppa golvet med grahn för påden är så jävla äcklig",
      "Maten i bamba var nog eb idag. Ätbart",
      "Hade det funnits killar som jag hade jag också varit bög",
      "Du inser att jag typ är din morfar eftersom jag har pippat din mormor",
      "A juste bois. Jag och loke ska klippa ahlström",
      "All I know is that if you are born nigga, you die nigga",
      "Känslan när man kallar apor för människor nu för tiden",
      "Jag skalar en morot med en osthyvel, vill du något eller?",
      "Hade jag kunnat gråta lika bra som dig hade jag vunnit en grammis",
      "Roses are red, nigga is dead",
      "Jag vet att du inte hetsa, jag ville bara vara taskig",
      "Den där killen är så svart att han inte ens blir vit av en flash",
      "Går det att få igen hans käft? Den är ju mer töjd än din morsa",
      "Jämföra Hedman med doda, det är raka motsatsen. Ena väger 200 pannor och den andra väger negativt"
    ];

    var citater = citat[Math.floor(Math.random()*citat.length)];
    message.channel.send(citater+quote);
  }

  function memes() {
    let number = 82;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./memes/meme (" + imageNumber + ").png"]});
  }

  function mikke() {
    let number = 29;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/mikke/mikke (" + imageNumber + ").png"]});
  }

  function lillen() {
    let number = 28;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/lillen/lillen (" + imageNumber + ").png"]});
  }

  function soggy() {
    let number = 19;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/soggy/soggy (" + imageNumber + ").png"]});
  }

  function zod() {
    let number = 8;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/zod/zod (" + imageNumber + ").png"]}).then(d_msg => { if(imageNumber == 1 || imageNumber == 5){d_msg.delete(4000);}else if (imageNumber == 8){d_msg.delete(10000);}});
  }

  function frasse() {
    let number = 13;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/frasse/frasse (" + imageNumber + ").png"]});
  }

  function baok() {
    let number = 15;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/baok/baok (" + imageNumber + ").png"]}).then(d_msg => { if(imageNumber == 14 || imageNumber == 2 || imageNumber == 1){d_msg.delete(4000);}});
  }

  function tompan() {
    let number = 15;
    let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send( {files: ["./peoplePics/tompan/tompan (" + imageNumber + ").png"]});
  }

  function wait(ms) {
    let d = new Date();
    let d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
  }

});

bot.login(process.env.token);
