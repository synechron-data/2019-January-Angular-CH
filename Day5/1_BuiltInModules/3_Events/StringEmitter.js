const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor(){
        super();
        this.run();
    }

    run(){
        var self = this;
        setInterval(function () {
            var str = (function () {
                const strArr = ['NodeJS', 'jQuery', 'ExtJS', 'ReactJS', 'Angular'];
                return strArr[Math.floor(Math.random() * strArr.length)];
            })();

            console.log("Published...");
            self.emit('data', str);
        }, 2000);
    }

    getStringUsingCB(cb) {
        setInterval(function () {
            var str = (function () {
                const strArr = ['NodeJS', 'jQuery', 'ExtJS', 'ReactJS', 'Angular'];
                return strArr[Math.floor(Math.random() * strArr.length)];
            })();

            cb(str);
        }, 2000);
    }

    getString() {
        var str = (function () {
            const strArr = ['NodeJS', 'jQuery', 'ExtJS', 'ReactJS', 'Angular'];
            return strArr[Math.floor(Math.random() * strArr.length)];
        })();

        return str;
    }
}

module.exports = StringEmitter;