// const { AsyncLocalStorage } = require('async_hooks')
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => ctx.reply(`👋 Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'лох'}!
Введи /help для просмотра всех команд`))
bot.help((ctx) => ctx.reply(text.commands))

//settin keyboard
bot.command('menu', async (ctx) => {
    try {
    await ctx.replyWithHTML('<b><i>Menu:</i></b>'), 
    await ctx.reply('Выбери нужный предмет', Markup.keyboard (
       [
            ['БД', 'ТСИ' ],
            ['ОП', 'ОC', 'ЭВМ']
       ]
   )
)
    } catch(e) {
        console.error(e)
    }

})
 


//setting commands
bot.hears('БД', ctx => {
    try {
    ctx.reply('hi'),
    ctx.replyWithDocument({source: './files/spzbd.docx'});
    

} catch(e) {
    console.error(e)
}
})



bot.hears('ОП', ctx => {
    try {
    ctx.replyWithDocument({source: './files/spzop.doc'});
    

} catch(e) {
    console.error(e)
}
})

bot.hears('ТСИ', ctx => {
    try {
    ctx.replyWithDocument({source: './files/SPZ_tsi.doc'});
    

} catch(e) {
    console.error(e)
}
})

bot.hears('ОС', ctx => {
    try {
    ctx.replyWithDocument({source: './files/OS_Sbornik_LR.docx'});
    

} catch(e) {
    console.error(e)
}
})

bot.hears('ЭВМ', ctx => {
    try {
    ctx.replyWithDocument({source: './files/Prakt_EVM_PKS_IS_17-30.doc'});
    

} catch(e) {
    console.error(e)
}
})




//remove keybords
bot.hears('/close',  ctx => {
    try {
    bot.telegram.sendMessage(ctx.chat.id, "menu closed",
    {
        reply_markup: {
            remove_keyboard: true
        }
    }
    )
}catch(e){
    console.error(e)
 
 }
}
)





bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
