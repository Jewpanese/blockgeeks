let wallet = require('./wallet')

let my = {
    priv: '444769ce9efd9caa5f825c8827a30a07ed23c183daf9a28ef0bc068dbe4d4cfb',
    pub: '03aeb92abfd815587f562725467ca8a6788706c68f8b3f13541fe9bc3ba1c2e63e'
}

let reciever = '03fd833191c6d92b8619bb5f96bb073529d26cd426b9d4ce64adb648599c345cf1'

async function testSend() {
    let result = await wallet.sendCoin(my, receiver, 10)
    console.log(result)
}

testSend()