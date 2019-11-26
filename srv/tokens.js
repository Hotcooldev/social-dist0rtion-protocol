const ethers = require("ethers");
const URI = "https://goerli.infura.io/v3/322fadda61904e8c937489c2e3ad6387";

module.exports = {
  send: async function send(to, value) {
    let wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
    let provider = new ethers.providers.JsonRpcProvider(URI);
    wallet = wallet.connect(provider);

    let tx = {
      to,
      value: ethers.utils.parseEther(value)
    };

    try {
      let transaction = await wallet.sendTransaction(tx);
      return transaction.hash;
    } catch (err) {
      console.log("Sending wasn't successful", err);
    }
  }
};