const SinglyLinkedList = require('../index');

describe('SinglyLinkedList', () => {
  it('add, remove, insertAfter and traverse a Single Linked List', () => {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.print()).toEqual('');

    singlyLinkedList.add(1);

    singlyLinkedList.add(2);

    singlyLinkedList.add(3);

    singlyLinkedList.add(4);

    expect(singlyLinkedList.print()).toEqual('1 2 3 4');

    expect(singlyLinkedList.length()).toEqual(4);

    singlyLinkedList.remove(3); // remove value

    expect(singlyLinkedList.print()).toEqual('1 2 4');

    singlyLinkedList.remove(9); // remove non existing value

    expect(singlyLinkedList.print()).toEqual('1 2 4');

    singlyLinkedList.remove(1); // remove head

    expect(singlyLinkedList.print()).toEqual('2 4');

    singlyLinkedList.remove(4); // remove tail

    expect(singlyLinkedList.print()).toEqual('2');

    expect(singlyLinkedList.length()).toEqual(1);

    singlyLinkedList.add(6);

    expect(singlyLinkedList.print()).toEqual('2 6');

    singlyLinkedList.insertAfter(3, 2);

    expect(singlyLinkedList.print()).toEqual('2 3 6');

    singlyLinkedList.insertAfter(4, 3);

    expect(singlyLinkedList.print()).toEqual('2 3 4 6');

    singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node

    expect(singlyLinkedList.print()).toEqual('2 3 4 6');

    singlyLinkedList.insertAfter(5, 4);

    singlyLinkedList.insertAfter(7, 6); // insertAfter the tail

    expect(singlyLinkedList.print()).toEqual('2 3 4 5 6 7');

    singlyLinkedList.add(8); // add node with normal method

    expect(singlyLinkedList.print()).toEqual('2 3 4 5 6 7 8');

    expect(singlyLinkedList.length()).toEqual(7);

    singlyLinkedList.traverse(function (node) {
      node.data = node.data + 10;
    });

    expect(singlyLinkedList.print()).toEqual('12 13 14 15 16 17 18');

    let output = [];
    singlyLinkedList.traverse(function (node) {
      output.push(node.data);
    });

    expect(output.join(' ')).toEqual('12 13 14 15 16 17 18');

    expect(singlyLinkedList.length()).toEqual(7);
  });
});
