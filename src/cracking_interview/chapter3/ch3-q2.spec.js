import * as classes from './ch3-q2';

for (let key in classes) {
  let Stack = classes[key];
  let thisStack;
  describe('ch3-q2: ' + key, function () {
    beforeEach(function () {
      thisStack = new Stack();
    });

    it('min is undefined when stack is empty', function () {
      expect(thisStack.isEmpty()).toBe(true);
      expect(thisStack.min()).toBeUndefined();
    });

    it('can push values in ascending order and min stays the same', function () {
      let values = [2, 4, 6, 8, 10, 12];

      values.forEach((v) => {
        thisStack.push(v);
        expect(thisStack.min()).toBe(2);
      });

      values.reverse().forEach((v) => {
        expect(thisStack.min()).toBe(2);
        expect(thisStack.pop()).toBe(v);
      });

      expect(thisStack.min()).toBeUndefined();
    });

    it('can push values in descending order and min is updated', function () {
      let values = [12, 10, 8, 6, 4, 2];

      values.forEach((v) => {
        thisStack.push(v);
        expect(thisStack.min()).toBe(v);
      });

      values.reverse().forEach((v) => {
        expect(thisStack.min()).toBe(v);
        expect(thisStack.pop()).toBe(v);
      });

      expect(thisStack.min()).toBeUndefined();
    });
  });
}
