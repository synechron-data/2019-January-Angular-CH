const Logger = require('./Logger');
let instance;

module.exports.getInstance = function () {
    if (!instance)
        instance = new Logger();
    return instance;
};