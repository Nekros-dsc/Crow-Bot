const db = require('quick.db')
module.exports = async (client) => {
    setInterval(() => {
const status = db.get(`status`)
if (!status) return;
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (status.length - 1) + 1);
        const newActivity = status[randomIndex];

        client.user.setActivity(newActivity, { type: "STREAMING", url: "https://www.twitch.tv/amouranth" })
    }, 4000);

}