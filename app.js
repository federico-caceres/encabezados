const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let info = JSON.stringify('info: ' + req.get('sec-ch-ua'));
  res.send(info);
});

app.listen(3000, () => console.log('Listening on port 3000!'));