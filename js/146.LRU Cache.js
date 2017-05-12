/**
 * @constructor
 */
//Runtime beats 32.20 % of javascript submissions.
var LRUCache = function(capacity) {
    this.keyArray = [];
    this.len = capacity;
    this.repository = new Object({});
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    // for(var i =0; i < this.keyArray.length; i++){
    //     if(key === this.keyArray[i]) break;
    // }
    // if(i < this.keyArray.length) {
    //     return this.repository[i];
    // }
    var index = this.keyArray.indexOf(key);
    if(index > -1) {
        this.keyArray.splice(index, 1);
        this.keyArray.push(key);
        return this.repository[key];
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    var index = this.keyArray.indexOf(key);
    if(index > -1) {
        this.keyArray.splice(index, 1);
        this.keyArray.push(key);
        this.repository[key] = value;
    } else {
        if(this.keyArray.length === this.len){
            var itemDelete = this.keyArray.shift();
            delete this.repository[itemDelete];
            this.keyArray.push(key);
            this.repository[key] = value;
        } else {
                this.keyArray.push(key);
                this.repository[key] = value;
        }
    }
};
