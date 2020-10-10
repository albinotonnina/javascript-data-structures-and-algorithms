const Set = require('../index');

describe('Set', () => {
  it('should pass add, remove, union, difference, intersect, check subset, check length', () => {
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);

    expect(set.print()).toEqual('1 2 3 4');

    set.remove(3);
    expect(set.print()).toEqual('1 2 4');

    expect(set.contains(4)).toBeTruthy();
    expect(set.contains(3)).toBeFalsy();

    var set1 = new Set();
    set1.add(1);
    set1.add(2);
    var set2 = new Set();
    set2.add(2);
    set2.add(3);
    var set3 = set2.union(set1);
    expect(set3.print()).toEqual('1 2 3');
    var set4 = set2.intersect(set1);
    expect(set4.print()).toEqual('2');
    var set5 = set.difference(set3); // 1 2 4 diff 1 2 3
    expect(set5.print()).toEqual('4');
    var set6 = set3.difference(set); // 1 2 3 diff 1 2 4

    expect(set6.print()).toEqual('3');

    expect(set.isSubset(set1)).toBeTruthy();
    expect(set.isSubset(set2)).toBeFalsy();
    expect(set1.length()).toEqual(2);
    expect(set3.length()).toEqual(3);
  });
});
