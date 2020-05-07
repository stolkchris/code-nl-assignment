const path = require('path');
const fs = require('fs');

/**
 * Class for reading files
 */
class FileReader {
  /**
   * Reads every line of the file into an array
   *
   * @param {String} file
   * @return {Promise<String[]>}
   */
  readIntoArray(file) {
    const filePath = path.resolve(file);

    if (!fs.existsSync(filePath)) {
      throw new Error(`${file} not found at path ${filePath}`);
    }

    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (error, content) => {
        if (error) {
          return reject(error);
        }

        resolve(content.split('\n'));
      });
    });
  }
}

module.exports = new FileReader;
