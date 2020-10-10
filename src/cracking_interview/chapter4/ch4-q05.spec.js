import {Tree} from './helpers';
import * as funcs from './ch4-q05';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;
  describe('ch4-q05: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('throws error when tree is invalid', function () {
      expect(() => func(null)).toThrowError('invalid tree');
      expect(() => func(undefined)).toThrowError('invalid tree');
    });

    it('returns true for single node tree', function () {
      thisTree.add(11);
      expect(func(thisTree)).toBe(true);
    });

    it('returns true for larger BSTs', function () {
      // Tree class maintains BST property so this should be valid
      [100, 20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach((v) =>
        thisTree.add(v)
      );
      expect(func(thisTree)).toBe(true);
      [
        200,
        150,
        120,
        115,
        145,
        130,
        135,
        160,
        180,
        175,
        170,
        165,
        190,
      ].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      [220, 205, 210, 225, 230, 215, 240].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
    });

    it('returns true for BST with duplicate values', function () {
      // Tree class maintains BST property so this should be valid
      [10, 10].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      [5, 10, 15, 20, 0, 5].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      [20, 5, 25, 0].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      [25, 30, 1, 2, 3, 4, 5].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
    });

    it('returns correct value with simple trees', function () {
      [2, 1, 3].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      thisTree.root.left.val = 4;
      expect(func(thisTree)).toBe(false);

      thisTree.root = null;
      [100, 110, 120, 130].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toBe(true);
      thisTree.root.right.right.val = 100;
      expect(func(thisTree)).toBe(false);
    });

    it('returns false for larger trees that are not BSTs', function () {
      // Tree class maintains BST property so this should be valid
      [20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach((v) =>
        thisTree.add(v)
      );
      // now we need to invalidate BST
      thisTree.root.val = 50;
      expect(func(thisTree)).toBe(false);
      thisTree.root = null;
      [
        200,
        150,
        120,
        115,
        145,
        130,
        135,
        160,
        180,
        175,
        170,
        165,
        190,
      ].forEach((v) => thisTree.add(v));
      thisTree.root.left.left.val = 200;
      expect(func(thisTree)).toBe(false);
      thisTree.root.val = 100;
      expect(func(thisTree)).toBe(false);
      thisTree.root.left.right = 145;
      expect(func(thisTree)).toBe(false);
    });
  });
}
