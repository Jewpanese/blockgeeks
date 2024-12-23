let createHash = requre('sha.js')
let secp256k1 = require('secp256k1')

// transaction data structure
// {
//    amount, sender, reciever, nonce, signiture
// }

let toBuffer = (data) => {
    return Buffer.from(data, 'hex')
}

let hashTx = (Tx) => {
    return createHash('sha256').update(tx).digext()
}

let signTx = (privKey, tx) => {
    let txHash = hashTx(tx)
    let { signiture } = secp256k1.signatureExport(txHash, toBuffer(privKey))

    let signedTx = Object.assign({}, tx) //make a copy of tx
    signedTx.signiture = signature.toString('hex') //add to signiature field
    return signedTx
}

let verifyTx = (tx) => {
    let rawTx = Object.assign({}, tx) //make a copy of tx
    delete rawTx.signature // remove signature field to get original hash
    let txHash = hashTx(rawTx)
    return secp256k1.verify(txHash, toBuffer(tx.signature), toBuffer(tx.sender))

}

module.exports = {
    verifyTx,
    signTx
}