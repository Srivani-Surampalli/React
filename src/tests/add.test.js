const add=(a, b) => a + b
const greetingMessage = (name='Anonymous') => `Hello ${name}!`;

test('adding two numbers', () => {
    const  result = add(5,6); 
    expect(result).toBe(11);
    // if(result !== 11) {
    //     throw new Error(`added 5 & 6 , the result was ${result}, expected 11`);
    // }
});

test('Greeting message with name', () => {
    const message =greetingMessage('Smith');
    expect(message).toBe('Hello Smith!');

});

test('Greeting message with no name', () =>{
    const mess = greetingMessage();
    expect(mess).toBe('Hello Anonymous!');
})