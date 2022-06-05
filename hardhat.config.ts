import * as dotenv from 'dotenv'

dotenv.config();

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const {
  ALCHEMY_KEY,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY_TESTNET
} = process.env;


module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },

  networks: {
    hardhat: {
      forking: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
        accounts: [PRIVATE_KEY_TESTNET]
      }
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY_TESTNET]
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY_TESTNET]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};