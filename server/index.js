const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Reviews = require('./database-mongodb/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('./client/dist/'));

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
