const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const chatID = core.getInput('chatID');
const username = core.getInput('username');

const bot = new TelegramBot(core.getInput('token'));

try {
  bot.sendMessage(chatID, `Workflow ejecutado correctamente tras el último commit. Saludos ${username}`);

} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("response", "Mensaje enviado");