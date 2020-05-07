const fs = require('fs');
const FileReader = require('./FileReader');
const {describe, it} = require('mocha');
const {assert, expect} = require('chai');

describe('FileReader', () => {
  it('Reads data into array', () => {
    const promise = FileReader.readIntoArray('./assets/list1.txt');

    expect(promise).to.be.a('Promise');

    promise.then((data) => {
      expect(data).to.be.a('array');
      assert(data.length > 0, 'Array is filled with strings');
    });
  });

  it('Read all lines from source file', () => {
    const path = './assets/list1.txt';
    const controlData = fs.readFileSync('./assets/list1.txt')
        .toString()
        .split('\n');

    FileReader.readIntoArray(path).then((data) => {
      expect(data).to.eql(controlData);
    });
  });

  it('Throws an error if 404', () => {
    expect(() => {
      FileReader.readIntoArray('idontexist.tld');
    }).to.throw();
  });
});
