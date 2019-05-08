const express = require('express');
const path = require('path');
const app = express();
const util = require('../utils/utils');
const bodyParse = require('body-parser');

app.use(bodyParse.text());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/upload', (req, res) => {
  res.send(util.csvify(req.body));
  res.end();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running in the terminal on port ${port}`);
});
