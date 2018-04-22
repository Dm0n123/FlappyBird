const express = require('express');
const app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname + "/public/")));

app.listen(3000, () => console.log('port 3000'));
