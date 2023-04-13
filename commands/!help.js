let Discord = require('discord.js')
const Pagination = require('customizable-discordjs-pagination');

module.exports = {
    name: 'help',
    aliases: [],
    run: async (client, message, args, prefix) => {

if (message.member.permissions.has("ADMINISTRATOR")){

let admin = new Discord.MessageEmbed()
.setTitle("**Administration :**")
.setDescription(`>>> \`${prefix}antibot\` ➔ Permet d'activer ou de désactiver le monde anti-bot
\`${prefix}antichannel\` ➔ Permet d'activer ou de désactiver le monde anti-channel
\`${prefix}antilien\` ➔ Permet d'activer ou de désactiver le monde anti-lien
\`${prefix}antiban\` ➔ Permet d'activer ou de désactiver le monde anti-ban
\`${prefix}antiguildupdate\` ➔ Permet d'activer ou de désactiver le monde anti-update-guild
\`${prefix}anticreainvite\` ➔ Permet d'activer ou de désactiver le monde anti-create-invite
\`${prefix}antikick\` ➔ Permet d'activer ou de désactiver le monde anti-kick
\`${prefix}antimassban\` ➔ Permet d'activer ou de désactiver le monde anti-mass-ban
\`${prefix}antimasskick\` ➔ Permet d'activer ou de désactiver le monde anti-mass-kick
\`${prefix}antiraid\` ➔ Permet d'activer ou de désactiver le monde anti-raid
\`${prefix}anti-masse-mention\` ➔ Permet d'activer ou de désactiver le monde anti-mention
\`${prefix}secur-max\` ➔ Permet d'activer l'Anti Raid au Max
\`${prefix}secur-off\` ➔ Permet de désactivé l'Anti Raid !
\`${prefix}secur-on\` ➔ Permet de activé la sécurité
\`${prefix}secur\` ➔ Permet de désactivé l'Anti Raid !
\`${prefix}setup-captcha\` ➔ Permet de définir le channel et le role du captcha
\`${prefix}setup-logs\` ➔ Permet de définir le channel de logs
\`${prefix}spam\` ➔ Permet d'activer ou de désactiver le monde anti-spam`)
.setColor("FF0000")
.setFooter({text: " "})

let moderation = new Discord.MessageEmbed()
.setTitle("**Modération :**")
.setDescription(`>>> \`${prefix}ban\` ➔ Permet de bannir définitivement un utilisateur
\`${prefix}clear\` ➔ Permet de supprimer un nombre de messages
\`${prefix}gban\` ➔ Permet de blacklister un utilisateur
\`${prefix}kick\` ➔ Permet d'expulser un utilisateur
\`${prefix}lock\` ➔ Permet de locker un salon
\`${prefix}mute\` ➔ Permet de rendre temporairement muet un utilisateur
\`${prefix}prune\` ➔ Permet de supprimer un nombre de messages d'un utilisateur
\`${prefix}renew \` ➔ Permet de dupliquer un salon et de supprimez l'ancien !
\`${prefix}sanction\` ➔ Permet de connaître toutes les infractions d'un utilisateur
\`${prefix}snipe\` ➔ Permet de connaître le dernier message supprimé du salon
\`${prefix}tempban\` ➔ Permet de bannir temporairement un utilisateur
\`${prefix}unban\` ➔ Permet de débannir un utilisateur
\`${prefix}gunban\` ➔ Permet de blacklister un utilisateur
\`${prefix}unlock\` ➔ Permet de unlocker un salon
\`${prefix}unmute\` ➔ Permet de rendrela parole d'un utilisateur
\`${prefix}warn\` ➔ Permet d'avertir un utilisateur`)
.setColor("FF0000")
.setFooter({text: " "})

let minijeux = new Discord.MessageEmbed()
.setTitle("Mini-Jeux :")
.setDescription(`>>> \`${prefix}ankword\` ➔ Permet de jouer au Ankword en Vocal !
\`${prefix}betrayal\` ➔ Permet de jouer au Betrayal en Vocal !
\`${prefix}checkers\` ➔ Permet de jouer au Checkers en Vocal !
\`${prefix}chess\` ➔ Permet de jouer au Chess en Vocal !
\`${prefix}doodle-crew\` ➔ Permet de jouer au Doodle-Crew en Vocal !
\`${prefix}fishing\` ➔ Permet de jouer au Fishing en Vocal !
\`${prefix}letter-league\` ➔ Permet de jouer au Letter en Vocal !
\`${prefix}poker\` ➔ Permet de jouer au Poker en Vocal
\`${prefix}puttparty\` ➔ Permet de jouer au PuttParty en Vocal !
\`${prefix}spellcast\` ➔ Permet de jouer au SpellCast en Vocal !
\`${prefix}word-snack\` ➔ Permet de jouer au Word-Snack en Vocal !
\`${prefix}youtube\` ➔ Permet de regardé YouTube en Vocal !`)
.setColor("FF0000")
.setFooter({text: " "})

let fun = new Discord.MessageEmbed()
.setTitle("Fun :")
.setDescription(`>>> \`${prefix}8ball\` ➔ Pose une question ?
\`${prefix}gay\` ➔ Permet de voir à combien de % tu es gay !
\`${prefix}pf\` ➔ Pile ou Face ?
\`${prefix}politique\` ➔ Pour qui tu vote !`)
.setColor("FF0000")
.setFooter({text: " "})

let utile = new Discord.MessageEmbed()
.setDescription(`>>> \`${prefix}alladmin\` ➔ Permet de voir la liste des Admins
\`${prefix}banner\` ➔ Donne la Bannière d'une personne
\`${prefix}embed\` ➔ Permet de crée un embed
\`${prefix}greet-list\` ➔ Liste des salons ou le greet est activé !
\`${prefix}invite-guild\` ➔ Lien d'invite du serveur
\`${prefix}member\` ➔ Savoir le nombre de membres sur le serveur
\`${prefix}pp-random\` ➔ donne une PP d'un membre aléatoire
\`${prefix}pp-serveur\` ➔ Donne la PP du serveur
\`${prefix}pp\` ➔ Donne l'avatar d'une personne
\`${prefix}say\` ➔ Parle avec le bot
\`${prefix}serveurinfo\` ➔ Permet d'avoir des informations sur le serveur
\`${prefix}greet\` ➔ Permet de définir les greets
\`${prefix}set-statut\` ➔ Permet de définir le rôle a donner aux utilisateurs qui ont le statut
\`${prefix}sondage\` ➔ Sondage avec le bot
\`${prefix}stat\` ➔ Nombre de serveur dû bot
\`${prefix}userinfo\` ➔ Permet d'avoir des informations sur un utilisateur
\`${prefix}vc\` ➔ Nombre de personne en Vocal`)
.setColor("FF0000")
.setFooter({text: " "})

let bot = new Discord.MessageEmbed()
.setTitle("Bot :")
.setDescription(`>>> \`${prefix}token\` ➔ Envoye le Token sûr Github pour le faire regen ! [A2F ON]
\`${prefix}allserveur\` ➔ Permet de voir la liste des serveurs
\`${prefix}discord\` ➔ Discord pour acheté le Bot !
\`${prefix}join\` ➔ Permet d'activer ou de désactiver le monde anti-bot
\`${prefix}leave\` ➔ Quitte un serveur
\`${prefix}patch-note\` ➔ Permet de connaître toutes les MAJ du Bot !
\`${prefix}ping\` ➔ Permet de connaître la latence du bot
\`${prefix}set-bio\` ➔ Change le status de votre Bot
\`${prefix}setprefix\` ➔ Permet de changer le préfixe du bot`)
.setColor("FF0000")
.setFooter({text: " "})

const pages = [admin, moderation, minijeux, fun, utile, bot]

const buttons = [
    { label: '◀', emoji: '', style: 'DANGER' },
    { label: '▶', emoji: '', style: 'DANGER' }
 ];

 new Pagination()
   .setCommand(message)
   .setPages(pages)
   .setButtons(buttons)
   .setPaginationCollector({ timeout: 60000, resetTimer: true, components: 'disable', secondaryUserText: 'Vous ne pouvez pas utiliser cette interaction' })
   .setSelectMenu({ enable: false })
   .setFooter({ option: 'user' })
   .send();
}
}
}