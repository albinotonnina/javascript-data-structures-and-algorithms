import {Tree} from './helpers';
import * as funcs from './ch4-q12';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;
  describe('ch4-q12: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('throws an error if tree is null or empty', function () {
      expect(() => func(null, 10)).toThrowError(
        'tree must be valid and non-empty'
      );
      expect(() => func(thisTree)).toThrowError(
        'tree must be valid and non-empty'
      );
    });

    it('returns 0 when no paths sum to value', function () {
      [10, 9, 11, 8, 7, 6].forEach((v) => thisTree.add(v));
      expect(func(thisTree, 50)).toEqual(0);
      expect(func(thisTree, 5)).toEqual(0);
    });

    it('returns correct counts with balanced tree', function () {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((v) =>
        thisTree.add(v)
      );
      expect(func(thisTree, 1)).toBe(1);
      expect(func(thisTree, 5)).toBe(2);
      expect(func(thisTree, 10)).toBe(2);
      expect(func(thisTree, 11)).toBe(2);
    });

    it('returns correct counts with unbalanced tree', function () {
      [10, 8, 16, 4, 14, 22, 6, 12, 18, 5, 17, 19].forEach((v) =>
        thisTree.add(v)
      );
      expect(func(thisTree, 10)).toBe(2);
      expect(func(thisTree, 18)).toBe(3);
    });

    it('returns correct counts with lots of paths that equal value', function () {
      [50, 10, 80, 40, 70, 150, 20, 30].forEach((v) => thisTree.add(v));
      expect(func(thisTree, 50)).toBe(3);
      expect(func(thisTree, 150)).toBe(3);
    });
  });
}
