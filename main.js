const axios = require('axios').default;

const tokens = [
  'kyber-network',
  'ethlend',
  'maker',
  'kava',
  '0x',
  'loopring',
  'republic-protocol',
  'augur',
  'bancor',
  'havven',
  'compound-coin',
];

const amounts = {
  'kyber-network': 119.5117,
  ethlend: 865.173,
  maker: 0.3517,
  kava: 21.9652,
  '0x': 416.8648,
  loopring: 671.0796,
  'republic-protocol': 566.3728,
  augur: 7.3217,
  bancor: 46.0263,
  havven: 112.2297,
  'compound-coin': 1.6667,
};

let total = 0;
async function getTotal() {
  for (let token of tokens) {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
    );
    total += Math.round(amounts[token] * response.data[token].usd);
  }
}
getTotal().then(function () {
  console.log(total);
});
