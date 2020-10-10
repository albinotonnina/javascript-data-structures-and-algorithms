import {Tree} from './helpers';
import * as funcs from './ch4-q10';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree1;
  let thisTree2;

  describe('ch4-q10: ' + key, function () {
    beforeEach(function () {
      thisTree1 = new Tree();
      thisTree2 = new Tree();
    });

    it('throws an error if tree1 is null or empty', function () {
      expect(() => func(null, null)).toThrowError(
        'trees1 must be valid non-empty trees'
      );
      expect(() => func(null, thisTree2)).toThrowError(
        'trees1 must be valid non-empty trees'
      );
      expect(() => func(thisTree1, thisTree2)).toThrowError(
        'trees1 must be valid non-empty trees'
      );
      thisTree2.add(1);
      expect(() => func(thisTree1, thisTree2)).toThrowError(
        'trees1 must be valid non-empty trees'
      );
      expect(() => func(null, thisTree2)).toThrowError(
        'trees1 must be valid non-empty trees'
      );
    });

    it('returns true where tree2 is null or empty', function () {
      thisTree1.add(1);
      expect(func(thisTree1, null)).toBe(true);
      expect(func(thisTree1, thisTree2)).toBe(true);
    });

    it('returns right value for simple 3 node balanced tree', function () {
      [10, 9, 11].forEach((v) => thisTree1.add(v));
      thisTree2.root = thisTree1.root.left;
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = thisTree1.root.right;
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [10, 9, 11].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
    });

    it('returns false with two different trees', function () {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree1.add(v)
      );
      [20, 21, 1].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(false);
      thisTree2.root = null;
      [8, 2, 6].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(false);
      thisTree2.root = null;
      [11, 13, 6].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(false);
    });

    it('returns true with balanced tree were it is subtree', function () {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree1.add(v)
      );
      [2, 1, 3].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [12, 10, 14, 9, 11, 13, 15].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [3].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
    });

    it('returns true when is a subtree but there exists multiple possible roots', function () {
      [1, 8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree1.add(v)
      );
      [2, 1, 3].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      [3, 1, 3, 2, 3, 2, 3].forEach((v) => thisTree1.add(v));
      thisTree2.root = null;
      thisTree2.add(3);
      expect(func(thisTree1, thisTree2)).toBe(true);
    });

    it('returns false when tree2 is in tree1 but not a subtree (extra leaves)', function () {
      [1, 8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15, 2].forEach((v) =>
        thisTree1.add(v)
      );
      [2, 1, 3].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(false);
    });

    it('returns true with imbalanced tree were it is subtree', function () {
      [10, 8, 16, 4, 14, 22, 6, 12, 18, 5, 17, 19].forEach((v) =>
        thisTree1.add(v)
      );
      [4, 6, 5].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [8, 4, 6, 5].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [16, 14, 22, 12, 18, 17, 19].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [14, 12].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
      thisTree2.root = null;
      [22, 18, 17, 19].forEach((v) => thisTree2.add(v));
      expect(func(thisTree1, thisTree2)).toBe(true);
    });
  });
}
