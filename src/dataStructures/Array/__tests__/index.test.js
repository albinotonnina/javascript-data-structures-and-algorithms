const _Array = require('../index');

describe('Array', () => {
  it('should pass every expecation', () => {
    const array = new _Array();
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);

    expect(array.print()).toEqual('1 2 3 4');
    expect(array.search(3)).toEqual(2);
    expect(array.getAtIndex(2)).toEqual(3);
    expect(array.length()).toEqual(4);

    array.remove(3);

    expect(array.print()).toEqual('1 2 4');

    array.add(5);
    array.add(5);

    expect(array.print()).toEqual('1 2 4 5 5');
    array.remove(5);

    expect(array.print()).toEqual('1 2 4');
  });
});
