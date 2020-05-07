const {program} = require('commander');
const AnagramFileParser = require('./AnagramFileParser');

program
    .version('1.0.0')
    .arguments('<file>')
    .action((file) => {
      AnagramFileParser
          .parse(file)
          .then((anagrams) => {
            console.table(anagrams.map((set) => {
              return [...set];
            }));
          });
    })
    .parse(process.argv);
