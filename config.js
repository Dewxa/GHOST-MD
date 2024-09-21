const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DZklHTpK#SIT9bU5Kcqklo1j-6IvDw1d_UkEipwpmnmskO1U6hU0",
MONGODB: process.env.MONGODB || "mongodb+srv://kitzudew2006:Dewanjana2023@cluster0.0ov7l.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - DEW-MD\n\n*💻 Owner Number* -94760683496",
SUDO_NB: process.env.SUDO_NB || "94778838273",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
