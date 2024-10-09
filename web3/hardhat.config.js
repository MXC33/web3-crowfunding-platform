require("dotenv").config();
require("@matterlabs/hardhat-zksync-solc");

const zksolc = {
  version: "1.3.9",
  compilerSource: "binary",
  settings: {
    optimizer: {
      enabled: true,
    },
  },
};

const networks = {
  zksync_testnet: {
    url: "https://zksync2-testnet.zksync.dev",
    ethNetwork: "sepolia", // Use Sepolia instead of Goerli
    chainId: 280,
    zksync: true,
  },
  zksync_mainnet: {
    url: "https://zksync2-mainnet.zksync.io/",
    ethNetwork: "mainnet",
    chainId: 324,
    zksync: true,
  },
};

const paths = {
  artifacts: "./artifacts-zk",
  cache: "./cache-zk",
  sources: "./contracts",
  tests: "./test",
};

const solidity = {
  version: "0.8.17",
  defaultNetwork: "sepolia",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const accounts = [`0x${process.env.SECRET_KEY}`]; // Ensure your .env has SECRET_KEY set correctly

module.exports = {
  zksolc,
  networks,
  paths,
  solidity,
  accounts,
};
