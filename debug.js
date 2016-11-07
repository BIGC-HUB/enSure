var Queue = function() {
    // this.length = 0
    // this.head = null
    // this.tail = null
    this.data = []
}

Queue.prototype.ru = function (e) {
    this.data.push(e)
}

Queue.prototype.chu = function () {
    return this.data.splice(0,1)
}

var q = new Queue()
q.ru(1)
q.ru(2)
q.ru(3)
log( q.chu() )
