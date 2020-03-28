const HDWalletProvider = require("@truffle/hdwallet-provider");
//const mnemonic = "position warm cook broccoli brand riot bundle bind average luggage chest grass antique meat warrior";
require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    ropsten: {
      provider: new HDWalletProvider("66A1140A9DFA0047A24BE488528427EB1BF9F9EC707B092CBD5D183F3560B4F2", "https://ropsten.infura.io/v3/7b2d1f57984d4d2d85ece869d1853465")
    },
    network_id: 3
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
