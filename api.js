const cors = require('cors')
const Gpio = require('pigpio').Gpio;
const express = require('express')

const app = express()
app.use(cors());

const led = new Gpio(17, {mode: Gpio.OUTPUT});

app.get('/pin17', (req, res) => {
  //
  let pwnValue = 0;
  let response = {};
  //
  if (Object.prototype.hasOwnProperty.call(req.query, 'pwm')) {
    pwnValue = req.query['pwm'];
    led.pwmWrite(255 - pwnValue);
    response = {'pin17': pwnValue};
  }
  res.json(response);
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log('api listening on port 8000');
});


