require('dotenv').config();
const {REST , Routes } = require('discord.js');
const commands = [
    {
        name:"hey",
        description :"say hey "
    },
    {
        name:"by ",
        description :"say by "
    },
];

const rest= new REST ({version: '10'}).setToken(process.env.TOKEN);
(async ()=>{
             try{
                   console.log('registration alash command ...');
                   await rest .put(
                                     Routes.applicationGuildCommands( process.env.CLIENT_ID, process.env.GUILD_ID),
                                     { body : commands}
                                     );
                    console.log('Slash command were registraction successfully');
                } catch(error){
                    console.log(`there was an error : ${error}`);
                }
            }
            

)();