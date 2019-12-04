const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const Reviews = require('./database-mongodb/schema.js');
const PORT = process.env.PORT || 3003;
app.use(express.static(__dirname + '/../client/dist'));
const db = require('./database-mongodb/database.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get("/reviews/:id", (req,res)=> {

  let id = parseInt(req.params.id);
  console.log("id:",id)
  Reviews.collection.findOne({product_id:id},function(err,data){
    if(err){
      console.log("here is an error",err);
      res.end();
    }else{
      console.log("no error====", data);
      res.send(data);
      res.end();
    }

  })
})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
