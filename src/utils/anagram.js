const utils = {

  /**
   * Checks if target word is an anagram of the source word
   * @param {String} word
   * @param {String} source
   * @return {boolean}
   */
  isAnagram: (word, source) => {
    const wordMap = utils.getCharacterMap(utils.normalizeWord(word));
    const sourceMap = utils.getCharacterMap(utils.normalizeWord(source));

    for (const character in sourceMap) {
      if (wordMap[character] !== sourceMap[character]) {
        return false;
      }
    }

    return true;
  },

  /**
   * @param {String[]} words
   * @param {Boolean} sort
   * @return {Array<String[]>}
   */
  groupAnagrams: (words, sort = false) => {
    let anagrams = sort ? [...words].sort() : [...words];
    const groupedAnagrams = [];

    while (anagrams.length > 0) {
      const word = anagrams.shift();
      const collection = [word];

      anagrams = anagrams.filter((anagram) => {
        if (utils.isAnagram(anagram, word)) {
          collection.push(anagram);
          return false;
        }

        return true;
      });

      groupedAnagrams.push(collection);
    }

    return groupedAnagrams;
  },

  /**
   * Normalizes the word
   * @param {String} word
   * @return {string}
   */
  normalizeWord: (word) => {
    return word.replace(/[^\w]/g, '').trim().toLowerCase();
  },

  /**
   * Creates a charactermap from a string
   * @param {String} word
   * @return {{}}
   */
  getCharacterMap: (word) => {
    const map = {};
    for (const character of word) {
      map[character] = map[character] + 1 || 1;
    }

    return map;
  },
};

module.exports = utils;
