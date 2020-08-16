

const axios = require('axios').default;
const _ = require('lodash');

//https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=btc,usdt
//https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=btc%2Cusd

axios.get('https://api.coingecko.com/api/v3/coins/list')
  .then(function(response) {
    const comp = _.findIndex(response.data, function(o) {
      return o.id == 'compound-coin'; });
    console.log(comp)
  })