const genToken = () => {
    const len = 32;
    return Math.random().toString(32).substring(2, len);
}

module.exports = genToken;