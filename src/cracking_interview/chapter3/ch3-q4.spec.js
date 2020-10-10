import * as classes from './ch3-q4';

for (let key in classes) {
  let Queue = classes[key];
  let thisQueue;
  describe('ch3-q4: ' + key, function () {
    beforeEach(function () {
      thisQueue = new Queue();
    });

    it('dequeue throws error when queue is empty', function () {
      expect(() => thisQueue.dequeue()).toThrowError('queue is empty');
    });

    it('can enqueue and dequeue items', function () {
      for (let i = 0; i < 10; ++i) {
        let j;
        for (j = 1; j <= 100; ++j) {
          thisQueue.enqueue(j);
        }
        for (j = 1; j <= 100; ++j) {
          expect(thisQueue.dequeue()).toBe(j);
        }
      }
    });

    it('can do alternating enqueue and dequeues', function () {
      thisQueue.enqueue(10);
      thisQueue.enqueue(20);
      thisQueue.enqueue(30);
      expect(thisQueue.dequeue()).toBe(10);
      thisQueue.enqueue(40);
      expect(thisQueue.dequeue()).toBe(20);
      expect(thisQueue.dequeue()).toBe(30);
      expect(thisQueue.dequeue()).toBe(40);
      thisQueue.enqueue(50);
      thisQueue.enqueue(60);
      thisQueue.enqueue(70);
      expect(thisQueue.dequeue()).toBe(50);
      expect(thisQueue.dequeue()).toBe(60);
      thisQueue.enqueue(80);
      expect(thisQueue.dequeue()).toBe(70);
      thisQueue.enqueue(90);
      expect(thisQueue.dequeue()).toBe(80);
      expect(thisQueue.dequeue()).toBe(90);
    });
  });
}
