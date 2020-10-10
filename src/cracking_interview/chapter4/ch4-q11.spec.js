import * as classes from './ch4-q11';

function runSampling(values, obj, samples) {
  for (let i = 0; i < samples; ++i) {
    let val = obj.randomNode().val;
    values[val - 1] = true;
  }
}

for (let key in classes) {
  let Class = classes[key];
  let thisObj;
  describe('ch4-q11: ' + key, function () {
    beforeEach(function () {
      thisObj = new Class();
    });

    it('returns single number when only one item in tree', function () {
      thisObj.insert(1);
      expect(thisObj.randomNode().val).toBe(1);
      expect(thisObj.randomNode().val).toBe(1);
      expect(thisObj.randomNode().val).toBe(1);
    });
    [
      {
        desc: 'balanced',
        values: [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15],
      },
      {
        desc: 'left imbalanced',
        values: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      },
      {
        desc: 'right imbalanced',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      },
      {
        desc: 'random',
        values: [3, 15, 2, 1, 8, 4, 5, 7, 6, 14, 13, 12, 10, 11, 9],
      },
    ].forEach((context) => {
      describe(`with ${context.desc} tree`, function () {
        beforeEach(function () {
          context.values.forEach((v) => thisObj.insert(v));
        });

        it('returns random number in range', function () {
          expect(thisObj.randomNode().val).toBeGreaterThanOrEqual(1);
          expect(thisObj.randomNode().val).toBeLessThanOrEqual(15);
        });

        it('returns all numbers in range over 1000 calls', function () {
          let gotValue = new Array(15).fill(false);
          runSampling(gotValue, thisObj, 1000);
          expect(gotValue.every((v) => v)).toBe(true);
        });

        it('returns valid numbers in range over 1000 calls where deletions are done', function () {
          let pickedValues;

          thisObj.delete(1);
          pickedValues = new Array(15).fill(false);
          runSampling(pickedValues, thisObj, 1000);
          expect(pickedValues).toEqual([
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ]);

          thisObj.delete(8);
          pickedValues = new Array(15).fill(false);
          runSampling(pickedValues, thisObj, 1000);
          expect(pickedValues).toEqual([
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ]);

          thisObj.delete(12);
          pickedValues = new Array(15).fill(false);
          runSampling(pickedValues, thisObj, 1000);
          expect(pickedValues).toEqual([
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
          ]);
        });
      });
    });
  });
}
