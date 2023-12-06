const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json({ extendedUrl: true }));

app.use('/api', apiRoutes);

app.listen(process.env.SERVER_PORT || 3002, () => {
  console.log('App listening on port ', process.env.SERVER_PORT || 3002);
});
