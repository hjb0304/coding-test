
class RandomizedSet {
    constructor() {
        this.set = new Set();
    }

    insert(val) {
        if(!this.set.has(val)) this.set.add(val);
    }

    remove(val) {
        if(this.set.has(val)) this.delete(val);
    }

    getRandom() {
        return [...this.set][Math.floor(Math.random() * this.set.size)];
    }
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */