import { ethers } from "ethers";

async function showBalance(address: string) {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/83370297e01c438cb452563f01308baa"
  );
  let balance = await provider.getBalance(address);
  console.log(address, ethers.utils.formatEther(balance));
}

showBalance("0x123d475e13aa54a43a7421d94caa4459da021c77");
showBalance("0x0020c5222a24e4a96b720c06b803fb8d34adc0af");
showBalance("0xfe808b079187cc460f47374580f5fb47c82b87a5");
