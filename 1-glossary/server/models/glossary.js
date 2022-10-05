const db = require('../db.js');



module.exports = {
  save: function(data) {
    console.log('data passed into models is ', data);
    console.log('the collection is ', db.glossaries);
    db.glossaries.collection.insertOne(data)
    .then(()=> {
      console.log('data saved')})
    .catch((err)=>{
      console.log('err')})
  }
}