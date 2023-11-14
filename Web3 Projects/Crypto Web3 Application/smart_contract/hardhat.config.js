require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/XQX8qBQlXrHv7FBXtWSwOJgoNiyzf69c',
      accounts: ['0xCBa91BCC85E45b793ae9aC16A2149dFD0D2D47fc'],
    },
  },
};