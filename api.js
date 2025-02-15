const cors = require('cors')
const Gpio = require('pigpio').Gpio;
const express = require('express')

const app = express()
app.use(cors());

const led = new Gpio(17, {mode: Gpio.OUTPUT});

const controls = (
  req,
) => {
  //
  let rangeValue = 0;
  let response = {};
  //
  console.log(req.query);
  // does the query object contain slider
  if (Object.prototype.hasOwnProperty.call(req.query, 'slider')) {
    // extract the range value
    rangeValue = req.query['slider'];
    // set the led
    led.pwmWrite(rangeValue);
    // send back an object response
    response = {'sliderUpdated': rangeValue};
  }
  return response;
};

app.get('/', (req, res) => {
  const response = controls(req);
  res.json(response);
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log('api listening on port 8000');
});


