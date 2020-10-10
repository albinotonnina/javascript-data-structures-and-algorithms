import * as helpers from './helpers';
import * as funcs from './ch4-q09';

for (let key in funcs) {
  let func = funcs[key];
  let thisTree;
  describe('ch4-q09: ' + key, function () {
    beforeEach(function () {
      thisTree = new helpers.Tree();
    });

    it('returns correct permutations for single node tree', function () {
      thisTree.add(1);
      expect(func(thisTree)).toEqual([[1]]);
    });

    it('returns correct permutations for 3 node tree', function () {
      [2, 1, 3].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toEqual([
        [2, 1, 3],
        [2, 3, 1],
      ]);
    });

    it('returns correct permutations for 5 node tree', function () {
      [4, 2, 3, 1, 5].forEach((v) => thisTree.add(v));
      expect(func(thisTree)).toEqual([
        [4, 2, 1, 3, 5],
        [4, 2, 1, 5, 3],
        [4, 2, 5, 1, 3],
        [4, 5, 2, 1, 3],
        [4, 2, 3, 1, 5],
        [4, 2, 3, 5, 1],
        [4, 2, 5, 3, 1],
        [4, 5, 2, 3, 1],
      ]);
    });
  });
}
