import Bst from './';

describe('Binary Search Tree', () => {
  it('should be an instance of Bst', () => {
    const bst = new Bst();
    expect(bst).toBeInstanceOf(Bst);
  });

  describe('Insert', () => {
    it('should set root as 0', () => {
      const bst = new Bst(0);

      bst.insert(1);

      expect(bst.value).toEqual(0);
      expect(bst.left).toBeNull();
      expect(bst.right.value).toEqual(1);
    });

    it('should insert right', () => {
      const bst = new Bst();

      bst.insert(0);
      bst.insert(1);

      expect(bst.left).toBeNull();
      expect(bst.right.value).toEqual(1);
    });

    it('should insert left', () => {
      const bst = new Bst();

      bst.insert(2);
      bst.insert(1);

      expect(bst.left.value).toEqual(1);
      expect(bst.right).toBeNull();
    });

    it('should insert right', () => {
      const bst = new Bst();

      bst.insert(1);
      bst.insert(2);

      expect(bst.right.value).toEqual(2);
      expect(bst.left).toBeNull();
    });

    it('should insert correctly', () => {
      const bst = new Bst();

      bst.insert(5);
      bst.insert(1);
      bst.insert(3);
      bst.insert(7);
      bst.insert(9);
      bst.insert(16);

      expect(bst.left.value).toEqual(1);
      expect(bst.left.right.value).toEqual(3);
      expect(bst.right.value).toEqual(7);
      expect(bst.right.right.value).toEqual(9);
      expect(bst.right.right.right.value).toEqual(16);
    });
  });

  describe('Contain', () => {
    it('should return', () => {
      const bst = new Bst();
      bst.insert(1);
      bst.insert(5);
      bst.insert(6);
      bst.insert(99);
      bst.insert(999);

      expect(bst.contains(1)).toBeTruthy();
      expect(bst.contains(33)).toBeFalsy();
      expect(bst.contains(999)).toBeTruthy();
      expect(bst.contains(888)).toBeFalsy();
    });
  });

  describe('DepthFirstLog', () => {
    it('should traverse with method pre-order', () => {
      const bst = new Bst();
      const mockCallback = jest.fn();

      bst.insert(0);
      bst.insert(1);
      bst.insert(2);
      bst.insert(3);
      bst.insert(4);

      bst.depthFirstLog(mockCallback);

      expect(mockCallback.mock.calls.length).toBe(5);

      expect(mockCallback.mock.calls[0][0]).toBe(0);

      expect(mockCallback.mock.calls[1][0]).toBe(1);

      expect(mockCallback.mock.calls[2][0]).toBe(2);
      expect(mockCallback.mock.calls[3][0]).toBe(3);
      expect(mockCallback.mock.calls[4][0]).toBe(4);
    });

    it('should traverse with method in-order', () => {
      const bst = new Bst();
      const mockCallback = jest.fn();

      bst.insert(2);
      bst.insert(1);
      bst.insert(7);
      bst.insert(3);
      bst.insert(4);

      bst.depthFirstLog(mockCallback, 'in-order');

      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(2);
      expect(mockCallback.mock.calls[2][0]).toBe(3);
      expect(mockCallback.mock.calls[3][0]).toBe(4);
      expect(mockCallback.mock.calls[4][0]).toBe(7);
    });

    it('should traverse with method post-order', () => {
      const bst = new Bst();
      const mockCallback = jest.fn();

      bst.insert(2);
      bst.insert(1);
      bst.insert(7);
      bst.insert(3);
      bst.insert(4);

      bst.depthFirstLog(mockCallback, 'post-order');

      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(4);
      expect(mockCallback.mock.calls[2][0]).toBe(3);
      expect(mockCallback.mock.calls[3][0]).toBe(7);
      expect(mockCallback.mock.calls[4][0]).toBe(2);
    });
  });
});
