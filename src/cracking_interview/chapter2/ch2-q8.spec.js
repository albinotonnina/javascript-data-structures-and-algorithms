import * as helpers from './helpers';
import * as funcs from './ch2-q8';

for (let key in funcs) {
  let func = funcs[key];
  let thisList;

  describe('ch2-q8: ' + key, function () {
    beforeEach(function () {
      thisList = helpers.createLinkedList();
    });

    it('returns null with empty list', function () {
      expect(func(thisList.head)).toBeNull();
    });

    it('returns null when there is no loop', function () {
      helpers.push(thisList, 1, 2, 3, 4, 5, 6);
      expect(func(thisList.head)).toBeNull();
    });

    it('returns node when there is a loop 1', function () {
      helpers.push(thisList, 1, 2, 3, 4, 5, 6);
      let node = thisList.head;
      thisList.tail.next = node;
      expect(func(thisList.head)).toBe(node);
    });

    it('returns node when there is a loop 2', function () {
      helpers.push(thisList, 1, 2, 3, 4, 5, 6);
      let node = thisList.head.next.next.next;
      thisList.tail.next = node;
      expect(func(thisList.head)).toBe(node);
    });

    it('returns node when there is a loop 3', function () {
      helpers.push(thisList, 1, 2, 3, 4, 5, 6);
      let node = thisList.tail;
      thisList.tail.next = node;
      expect(func(thisList.head)).toBe(node);
    });
  });
}
