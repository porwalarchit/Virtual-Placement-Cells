require("dotenv").config()
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.publicKey,
    privateKey : process.env.privateKey,
    urlEndpoint : process.env.urlEndpoint
});

module.exports = imagekit;