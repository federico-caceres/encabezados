const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let info = JSON.stringify(req.headers["user-agent"]);
  res.send(info);
});

app.listen(3000, () => console.log('Listening on port 3000!'));