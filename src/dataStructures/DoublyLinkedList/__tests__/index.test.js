const DoublyLinkedList = require('../index');

describe('DoublyLinkedList', () => {
  it('add, remove, travers, insertAfter', () => {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.print()).toEqual('');

    doublyLinkedList.add(1);

    doublyLinkedList.add(2);

    doublyLinkedList.add(3);

    doublyLinkedList.add(4);

    expect(doublyLinkedList.print()).toEqual('1 2 3 4');

    expect(doublyLinkedList.length()).toEqual(4);

    doublyLinkedList.remove(3); // remove value

    expect(doublyLinkedList.print()).toEqual('1 2 4');

    doublyLinkedList.remove(9); // remove non existing value

    expect(doublyLinkedList.print()).toEqual('1 2 4');

    doublyLinkedList.remove(1); // remove head

    expect(doublyLinkedList.print()).toEqual('2 4');

    doublyLinkedList.remove(4); // remove tail

    expect(doublyLinkedList.print()).toEqual('2');

    expect(doublyLinkedList.length()).toEqual(1);

    doublyLinkedList.remove(2); // remove tail, the list should be empty

    expect(doublyLinkedList.print()).toEqual('');

    expect(doublyLinkedList.length()).toEqual(0);

    doublyLinkedList.add(2);

    doublyLinkedList.add(6);

    expect(doublyLinkedList.print()).toEqual('2 6');

    doublyLinkedList.insertAfter(3, 2);

    expect(doublyLinkedList.print()).toEqual('2 3 6');

    doublyLinkedList.traverseReverse(function (node) {
      console.log(node.data);
    });

    doublyLinkedList.insertAfter(4, 3);

    expect(doublyLinkedList.print()).toEqual('2 3 4 6');

    doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node

    expect(doublyLinkedList.print()).toEqual('2 3 4 6');

    doublyLinkedList.insertAfter(5, 4);

    doublyLinkedList.insertAfter(7, 6); // insertAfter the tail

    expect(doublyLinkedList.print()).toEqual('2 3 4 5 6 7');

    doublyLinkedList.add(8); // add node with normal method

    expect(doublyLinkedList.print()).toEqual('2 3 4 5 6 7 8');

    expect(doublyLinkedList.length()).toEqual(7);

    doublyLinkedList.traverse(function (node) {
      node.data = node.data + 10;
    });

    expect(doublyLinkedList.print()).toEqual('12 13 14 15 16 17 18');

    const outputTraverse = [];

    doublyLinkedList.traverse(function (node) {
      outputTraverse.push(node.data);
    });

    expect(doublyLinkedList.length()).toEqual(7);

    expect(outputTraverse.join(' ')).toEqual('12 13 14 15 16 17 18');

    const outputTraverseReverse = [];

    doublyLinkedList.traverseReverse(function (node) {
      outputTraverseReverse.push(node.data);
    });

    expect(doublyLinkedList.length()).toEqual(7);

    expect(outputTraverseReverse.join(' ')).toEqual('18 17 16 15 14 13 12');
  });
});
