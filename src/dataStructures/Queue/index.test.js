const Queue = require('./index');

describe('Queue', () => {
  it('should enqueu, dequeue and peek...', () => {
    const queue = new Queue();

    queue.enqueue(1);

    queue.enqueue(2);

    queue.enqueue(3);

    expect(queue.print()).toEqual('1 2 3');

    expect(queue.length()).toEqual(3);

    expect(queue.peek()).toEqual(1);

    expect(queue.dequeue()).toEqual(1);

    expect(queue.print()).toEqual('2 3');

    expect(queue.dequeue()).toEqual(2);

    expect(queue.length()).toEqual(1);

    expect(queue.dequeue()).toEqual(3);

    expect(queue.print()).toEqual('');

    expect(queue.peek()).toBeUndefined();

    expect(queue.dequeue()).toBeUndefined();
  });
});
