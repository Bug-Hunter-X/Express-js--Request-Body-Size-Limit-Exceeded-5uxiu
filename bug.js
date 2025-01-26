const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line throws an error if the request is too large
  console.log(req.body);
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});