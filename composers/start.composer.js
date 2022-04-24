const { Composer } = require('telegraf')
const starts = new Composer()


const text = require('./const')

starts.start((ctx) => ctx.reply(`👋 Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'лох'}!
Введи /help для просмотра всех команд`))

starts.help((ctx) => ctx.reply(text.commands))

module.exports = starts