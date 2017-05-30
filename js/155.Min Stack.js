/**
 * initialize your data structure here.
 */
//Runtime beats 21.60 % of javascript submissions.
var MinStack = function() {
    this.min = Infinity;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x <= this.min) {
        this.stack.unshift(this.min);
        this.min = x;
    }
    this.stack.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.shift() === this.min) this.min = this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
