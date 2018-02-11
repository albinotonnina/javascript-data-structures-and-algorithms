import HashTable from '../'

describe('HashTable', () => {
  it('should pass every test', () => {
    var hashTable = new HashTable(3)
    hashTable.add('first', 1)
    hashTable.add('second', 2)
    hashTable.add('third', 3)
    hashTable.add('fourth', 4)
    hashTable.add('fifth', 5)
    expect(hashTable.print()).toEqual('2 4 1 3 5')
    expect(hashTable.length()).toEqual(5)
    expect(hashTable.search('second')).toEqual(2)

    hashTable.remove('fourth')
    hashTable.remove('first')
    expect(hashTable.print()).toEqual('2 3 5')
    expect(hashTable.length()).toEqual(3)
  })
})
