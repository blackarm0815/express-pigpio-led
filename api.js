const cors = require('cors')
const Gpio = require('pigpio').Gpio;
const express = require('express')
const app = express()
app.use(cors());


// this creates variables that are connected to pins
const pin17 = new Gpio(17, {mode: Gpio.OUTPUT});


// this listens for messages for pin 17
app.get('/pin17', (req, res) => {
  //
  let pwmValue = 0;
  let response = {};
  //
  if (Object.prototype.hasOwnProperty.call(req.query, 'pwm')) {
    pwmValue = req.query['pwm'];
    pin17.pwmWrite(255 - pwmValue);
    response = {'pin17': pwmValue};
  }
  console.log(response);
  res.json(response);
});


// start the api
app.listen(8000, () => {
  console.clear();
  console.log('api listening on port 8000');
});

