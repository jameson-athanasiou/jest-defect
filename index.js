const formatData = require('./format.js');

const handleUpdates = async (input) => {
  const dataToFormat = {
    ...input,
    newField: 'test'
  };

  await formatData(dataToFormat);
  dataToFormat.anotherField = 7;
  return input;
};



module.exports = {
  handleUpdates
};

