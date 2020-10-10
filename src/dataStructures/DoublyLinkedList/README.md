# ⚗️ Doubly Linked List

## Definition

> A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. From Wikipedia

Having two node links allow traversal in either direction but adding or removing a node in a doubly linked list requires changing more links than the same operations on a Singly Linked List.

### Complexity

Average

| Access | Search | Insertion | Deletion |
| ------ | :----: | --------: | -------: |
| O(N)   |  O(n)  |      O(1) |     O(1) |

### Rapresentation

![Array Rapresentation](https://img.ziggi.org/QN0RgqF3.png)

### Code

[check the code](index.js) and the [test](__tests__/index.test.js)
