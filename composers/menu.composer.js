const { Composer } = require('telegraf')
const menu = new Composer()


//setting commands
menu.hears('БД', ctx => {
    try {
    ctx.reply('hi'),
    ctx.replyWithDocument({source: './files/spzbd.docx'});
    

} catch(e) {
    console.error(e)
}
})

menu.hears('ОП', ctx => {
    try {
    ctx.replyWithDocument({source: './files/spzop.doc'});
    

} catch(e) {
    console.error(e)
}
})



module.exports = menu
