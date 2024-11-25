// // const message = require('./message.js');
// const message = require('./message');

// // console.log(message);
// // message.log("Hi from App");

// var e1 = new message.Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// const logger = require('./logger');
// // console.log(logger);
// logger.log("Hi");

// const loggerFactory = require('./loggerFactory');

// let dblogger = loggerFactory.DBLFactory.getInstance();
// dblogger.log("Hi");

// let fllogger = loggerFactory.FLFactory.getInstance();
// fllogger.log("Hi");

const loggerSingle = require('./loggerSingle');

var l1 = loggerSingle.getInstance();
var l2 = loggerSingle.getInstance();

console.log(l1 === l2);