const data = require('./words');
const rand = require('crypto').randomBytes;

rand(6, (err, buf) => {
  if (err) { throw err; }

  let b = Buffer.alloc(1, 1)

  // let i = b[0]
  // let j = (i << 9) | (i << 1) | 1

  let i = (buf[0] << 9) | (buf[1] << 1) | (buf[2] >> 7)
  let clipped = buf[2] & 127 // clip off used left-most significant bit
  let j = (clipped << 10 | buf[3] << 2 | buf[4] >> 6)
  // b = 1
  // b = b << 6
  // b = b[0]
  // b[0] = b[0] << 8

  let most = (127 << 10) | (255 << 2) | (255 >> 6)

  console.log(i, j, most);
});
