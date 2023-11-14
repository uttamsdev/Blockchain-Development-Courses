// https://eth-goerli.g.alchemy.com/v2/wH4-22RkrwsNaPKLWtvZp-ysspL3uXn7

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  network: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/wH4-22RkrwsNaPKLWtvZp-ysspL3uXn7',
      accounts: ['d3affc51e1556f6c97428a1e1ccd17d8b69864125ef5cf32621fef3c2c6df6a7']
    }
  }
}