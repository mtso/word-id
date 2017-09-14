const expect = require('chai').expect;
const generate = require('.');

describe('word-id generate', () => {
  it('should be a Promise', () => {
    expect(generate()).to.be.instanceof(Promise);
  });

  it('should be string', (done) => {
    generate()
      .then((id) => {
        expect(id).to.be.a('string');
        done();
      })
      .catch((err) => {
        expect(err).to.be.null;
        done();
      });
  });

  it('should take random data', (done) => {
    generate('a')
      .then((id) => {
        expect(id).to.be.a('string');
        done();
      })
      .catch((err) => {
        expect(err).to.be.null;
        done();
      });
  });
});
