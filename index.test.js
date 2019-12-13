const makeCall = require('./index.js');
const formatData = require('./format.js');

jest.mock('./format.js', () => jest.fn().mockName('formatData'));

describe('test', () => {
  test('handleUpdates', () => {
    const testObject = {
      propOne: 1,
      propTwo: 2
    };

    makeCall.handleUpdates(testObject);

    // This fails because it expects the object formatData was called with to have a property called "extraField".
    // The "extraField" property was added after the call to formatData.
    expect(formatData).toHaveBeenCalledWith({
      propOne: 1,
      propTwo: 2,
      newField: 'test'
    })
  });
});