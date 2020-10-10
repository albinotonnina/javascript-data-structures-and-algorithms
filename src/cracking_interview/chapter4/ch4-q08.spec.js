import {Tree} from './helpers';
import * as funcs from './ch4-q08';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;

  describe('ch4-q08: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('throws an error if either node is null', function () {
      thisTree.add(1);
      expect(() => func(null, null)).toThrowError(
        'node1 and node2 must both be valid nodes'
      );
      expect(() => func(thisTree.root, null)).toThrowError(
        'node1 and node2 must both be valid nodes'
      );
      expect(() => func(null, thisTree.root)).toThrowError(
        'node1 and node2 must both be valid nodes'
      );
    });

    it('returns right value for simple 3 node balanced tree', function () {
      [10, 9, 11].forEach((v) => thisTree.add(v));
      expect(func(thisTree.root.left, thisTree.root.right)).toBe(10);
      expect(func(thisTree.root, thisTree.root.right)).toBe(10);
      expect(func(thisTree.root.left, thisTree.root)).toBe(10);
    });

    it('returns correct values for larger balanced tree', function () {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree.add(v)
      );

      expect(
        func(thisTree.root.left.left.left, thisTree.root.left.left.left)
      ).toBe(1);
      expect(
        func(thisTree.root.left.left.left, thisTree.root.left.left.right)
      ).toBe(2);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.left.left.left)
      ).toBe(2);

      expect(func(thisTree.root.left, thisTree.root.left)).toBe(4);
      expect(func(thisTree.root.left.left.right, thisTree.root.left)).toBe(4);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.left.right)
      ).toBe(4);
      expect(
        func(thisTree.root.left.left.left, thisTree.root.left.right.left)
      ).toBe(4);
      expect(
        func(thisTree.root.left.left.left, thisTree.root.left.right.right)
      ).toBe(4);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.left.right.left)
      ).toBe(4);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.left.right.right)
      ).toBe(4);

      expect(func(thisTree.root.left.left.right, thisTree.root)).toBe(8);
      expect(func(thisTree.root.left.left.right, thisTree.root.right)).toBe(8);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.right.right)
      ).toBe(8);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.right.left.left)
      ).toBe(8);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.right.left.right)
      ).toBe(8);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.right.right.left)
      ).toBe(8);
      expect(
        func(thisTree.root.left.left.right, thisTree.root.right.right.right)
      ).toBe(8);
    });
  });
}
