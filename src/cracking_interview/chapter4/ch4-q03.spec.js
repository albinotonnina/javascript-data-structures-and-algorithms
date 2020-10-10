import {Tree} from './helpers';
import * as funcs from './ch4-q03';

function toArrayOfArrays(lists) {
  return lists.map((l) => l.toArray());
}

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;

  describe('ch4-q03: ' + key, function () {
    beforeEach(function () {
      thisTree = new Tree();
    });

    it('returns empty list for empty tree', function () {
      expect(toArrayOfArrays(func(thisTree))).toEqual([]);
    });

    it('returns true for single node tree', function () {
      thisTree.add(10);
      expect(toArrayOfArrays(func(thisTree))).toEqual([[10]]);
    });

    it('returns single value lists for left heavy tree', function () {
      [10, 9, 8].forEach((v) => thisTree.add(v));
      expect(toArrayOfArrays(func(thisTree))).toEqual([[10], [9], [8]]);
    });

    it('returns 2 value lists for upside down V shaped tree', function () {
      [10, 11, 12, 13, 9, 8, 7].forEach((v) => thisTree.add(v));
      expect(toArrayOfArrays(func(thisTree))).toEqual([
        [10],
        [9, 11],
        [8, 12],
        [7, 13],
      ]);
    });

    it('returns true for larger balanced tree', function () {
      let expected = [];
      thisTree.add(8);
      expected.push([8]);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
      thisTree.add(4);
      thisTree.add(12);
      expected.push([4, 12]);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
      thisTree.add(2);
      thisTree.add(6);
      thisTree.add(10);
      thisTree.add(14);
      expected.push([2, 6, 10, 14]);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
      thisTree.add(1);
      thisTree.add(3);
      thisTree.add(5);
      thisTree.add(7);
      expected.push([1, 3, 5, 7]);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
      thisTree.add(9);
      thisTree.add(11);
      thisTree.add(13);
      thisTree.add(15);
      expected[expected.length - 1].push(9, 11, 13, 15);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
      thisTree.add(16);
      expected.push([16]);
      expect(toArrayOfArrays(func(thisTree))).toEqual(expected);
    });
  });
}
