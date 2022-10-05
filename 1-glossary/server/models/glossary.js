const db = require('../db.js');



module.exports = {
  getAll: function(callback) {
    db.glossaries.find({})
    .then((data)=> {
      console.log('data got from DB queryfind is ', data)
      callback(null, data)
    }).catch((err)=> {
      callback(err, null)
    })
  },

  save: function(data, callback) {
    //console.log('data passed into models is ', data);
    db.glossaries.collection.insertOne(data)
    .then(()=> {
      callback(null)})
    .catch((err)=>{
      callback(err)})
  },

  remove: function(glossary, callback) {
    db.glossaries.collection.deleteOne({word: glossary.word})
    .then(()=>{
      callback(null)
    }).catch((err)=> {
      callback(err);
    })
  }
}