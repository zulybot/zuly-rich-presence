const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
        details : "╭・໒🍡꒱﹕ZulyBot・꒷꒦੭",
        state: "╰・໒🍩꒱﹕Just a discord bot・꒷꒦੭",
        assets : {
        large_image : "zulybot",
        large_text : "⌜🤖⌟ Zuly"
        },
        buttons : [
            {label: 'Add' , url: 'https://discord.com/oauth2/authorize?scope=bot%20applications.commands&client_id=880173509077266483&permissions=268823622'},
            {label: 'Support', url: 'https://discord.gg/pyyyJpw5QW'}
        ]}
    })
})
client.login({ clientId : "880173509077266483" }).catch(console.error);
