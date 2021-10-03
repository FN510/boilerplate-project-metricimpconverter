# [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)
## Installation

Node js required.


`$ npm install`

`$ npm start`

## API
### GET /api/convert?input={value}{unit}
- kg/lbs
- mi/km
- L/gal

e.g. /api/convert?input=4.8L

/api/convert?input=2.5/3mi
Response

`{"initNum":4.8,"initUnit":"L","returnNum":1.26803,"returnUnit":"gal","string":"4.8 litres converts to 1.26803 gallons"}`
