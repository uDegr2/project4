const formHandler = require('./formHandler.js');

test('Testing the function', () => {
    expect(formHandler.handleSubmit).toBeInstanceOf(Function);
})

