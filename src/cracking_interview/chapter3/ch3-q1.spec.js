import * as classes from './ch3-q1';

for (let key in classes) {
  let Stack = classes[key];

  let thisStack;

  describe('ch3-q1: ' + key, function () {
    beforeEach(function () {
      thisStack = new Stack();
    });

    it('can push and pop values from middle stack correctly', function () {
      let stack = [];
      for (let i = 1; i < 100; i += 4) {
        let val = Math.trunc(Math.random() * 999999);
        thisStack.push(2, val);
        stack.push(val);
      }

      stack.reverse().forEach((v) => expect(thisStack.pop(2)).toBe(v));
    });

    it('can push, peek and pop values from all 3 stacks correctly', function () {
      let stacks = [[], [], []];
      for (let j = 9; j > 0; --j) {
        for (let i = 1; i <= 3; ++i) {
          let val = i * 10 + j;
          thisStack.push(i, val);
          stacks[i - 1].push(val);
          expect(thisStack.peek(i)).toBe(val);
        }
      }

      for (let i = 1; i <= 3; ++i) {
        stacks[i - 1]
          .reverse()
          .forEach((v) => expect(thisStack.pop(i)).toBe(v));
        expect(thisStack.isEmpty(i)).toBe(true);
      }
    });
  });
}
