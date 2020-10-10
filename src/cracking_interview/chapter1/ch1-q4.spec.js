import * as funcs from './ch1-q4';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q4: ' + key, function () {
    it('returns false with null/undefined as input', function () {
      expect(func(undefined)).toBe(false);
      expect(func(null)).toBe(false);
    });

    it('returns true for an empty array', function () {
      expect(func([])).toBe(true);
    });
    [
      ' ',
      '   ',
      'aabb',
      'ab a b',
      ' a b a b ',
      'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
      'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
    ].forEach((arg) => {
      it(`returns true for palindromic string: '${arg}'`, function () {
        expect(func(arg.split(''))).toBe(true);
      });
    });
    ['abcadef', '1234567890', 'a b'].forEach((arg) => {
      it(`returns false for non-palindromic string: '${arg}'`, function () {
        expect(func(arg.split(''))).toBe(false);
      });
    });
  });
}
