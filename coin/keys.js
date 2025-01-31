let secp256k1 = require('secp256k1')
let { randomBytes } = require('crypto')

let generatePrivateKey = () => {
    let privKey 
    do {
        privKey = randomBytes(32)
    } while (!secp256k1.privateKeyVerify(privKey))

    return privKey.toString('hex')
}

let generatePublicKey = (privKey) => {
    let priv = Buffer.from(privKey, 'hex');
    return secp256k1.publicKeyCreate(priv).toString('hex')
}

module.exports = {
    generatePrivateKey,
    generatePublicKey
}