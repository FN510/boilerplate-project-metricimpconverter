function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.split('/').length>2) {
      return null;
    }
    let result = input.match('^[0-9\.\/]+')
    if (result == null) {
      return 1;
    }
    result = result[0]
    if (result.indexOf('/')>=0) {
      let ops = result.split('/')
      result = ops[0]/ops[1];
      
      // if(result.toString().split('.')[1].length>5) {
      //   result = parseFloat(result.toFixed(5))
      // }
    } else if (result.indexOf('.')>=0) {
      result = parseFloat(result)
      // if(result.toString().split('.')[1].length>1) {
      //   result = parseFloat(result.toFixed(5))
      // }
    } else {
      result = parseInt(result)
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match('[a-zA-Z]+$');
    if (!result) {
      return null;
    }
    result = result[0]
    
    return result.toLowerCase()=='l'?'L': result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {

    if (!initUnit) {
      return null
    }

    const map = {
      'kg': 'lbs',
      'lbs': 'kg',
      'gal': 'L',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
    }
    let result  = map[initUnit.toLowerCase()]|| null;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    const map = {
      'km': 'kilometers',
      'mi': 'miles',
      'gal': 'gallons',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'l': 'litres'
    }
    let result = map[unit.toLowerCase()]||null;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (!initNum || !initUnit) {
      return null
    }
    switch(initUnit.toLowerCase()) {
      case 'kg':
        result = initNum/lbsToKg;
        break;
      case 'l':
        result = initNum/galToL;
        break;
      
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      
      case 'mi':
        result = initNum*miToKm;
        break;

    case 'km':
        result = initNum/miToKm;
        break;
    
    case 'gal':
        result = initNum* galToL;
        break;
    
    default: 
      result = null;
      break;
    }
    if(result) {
      result = parseFloat(result.toFixed(5))
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (!returnUnit) {
      return null;
    }
    let result = `${initNum} ${this.spellOutUnit(initUnit.toLowerCase())} converts to ${returnNum} ${this.spellOutUnit(returnUnit.toLowerCase())}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
