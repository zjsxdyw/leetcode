/**
 * @param {number} capacity
 */
//Runtime beats 76.67 % of javascript submissions.
var LRUCache = function(capacity) {
    this.len = capacity;
    this.count = 0;
    this.first = null;
    this.last = null;
    this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]) {
        this.setFirst(this.map[key]);
        return this.map[key].value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let now;
    if(this.map[key]) {
        this.map[key].value = value;
        this.setFirst(this.map[key]);
    } else {
        now = {key: key, value: value, next: this.first, pre: null};
        if(this.first) this.first.pre = now;
        else this.last = now;
        this.first = now;
        this.map[key] = now;
        this.count++;
        if(this.count > this.len) {
            delete this.map[this.last.key];
            this.count--;
            if(this.last && this.last.pre) this.last = this.last.pre;
            if(this.len === 1) this.last = now;
            this.last.next = null;
        }
    }
};
LRUCache.prototype.setFirst = function(now) {
    if(now === this.first) return;
    if(now.next && now.pre) {
        now.pre.next = now.next;
        now.next.pre = now.pre;
    }
    this.first.pre = now;
    now.next = this.first;
    this.first = now;
    if(this.last === now && now.pre) {
        this.last = now.pre;
        this.last.next = null;
    }
    now.pre = null;
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
