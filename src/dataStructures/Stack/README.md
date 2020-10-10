# ⚗️ Stack

## Definition

> A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out). From Wikipedia

A Stack often has a third method peek which allows to check the last pushed element without popping it.

### Complexity

Average

| Access | Search | Insertion | Deletion |
| ------ | :----: | --------: | -------: |
| O(n)   |  O(n)  |      O(1) |     O(1) |

### Rapresentation

![Array Rapresentation](https://img.ziggi.org/Fprzy1KL.jpg)

### Code

[check the code](index.js) and the [test](__tests__/index.test.js)
