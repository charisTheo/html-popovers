const million = require('million/compiler');
module.exports = {
  webpack: {
    plugins: { add: [million.webpack({
      optimize: false,
      mode: 'react',
      server: false,
      mute: false
    })] }
  }
};