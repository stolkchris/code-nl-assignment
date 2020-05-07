const AnagramFileParser = require('./AnagramFileParser');
const {expect} = require('chai');

const controlGroup = [
  new Set(['Amsterdam', 'Erdamamst']),
  new Set(['Arnhem', 'Hemarn']),
  new Set(['Damrotter', 'Rotterdam', 'Terdamrot']),
  new Set(['Paris', 'Rispa', 'Spari']),
];

const runTest = (file) => {
  AnagramFileParser
      .parse(file)
      .then((testData) => {
        expect(testData).to.eql(controlGroup);

        console.log(`++++ TESTING FILE ${file} ++++`);
        console.log('==== EXPECTED RESULT ==== ');
        console.table(controlGroup.map((set) => [...set]));
        console.log('==== ACTUAL RESULT ==== ');
        console.table(testData.map((set) => [...set]));
      }).catch(console.log);
};

describe('Anagram file tests', () => {
  it('Groups and sorts correctly using list1.txt', () => {
    runTest('./assets/list1.txt');
  });

  it('Groups and sorts correctly using list2.txt', () => {
    runTest('./assets/list2.txt');
  });
});
