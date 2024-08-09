module.exports = {
  ci: {
    assert: {
      assertions: {
        'largest-contentful-paint': ['error', { maxNumericValue: 21000 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
