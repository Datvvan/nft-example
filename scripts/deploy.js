const hre = require("hardhat");

async function main() {
  const DatNft = await hre.ethers.getContractFactory("DatNft");
  const deploy = await DatNft.deploy();

  await deploy.deployed();

  console.log(deploy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
