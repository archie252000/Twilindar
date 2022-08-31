const crypto = require("crypto");
const config = require("config");

var encrypt = (val) => {

    let cipher = crypto.createCipheriv("aes-256-cbc", config.get("key_1_enc").substring(0, 32), config.get("key_iv"));
    let encrypted = cipher.update(val, 'utf8', 'base64');
    return (encrypted + cipher.final('base64'));
};


var decrypt = ((encrypted) => {
    let decipher = crypto.createDecipheriv("aes-256-cbc", config.get("key_1_enc").substring(0, 32), config.get("key_iv"));
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
});
module.exports = { encrypt, decrypt };