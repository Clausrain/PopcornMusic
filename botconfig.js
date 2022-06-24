module.exports = {
  Admins: ["594840043072258068", "911561276839313438"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/3sgkhCQVQd", //Support Server Link
  Token: process.env.Token || "OTMzNzI4MTc5OTQyNzIzNjE0.GZIwsB.Yu_cpx62oRw3AOKh5fEOr-xalArJhu5V6tiBYA", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "933728179942723614", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "1vpHW61qAbiq9ZI2u6NmBFGX8DQpCMNI", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://example.com", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "MAIN", //- Used for indentifier. You can set this to whatever you want.
    host: "www.lavalinknodepublic.ml", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "mrextinctcodes", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
}, 
  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "0234411973cc49d1ba6d64d58f67615d", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "42eca75e232a4d92a39d492abb3f473c", //Spotify Client Secret
  },
};
