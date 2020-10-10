class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTree(value);

    const recurse = (bst) => {
      if (!bst.value && bst.value !== 0) {
        bst.value = node.value;
      } else if (bst.value > value && bst.left === null) {
        bst.left = node;
      } else if (bst.value > value) {
        recurse(bst.left);
      } else if (bst.value < value && bst.right === null) {
        bst.right = node;
      } else if (bst.value < value) {
        recurse(bst.right);
      }
    };

    recurse(this);
  }

  contains(value) {
    let doesContain = false;

    const recurse = (bst) => {
      if (bst.value === value) {
        doesContain = true;
      } else if (bst.left !== null && value < bst.value) {
        recurse(bst.left);
      } else if (bst.right !== null && value > bst.value) {
        recurse(bst.right);
      }
    };

    recurse(this);
    return doesContain;
  }

  depthFirstLog(callback, order = 'pre-order') {
    const recurse = (bst) => {
      if (order === 'pre-order') {
        callback.call(bst, bst.value);
      }

      if (bst.left !== null) {
        recurse(bst.left);
      }

      if (order === 'in-order') {
        callback.call(bst, bst.value);
      }

      if (bst.right !== null) {
        recurse(bst.right);
      }

      if (order === 'post-order') {
        callback.call(bst, bst.value);
      }
    };

    recurse(this);
  }
}

module.exports = BinarySearchTree;
