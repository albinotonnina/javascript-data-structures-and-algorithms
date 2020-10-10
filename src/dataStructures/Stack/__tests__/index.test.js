const Stack = require('../index');

describe('Stack', () => {
  it('should push and pop and peek...', () => {
    const stack = new Stack();

    stack.push(1);

    stack.push(2);

    stack.push(3);

    expect(stack.print()).toEqual('1 2 3');

    expect(stack.length()).toEqual(3);

    expect(stack.peek()).toEqual(3);

    expect(stack.pop()).toEqual(3);

    expect(stack.print()).toEqual('1 2');

    expect(stack.pop()).toEqual(2);

    expect(stack.length()).toEqual(1);

    expect(stack.pop()).toEqual(1);

    expect(stack.print()).toEqual('');

    expect(stack.peek()).toBeUndefined();

    expect(stack.pop()).toBeUndefined();
  });
});
