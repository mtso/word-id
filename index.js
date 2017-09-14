const data = require('./words');
const rand = require('crypto').randomBytes;

const generate = (seed) => {
  return new Promise((resolve, reject) => {
    const mapBuffer = (err, buf) => {
      if (err) { reject(err); }

      let i = (buf[0] << 9) | (buf[1] << 1) | (buf[2] >> 7);
      
      // clip off used left-most significant bit
      let clipped = buf[2] & 127;
      let j = (clipped << 10 | buf[3] << 2 | buf[4] >> 6);

      resolve(data[i] + '-' + data[j]);
    };

    if (!!seed) {
      const buffer = Buffer.from(seed);
      mapBuffer(null, buffer);
    } else {
      rand(5, mapBuffer);
    }
  })
};

module.exports = generate;
