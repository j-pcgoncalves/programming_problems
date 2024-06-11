class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    
    _hash(key) {
        let hash = 0;
        
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        
        return hash;
    }

    set(key, value) {
        let hash = this._hash(key);

        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        
        this.data[hash].push([key, value]);
    }

    get(key) {
        let hash = this._hash(key);

        return this.data[hash][1];
    }
};

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
