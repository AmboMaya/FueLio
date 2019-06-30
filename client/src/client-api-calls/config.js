import request from 'superagent'

const configUrl = '/config'

export default function getConfig() {
  return request
    .get(configUrl)
    .then(res => {
      const config = res.body
      // console.log(prices)
       return config
    })
    .catch(() => {
      throw Error('something went wrong')
    })
}