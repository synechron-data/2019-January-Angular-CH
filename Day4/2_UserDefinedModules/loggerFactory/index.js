const DBLogger = require('./DBLogger');
const FileLogger = require('./FileLogger');

module.exports.DBLFactory = {
    getInstance: function () {
        return new DBLogger();
    }
};

module.exports.FLFactory = {
    getInstance: function () {
        return new FileLogger();
    }
};