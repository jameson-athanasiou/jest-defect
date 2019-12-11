const makeCall = require('./index.js');
const formatData = require('./format.js');

jest.mock('./format.js', () => jest.fn().mockName('formatData'));

describe('test', () => {
  test('handleUpdates', async () => {
    const testObject = {
      propOne: 1,
      propTwo: 2
    };

    await makeCall.handleUpdates(testObject);
    expect(formatData).toHaveBeenCalledTimes(1)


    const results = formatData.mock.calls[0][0];
    console.log(results)
    expect(formatData).toHaveBeenCalledWith({
      propOne: 1,
      propTwo: 2,
      newField: 'test'
    })
  });
});