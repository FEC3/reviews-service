const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const Reviews = require('./database-mongodb/schema.js');

app.use(express.static(__dirname + '/../client/dist'));
const db = require('./database-mongodb/database.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 3003;
app.get("/reviews/:id", (req,res)=> {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let id = parseInt(req.params.id);
  console.log("====id:",id)
  Reviews.fetchData(id).then(data=>res.send(data))
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

