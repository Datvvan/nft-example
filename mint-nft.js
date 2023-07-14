require("dotenv").config();
const { ethers } = require("ethers");
const { ABI } = require("./utils/contract");

const abc = async () => {
  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.API_KEY
  );

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(
    "0x29881F9901E004a1D7CDF4fD4Fcf8e360525C23e",
    ABI,
    provider
  );

  // const contractFunc = contract.interface.getFunction("createToken");

  // const metaData =
  //   "ipfs://bafkreibugjvpuqc7ph4cu57rwmackoivc24ma2lv7s5gzhsaydp65jmgj4";

  // const encodedData = contract.interface.encodeFunctionData(contractFunc, [
  //   metaData,
  // ]);
  // console.log(encodedData);

  // const transaction = await signer.sendTransaction({
  //   to: "0x29881F9901E004a1D7CDF4fD4Fcf8e360525C23e",
  //   data: encodedData,
  // });
  // console.log("Transaction hash:", transaction.hash);

  const contractFunc = contract.interface.getFunction("balanceOf");

  const encodedData = contract.interface.encodeFunctionData(contractFunc, [
    "0x3416c8Cd51d9a09f94515Bb3D9945aC206c5569b",
  ]);

  const read = await provider.call({
    to: "0x29881F9901E004a1D7CDF4fD4Fcf8e360525C23e",
    data: encodedData,
  });

  console.log(parseInt(read, 16));
};

abc();
