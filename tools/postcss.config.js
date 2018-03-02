module.exports = {
  plugins: {
    'postcss-use': {
      modules: [
        'postcss-short',
        'postcss-inline-svg',
        'postcss-clearfix'
      ]
    },
    'postcss-cssnext': {},
    'postcss-assets': {
      relative: true
    },
    'postcss-reporter': {
      clearAllMessages: true
    }
  }
};
