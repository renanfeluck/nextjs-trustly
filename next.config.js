const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/static'),
  images: {
    domains: ['voliveira.s3-sa-east-1.amazonaws.com'],
  },
  webpack(config) {
    return config;
  },
});
