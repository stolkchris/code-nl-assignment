const utils = require('./anagram');
const {expect} = require('chai');

describe('Anagram util functions', () => {
  it('Checks if anagram correctly', () => {
    expect(utils.isAnagram('test', 'tset')).to.equal(true);
    expect(utils.isAnagram('test', 'tseet')).to.equal(false);
    expect(utils.isAnagram('test', 'code')).to.equal(false);
    expect(utils.isAnagram('test', 'TTSE')).to.equal(true);
  });

  it('Groups anagrams correctly', () => {
    const controlGroup = [
      ['test', 'tset', 'etts'],
      ['code', 'cdoe', 'edoc'],
    ];

    const testGroup = utils.groupAnagrams(controlGroup.join().split(','));
    expect(testGroup).to.eql(controlGroup);
  });

  it('Normalizes words correctly', () => {
    const words = [
      ['non-Normalized    word', 'nonnormalizedword'],
      ['Some Other r-+andom w0rd', 'someotherrandomw0rd'],
    ];

    for (const [nonNormalized, normalized] of words) {
      expect(normalized).to.equal(utils.normalizeWord(nonNormalized));
    }
  });

  it('Extracts a character map correctly', () => {
    const word = 'codedotnl';
    const controlMap = {
      'c': 1,
      'o': 2,
      'd': 2,
      'e': 1,
      't': 1,
      'n': 1,
      'l': 1,
    };

    expect(controlMap).to.eql(utils.getCharacterMap(word));
  });
});
