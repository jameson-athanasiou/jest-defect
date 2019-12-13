const formatData = require('./format.js');

const handleUpdates = (input) => {
  const dataToFormat = {
    ...input,
    newField: 'test'
  };

  formatData(dataToFormat);

  dataToFormat.extraField = 7;

  return input;
};

module.exports = {
  handleUpdates
};

