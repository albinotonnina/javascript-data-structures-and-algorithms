import HashTable from '.';

describe('HashTable', () => {
  it('should pass every test', () => {
    var hashT = new HashTable();

    hashT.insert('Alex Hawkins', '510-599-1930');

    expect(hashT.retrieve('Alex Hawkins')).toEqual('510-599-1930');

    hashT.insert('Boo Radley', '520-589-1970');

    expect(hashT.retrieveAll()).toEqual([
      undefined,
      [['Boo Radley', '520-589-1970']],
      undefined,
      [['Alex Hawkins', '510-599-1930']],
    ]);

    hashT
      .insert('Vance Carter', '120-589-1970')
      .insert('Rick Mires', '520-589-1970')
      .insert('Tom Bradey', '520-589-1970')
      .insert('Biff Tanin', '520-589-1970');

    expect(hashT.retrieveAll()).toEqual([
      undefined,
      [
        ['Boo Radley', '520-589-1970'],
        ['Tom Bradey', '520-589-1970'],
      ],
      [['Vance Carter', '120-589-1970']],
      [
        ['Alex Hawkins', '510-599-1930'],
        ['Rick Mires', '520-589-1970'],
      ],
      undefined,
      undefined,
      [['Biff Tanin', '520-589-1970']],
    ]);

    //overide example (Phone Number Change)
    //
    hashT
      .insert('Rick Mires', '650-589-1970')
      .insert('Tom Bradey', '818-589-1970')
      .insert('Biff Tanin', '987-589-1970');

    expect(hashT.retrieveAll()).toEqual([
      undefined,
      [
        ['Boo Radley', '520-589-1970'],
        ['Tom Bradey', '818-589-1970'],
      ],
      [['Vance Carter', '120-589-1970']],
      [
        ['Alex Hawkins', '510-599-1930'],
        ['Rick Mires', '650-589-1970'],
      ],
      undefined,
      undefined,
      [['Biff Tanin', '987-589-1970']],
    ]);

    hashT.remove('Rick Mires');
    hashT.remove('Tom Bradey');

    expect(hashT.retrieveAll()).toEqual([
      undefined,
      [['Boo Radley', '520-589-1970']],
      [['Vance Carter', '120-589-1970']],
      [['Alex Hawkins', '510-599-1930']],
      undefined,
      undefined,
      [['Biff Tanin', '987-589-1970']],
    ]);

    hashT
      .insert('Dick Mires', '650-589-1970')
      .insert('Lam James', '818-589-1970')
      .insert('Ricky Ticky Tavi', '987-589-1970');

    expect(hashT.retrieveAll()).toEqual([
      undefined,
      undefined,
      [['Vance Carter', '120-589-1970']],
      [
        ['Alex Hawkins', '510-599-1930'],
        ['Dick Mires', '650-589-1970'],
        ['Lam James', '818-589-1970'],
      ],
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      [
        ['Boo Radley', '520-589-1970'],
        ['Ricky Ticky Tavi', '987-589-1970'],
      ],
      undefined,
      undefined,
      undefined,
      undefined,
      [['Biff Tanin', '987-589-1970']],
    ]);

    /* NOTICE HOW HASH TABLE HAS NOW DOUBLED IN SIZE UPON REACHING 75% CAPACITY ie 6/8. It is now size 16.
     */

    expect(hashT.retrieve('Lam James')).toEqual('818-589-1970'); //818-589-1970
    expect(hashT.retrieve('Dick Mires')).toEqual('650-589-1970'); //818-589-1970

    expect(hashT.retrieve('Lebron James')).toBeNull();
  });
});
