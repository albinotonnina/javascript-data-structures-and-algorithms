import {Tree} from './helpers';
import * as funcs from './ch4-q06';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;

  describe('ch4-q06: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('throws an error if node is null', function () {
      expect(() => func(null)).toThrowError('node cannot be null');
    });

    it('returns undefined for root of single node tree', function () {
      thisTree.add(10);
      expect(func(thisTree.root)).toBeUndefined();
    });

    it('returns right value for simple 3 node balanced tree', function () {
      [10, 9, 11].forEach((v) => thisTree.add(v));
      expect(func(thisTree.root.left)).toBe(10);
      expect(func(thisTree.root)).toBe(11);
      expect(func(thisTree.root.right)).toBeUndefined();
    });

    it('returns correct values for larger balanced tree', function () {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree.add(v)
      );

      expect(func(thisTree.root.left.left.left)).toBe(2);
      expect(func(thisTree.root.left.left.right)).toBe(4);
      expect(func(thisTree.root.left.right.left)).toBe(6);
      expect(func(thisTree.root.left.right.right)).toBe(8);

      expect(func(thisTree.root.right.left.left)).toBe(10);
      expect(func(thisTree.root.right.left.right)).toBe(12);
      expect(func(thisTree.root.right.right.left)).toBe(14);
      expect(func(thisTree.root.right.right.right)).toBeUndefined();
    });
  });
}
