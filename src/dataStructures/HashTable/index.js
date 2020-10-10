// the bucketing hash map
// refactored from https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4
class HashTable {
  constructor(size = 8) {
    this._storage = [];
    this._count = 0;
    this._limit = size;
  }

  insert(key, value) {
    //create an index for our storage location by passing it through our hashing function
    const index = this.hashFunc(key, this._limit);
    //retrieve the bucket at this particular index in our storage, if one exists
    //[[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
    var bucket = this._storage[index];
    //does a bucket exist or do we get undefined when trying to retrieve said index?
    if (!bucket) {
      //create the bucket
      var bucket = [];
      //insert the bucket into our hashTable
      this._storage[index] = bucket;
    }

    var override = false;
    //now iterate through our bucket to see if there are any conflicting
    //key value pairs within our bucket. If there are any, override them.
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        //overide value stored at this key
        tuple[1] = value;
        override = true;
      }
    }

    if (!override) {
      //create a new tuple in our bucket
      //note that this could either be the new empty bucket we created above
      //or a bucket with other tupules with keys that are different than
      //the key of the tuple we are inserting. These tupules are in the same
      //bucket because their keys all equate to the same numeric index when
      //passing through our hash function.
      bucket.push([key, value]);
      this._count++;
      //now that we've added our new key/val pair to our storage
      //let's check to see if we need to resize our storage
      if (this._count > this._limit * 0.75) {
        this.resize(this._limit * 2);
      }
    }
    return this;
  }

  remove(key) {
    var index = this.hashFunc(key, this._limit);
    var bucket = this._storage[index];
    if (!bucket) {
      return null;
    }
    //iterate over the bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //check to see if key is inside bucket
      if (tuple[0] === key) {
        //if it is, get rid of this tuple
        bucket.splice(i, 1);
        this._count--;
        if (this._count < this._limit * 0.25) {
          this._resize(this._limit / 2);
        }
        return tuple[1];
      }
    }
  }

  retrieve(key) {
    const index = this.hashFunc(key, this._limit);
    const bucket = this._storage[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  }

  hashFunc(str, max) {
    return [...str].reduce((acc, letter) => {
      acc = (acc << 5) + letter.charCodeAt(0);
      acc = (acc & acc) % max;
      return acc;
    }, 0);
  }

  resize(newLimit) {
    const oldStorage = this._storage;

    this._limit = newLimit;
    this._count = 0;
    this._storage = [];

    oldStorage.forEach((bucket) => {
      if (!bucket) {
        return;
      }

      bucket.forEach((tuple) => {
        this.insert(tuple[0], tuple[1]);
      });
    });
  }

  retrieveAll() {
    return this._storage;
  }
}

module.exports = HashTable;
