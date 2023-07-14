# Sample Hardhat Project

deploy:
npx hardhat run scripts/deploy.js --network {network}

verify:
npx hardhat verify --network {network} {contract_address} "constructor_arg"
