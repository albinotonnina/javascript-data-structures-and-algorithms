import * as funcs from './ch1-q6'

for (let key in funcs) {
  let func = funcs[key]

  describe('ch1-q6: ' + key, function() {
    it('returns input where null/undefined', function() {
      expect(func(null)).toBeNull()
      expect(func(undefined)).toBeUndefined()
    })

    it('returns input where empty string', function() {
      expect(func('')).toBe('')
    })

    ;['a', 'aa', 'abc', 'aabbcc', 'ababababccab'].forEach(arg => {
      it(`returns input string where compression doesn't use less space: '${arg}'`, function() {
        expect(func(arg)).toEqual(arg)
      })
    })

    ;[
      {arg: 'aaa', out: '3a'},
      {arg: 'bbbbbb', out: '6b'},
      {arg: 'abbbbbbc', out: '1a6b1c'},
      {arg: 'aaabccc', out: '3a1b3c'},
      {arg: 'hhellllllllooooo!', out: '2h1e8l5o1!'},
      {arg: 'woorrrllllddddd', out: '1w2o3r4l5d'}
    ].forEach(context => {
      it(`returns ${context.out} with string ${context.arg}`, function() {
        expect(func(context.arg)).toEqual(context.out)
      })
    })
  })
}
