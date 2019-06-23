import request from 'superagent'

const fuelUrl = '/bestPrice'

export function getPrices() {
  return request
    .get(fuelUrl)
    .then(res => {
      const prices = res.body
      // console.log(prices)
       return prices
    })
    .catch(() => {
      throw Error('something went wrong')
    })
}
