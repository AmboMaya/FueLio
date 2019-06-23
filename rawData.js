const bestPrice = {
    '91': {
      price: '\$2.21',
      station: {
        position: {
          lat: -36.880496,
          lng: 174.795649
        },
        provider : 'Z',
        address: '303 Remuera Rd, Remuera'
      }
    },
    '98': {
      price: '$2.34',
      station: {
        position: {
          lat: -36.912091,
          lng: 174.675497
        },
        provider : 'BP',
        address: '26/28 Titirangi Rd, New Lynn'
      }
    },
    '95': {
      price: '$2.48',
      station: {
        position: {
          lat: -36.763782,
          lng: 174.756386
        },
        provider : 'Z',
        address: '151 E Coast Rd, Milford'
      }
    },
    'diesel': {
      price: '$1.67',
      station: {
        position: {
          lat: -36.867017,
          lng: 174.774982
        },
        provider : 'Mobil',
        address: '433 Khyber Pass Rd, Newmarket'
      }
    }
  }

function getPrices() {
    return bestPrice
}

module.exports = {
    getPrices
}
