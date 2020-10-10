# ⚗️ Queue

## Definition

> A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the Queue will be the first one to be removed. From Wikipedia

As for the Stack data structure, a peek operation is often added to the Queue data structure. It returns the value of the front element without dequeuing it.

### Complexity

Average

| Access | Search | Insertion | Deletion |
| ------ | :----: | --------: | -------: |
| O(n)   |  O(n)  |      O(1) |     O(n) |

### Rapresentation

![Array Rapresentation](https://img.ziggi.org/IQfLwNxW.png)

### Code

[check the code](index.js) and the [test](__tests__/index.test.js)
