const fetchData = require('../server/database-mongodb/schema.js');
const Reviews = require('../server/database-mongodb/schema.js');
const db = require('../server/database-mongodb/database.js');


import regeneratorRuntime from "regenerator-runtime";

describe('Testing response from database',() => {
  test('Product id should within 100',async()=>{

    // return Reviews.fetchData(3).then(data=>{
    //   expect(data.avg_overall_total).toBe(3)
    // })
    var fetchdata = await Reviews.fetchData(3)
    expect(fetchdata)
    .toHaveProperty('avg_overall_total')

  })

  test('Product id should within 100',async()=>{
    var fetchdata = await Reviews.fetchData(200)
    expect(fetchdata)
    .toBe(null)
  })
})
