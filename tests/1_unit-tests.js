const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){
  // convertHandler should correctly read a whole number input.
  // convertHandler should correctly read a decimal number input.
  // convertHandler should correctly read a fractional input.
  // convertHandler should correctly read a fractional input with a decimal.
  // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.

  suite('The number', ()=> {
    suite('read a whole number', ()=> {
      assert.strictEqual(convertHandler.getNum('2mi'), 2)
      assert.strictEqual(convertHandler.getNum('30kg'), 30)
      assert.strictEqual(convertHandler.getNum('21l'), 21)
    })
    test('read a decimal number', ()=> {
      assert.strictEqual(convertHandler.getNum('2.1mi'), 2.1)
      assert.strictEqual(convertHandler.getNum('3.3kg'), 3.3)
      assert.strictEqual(convertHandler.getNum('21.36l'), 21.36)
    })

    test('read a fractional input', ()=> {
      assert.strictEqual(convertHandler.getNum('1/2mi'), 0.5)
      assert.strictEqual(convertHandler.getNum('2/5kg'), 0.4)
      assert.strictEqual(convertHandler.getNum('1/3l'),1/3)
    })

    test('read a fractional input with a decimal', ()=> {
      assert.strictEqual(convertHandler.getNum('2.2/2mi'), 1.1)
    })

    test('return an error on a double-fraction', ()=> {
      assert.strictEqual(convertHandler.getNum('1/2/2mi'), null)
    });

    test('default to a numerical input of 1 when no numerical input is provided', ()=> {
      assert.strictEqual(convertHandler.getNum('kg'), 1)
    })
  });

  suite('The Unit', ()=> {
    // convertHandler should correctly read each valid input unit.
    // convertHandler should correctly return an error for an invalid input unit.
    // convertHandler should return the correct return unit for each valid input unit.
    // convertHandler should correctly return the spelled-out string unit for each valid input unit.

    test('mi', ()=> {
      assert.strictEqual(convertHandler.getUnit('1/2mi'), 'mi')
    })
    test('kg', ()=> {
      assert.strictEqual(convertHandler.getUnit('10kg'), 'kg')
    })
    test('lbs', ()=> {
      assert.strictEqual(convertHandler.getUnit('4.5lbs'), 'lbs')
    })
    test('gal', ()=> {
      assert.strictEqual(convertHandler.getUnit('3GAL'), 'gal')
    })
    test('km', ()=> {
      assert.strictEqual(convertHandler.getUnit('1/4km'), 'km')
    })

    test('L', ()=> {
      assert.strictEqual(convertHandler.getUnit('2L'), 'L')
    })
  })

  suite('Unit Conversion', ()=> {
    // convertHandler should correctly convert gal to L.
    // convertHandler should correctly convert L to gal.
    // convertHandler should correctly convert mi to km.
    // convertHandler should correctly convert km to mi.
    // convertHandler should correctly convert lbs to kg.
    // convertHandler should correctly convert kg to lbs

    test('gal to L', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L')
    })
    test('L to gal', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal')
    })
    test('mi to km', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km')
    })
    test('km to mi', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi')
    })
    test('lbs to kg', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg')
    })
    test('kg to lbs', ()=> {
      assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs')
    })

    test('kg to kilograms', ()=> {
      assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms')
    })

    test('3kg to lbs', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'kg'), 6.61387)
    })
    test('3lbs to kg', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'lbs'), 1.36078)
    })
    test('3km to mi', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'km'), 1.86412)
    })
    test('3mi to km', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'mi'), 4.82802)
    })
    test('3gal to L', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'gal'), 11.35623)
    })
    test('3L to gal', ()=> {
      assert.strictEqual(convertHandler.convert(3, 'L'), 0.79252)
    })
   
  })

   

  
});