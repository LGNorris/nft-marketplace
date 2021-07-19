require("@nomiclabs/hardhat-waffle");
require("dotenv");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.ENV.MUMBAI,
      accounts: [process.ENV.PRIVATE_KEY],
    },
    mainnet: {
      url: process.ENV.MAINNET,
      accounts: [process.ENV.PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",
};
