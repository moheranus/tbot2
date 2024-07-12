const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7237558909:AAHWIk34KWaVIexGLN3nF9krEUb9m8yx23M"; // Replace with your actual bot token
const bot = new Telegraf(TOKEN);
const web_link = "https://dantopcoin.netlify.app/";

// Handler for /start command or initial message
bot.start((ctx) => {
  ctx.reply("Welcome :)", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🚀 Get Started", web_app: { url: web_link } }]
      ],
    },
  });
});

// Handler for any other messages or commands
bot.on('message', (ctx) => {
  ctx.reply("Welcome back!"); // Optional: handle returning users differently
});

bot.launch()
  .then(() => console.log("Bot started successfully"))
  .catch((err) => console.error("Error starting bot:", err));
