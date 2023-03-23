require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3GqrgvR-MqUku5W7bGVOKT7oPmxpwoLT",
        accounts: [`0x${"your"}`],
      },
    },
  },
};
