const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const github = require("@actions/github")

const chatID = core.getInput('chatID');
const username = core.getInput('username');

const bot = new TelegramBot(core.getInput('token'));

const git = github.context.payload; 

try {
  bot.sendMessage(chatID, `Workflow ejecutado correctamente tras el último commit. Saludos ${username}
                        GitHub Information: \
                        Commit name: ${git.head_commit.author.name}
                        Commit message: ${git.head_commit.message}
                        Username: ${git.head_commit.author.username}
                        Email: ${git.head_commit.author.email}`
                    );

} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("response", "Mensaje enviado");