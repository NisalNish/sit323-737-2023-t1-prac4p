const express = require('express');
const app = express();

app.get('/addition', (req, res) => {
  try {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input parameters');
    }
    
    const result = num1 + num2;
    res.send(result.toString());
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/subtract', (req, res) => {
  try {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input parameters');
    }
    
    const result = num1 - num2;
    res.send(result.toString());
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/multiplication', (req, res) => {
  try {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input parameters');
    }
    
    const result = num1 * num2;
    res.send(result.toString());
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/division', (req, res) => {
  try {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input parameters');
    }
    
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    const result = num1 / num2;
    res.send(result.toString());
  } catch (err) {
    res.status(400).send(err.message);
  }
});

const port = 3400;
app.listen(port,()=>{
    console.log("Hello i'm listening to port " + port)
})



