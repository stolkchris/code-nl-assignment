const FileReader = require('./FileReader');
const {groupAnagrams} = require('./utils/anagram');

/**
 * Parses anagram txt files
 */
class AnagramFileParser {
  /**
   * @param {String} file
   * @return {Promise<Array<Set<String>>>}
   */
  parse(file) {
    return new Promise((resolve, reject) => {
      FileReader
          .readIntoArray(file)
          .then((anagrams) => {
            const sets = groupAnagrams(anagrams, true).map((data) => {
              return new Set(data);
            });

            resolve(sets);
          })
          .catch(reject);
    });
  }
}

module.exports = new AnagramFileParser;
