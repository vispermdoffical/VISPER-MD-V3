const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? ' VISPER-MD&Th4w0QLI#D0sAMROangyUD2PdbRK7Jt2T6VebOSN6P8V8_rxgsu0' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'Safari(mac os)' : process.env.SESSION_NAME, 

};

