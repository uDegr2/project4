const uiHandler = require('./uiHandler.js');

test('Testing the function', () => {
    expect(uiHandler.updateUI).toBeInstanceOf(Function);
})