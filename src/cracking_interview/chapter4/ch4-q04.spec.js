import {Tree} from './helpers';
import * as funcs from './ch4-q04';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;

  describe('ch4-q04: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('returns true for null tree or root', function () {
      expect(func(null)).toBe(true);
      expect(func(thisTree)).toBe(true);
    });

    it('returns true for single node tree', function () {
      thisTree.add(10);
      expect(func(thisTree)).toBe(true);
    });

    it('returns false for left heavy tree', function () {
      thisTree.add(10);
      thisTree.add(9);
      thisTree.add(8);
      expect(func(thisTree)).toBe(false);
    });

    it('returns false with equal max height tree but uneven', function () {
      thisTree.add(10);
      thisTree.add(11);
      thisTree.add(12);
      thisTree.add(13);
      thisTree.add(9);
      thisTree.add(8);
      thisTree.add(7);
      expect(func(thisTree)).toBe(false);
    });

    it('returns true for larger balanced tree', function () {
      thisTree.add(8);
      expect(func(thisTree)).toEqual(true);
      thisTree.add(4);
      thisTree.add(12);
      expect(func(thisTree)).toBe(true);
      thisTree.add(2);
      thisTree.add(6);
      thisTree.add(10);
      thisTree.add(14);
      expect(func(thisTree)).toBe(true);
      thisTree.add(1);
      thisTree.add(3);
      thisTree.add(5);
      thisTree.add(7);
      expect(func(thisTree)).toBe(true);
      thisTree.add(9);
      thisTree.add(11);
      thisTree.add(13);
      thisTree.add(15);
      expect(func(thisTree)).toBe(true);
      thisTree.add(16);
      expect(func(thisTree)).toBe(true);
    });
  });
}
