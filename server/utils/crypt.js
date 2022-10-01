const crypto = require("crypto");
const config = require("config");

var encrypt = (val) => {

    // Decrypt encryption key
    let decipher = crypto.createDecipheriv("aes-256-cbc", config.get("key_2"), config.get("key_iv"));;
    let decryptedKey = decipher.update(config.get("key_1_enc"), 'base64', 'utf8');
    decryptedKey = decryptedKey + decipher.final('utf-8');

    // Encrypt the value with encryption key
    let cipher = crypto.createCipheriv("aes-256-cbc", decryptedKey, config.get("key_iv"));
    let encrypted = cipher.update(val, 'utf8', 'base64');
    return (encrypted + cipher.final('base64'));
};


var decrypt = ((encrypted) => {
    // Decrypt encryption key
    let decipher_0 = crypto.createDecipheriv("aes-256-cbc", config.get("key_2"), config.get("key_iv"));;
    let decryptedKey = decipher_0.update(config.get("key_1_enc"), 'base64', 'utf8');
    decryptedKey = decryptedKey + decipher_0.final('utf-8');

    // Decrypt the value with encryption key
    let decipher_1 = crypto.createDecipheriv("aes-256-cbc", decryptedKey, config.get("key_iv"));
    let decrypted = decipher_1.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher_1.final('utf8'));
});
module.exports = { encrypt, decrypt };