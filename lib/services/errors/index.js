const fs = require('fs');
const path = require('path');

const requireAllFromDir = (dirPath, options) => {

  const { skipFiles = [], extFilter = [] } = options;
  const filesToExport = {};

  fs.readdirSync(dirPath).forEach((fileFullName) => {

    if (!skipFiles.includes(fileFullName)) {
      const fileBaseNme = path.basename(fileFullName, path.extname(fileFullName));
      const filePath = `${dirPath}/${fileFullName}`;

      if (!extFilter.length) {
        return filesToExport[fileBaseNme] = require(`${filePath}`);
      }

      if (extFilter.includes(path.extname(fileFullName))) {
        return filesToExport[fileBaseNme] = require(`${filePath}`);
      }
    }

    return true;
  });

  return filesToExport;
};

module.exports = requireAllFromDir(__dirname, {
  skipFiles: ['index.js'],
  extFilter: ['.js'],
});
