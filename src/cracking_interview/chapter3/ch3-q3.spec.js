import * as classes from './ch3-q3';

for (let key in classes) {
  let Stack = classes[key];
  let thisStack;
  describe('ch3-q3: ' + key, function () {
    beforeEach(function () {
      thisStack = new Stack(4);
    });

    it('constructor throws error when maxSize isnt passed in', function () {
      expect(() => new Stack()).toThrowError('maxSize argument is required');
    });

    it('can push 100 items and pop them in order', function () {
      let i;
      for (i = 1; i <= 100; ++i) {
        thisStack.push(i);
      }

      for (i = 100; i > 0; --i) {
        expect(thisStack.pop()).toBe(i);
      }
    });

    it('pop works correctly after using popAt to remove one from each stack', function () {
      let i;
      for (i = 1; i <= 16; ++i) {
        thisStack.push(i);
      }
      for (i = 4; i >= 1; --i) {
        expect(thisStack.popAt(i)).toBe(i * 4);
      }
      for (i = 16; i > 0; --i) {
        if (i % 4) {
          expect(thisStack.pop()).toBe(i);
        }
      }
    });

    it('can push 20 items and popAt to remove whole stacks worth of items from middle', function () {
      let i;
      for (i = 1; i <= 20; ++i) {
        thisStack.push(i);
      }

      for (i = 0; i < 9; ++i) {
        expect(thisStack.popAt(2)).toBe(8 + i);
      }

      [20, 19, 18, 17, 7, 6, 5, 4, 3, 2, 1].forEach((v) =>
        expect(thisStack.pop()).toBe(v)
      );
    });
  });
}
