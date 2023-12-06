const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();
require('dotenv').config();

app.use(bodyParser.json({ extendedUrl: true }));

app.use('/api', apiRoutes);

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log('App listening on port ', process.env.SERVER_PORT || 4000);
});
