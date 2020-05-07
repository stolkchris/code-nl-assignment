const AnagramFileParser = require('./AnagramFileParser');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('AnagramFileParser', () => {
  it('Parses correctly', () => {
    const promise = AnagramFileParser.parse('./assets/list1.txt');
    expect(promise).to.be.a('Promise');

    promise.then((data) => {
      expect(data).to.be.a('array');
      expect(data.length).to.equal(4);
      expect(data[0]).to.be.a('Set');
    });
  });
});
