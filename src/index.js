/* istanbul-ignore */
const {program} = require('commander');
const AnagramFileParser = require('./AnagramFileParser');

program
    .version('1.0.0')
    .arguments('<file>')
    .action((file) => {
      AnagramFileParser
          .parse(file)
          .then((anagrams) => {
            console.table({
              'Unique words found': [anagrams.length],
              'Total words': [
                anagrams.map((set) => [...set]).join().split(',').length,
              ],
            });
            console.table(anagrams.map((set) => {
              return [...set];
            }));
          });
    })
    .parse(process.argv);
