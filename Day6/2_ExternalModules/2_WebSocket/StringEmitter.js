const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        this.run();
    }

    run() {
        setInterval(() => {
            var str = (function () {
                const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
                return strArr[Math.floor(Math.random() * strArr.length)];
            })();
            this.emit('data', str);
        }, 2000);
    }
}

module.exports = StringEmitter;