import * as classes from './ch3-q6';

for (let key in classes) {
  let AnimalShelter = classes[key];
  let thisObj;
  describe('ch3-q6: ' + key, function () {
    beforeEach(function () {
      thisObj = new AnimalShelter();
    });

    it('any returns whichever animal is in queue', function () {
      thisObj.enqueueCat('cat');
      expect(thisObj.dequeueAny()).toBe('cat');
      expect(thisObj.dequeueAny()).toBeUndefined();

      thisObj.enqueueDog('dog');
      expect(thisObj.dequeueAny()).toBe('dog');
      expect(thisObj.dequeueAny()).toBeUndefined();
    });

    it('returns animals in the right order', function () {
      for (let i = 0; i < 4; ++i) {
        thisObj.enqueueCat('cat' + i);
      }

      for (let i = 0; i < 4; ++i) {
        expect(thisObj.dequeueAny()).toBe('cat' + i);
      }
    });

    it('returns animals in alternating order when enqueued that way', function () {
      for (let i = 20; i > 0; --i) {
        if (i & 1) {
          thisObj.enqueueCat(i);
        } else {
          thisObj.enqueueDog(i);
        }
      }

      for (let i = 20; i > 0; --i) {
        expect(thisObj.dequeueAny()).toBe(i);
      }
    });

    it('correctly returns animals when enqueued alternating but dequeued one at a time', function () {
      for (let i = 20; i > 0; --i) {
        if (i & 1) {
          thisObj.enqueueCat(i);
        } else {
          thisObj.enqueueDog(i);
        }
      }

      for (let i = 20; i > 10; i -= 2) {
        expect(thisObj.dequeueDog()).toBe(i);
      }

      for (let i = 19; i > 10; i -= 2) {
        expect(thisObj.dequeueCat()).toBe(i);
      }

      for (let i = 10; i > 0; --i) {
        expect(thisObj.dequeueAny()).toBe(i);
      }
    });
  });
}
