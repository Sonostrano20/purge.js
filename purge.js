const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if (message.member.hasPermission("MANAGE_MESSAGES")) {
                let num = parseInt(args[0]);
                if (!num) return message.reply("Specifies the number of messages to delete");
                if (num > 99) return message.reply("You can only purge 99 messages at a time!");
                message.channel.bulkDelete(num + 1)
                        .then(messages => message.reply(`Deleted ${messages.size - 1} messages.`))
                        .catch(console.error);
        } else return message.reply(`You Don't have permission to use this command.`);
}
