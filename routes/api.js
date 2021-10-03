'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert/', (req, res) => {
    let result;
    let input = req.query.input;
    if (input) {
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let string =convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if (initNum && returnUnit) {
        res.json({
          'initNum': initNum,
          'initUnit':initUnit,
          'returnNum': returnNum,
          'returnUnit': returnUnit,
          'string': string
        });
      } else if (!initNum && !returnUnit){
        res.send('invalid number and unit')
      } else if (!initNum){
        res.send('invalid number')
      } else {
        res.send('invalid unit')
      }
    }
  });

};
