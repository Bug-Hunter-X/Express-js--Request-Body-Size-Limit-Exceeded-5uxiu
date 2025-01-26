const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Increase the body size limit
app.use(bodyParser.json({ limit: '50mb' })); // Set limit to 50MB
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});