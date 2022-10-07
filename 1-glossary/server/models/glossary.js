const db = require('../db.js');




module.exports = {
  getAll: function() {
    return db.glossaries.find({})
  },

  save: function(data) {
    return db.glossaries.create({
      word: data.word,
      definition: data.definition
    })
  },

  remove: function(glossary, callback) {
    return db.glossaries.collection.deleteOne({word: glossary.word})
  },

  update: function(updatedGlossary,callback) {
    //console.log('the passed in updatedGLossary is ', updatedGlossary)
    return db.glossaries.collection.findOneAndUpdate({word: updatedGlossary.word}, {$set: {
      word:updatedGlossary.word,
      definition: updatedGlossary.definition
    }},  {new: true, upsert: true})

    //db.glossaries.collection.findOne({word: updatedGlossary.word})
    //.then((targetGlossary)=> {
    //  console.log('the found target glossary is ', targetGlossary)
    //  //targetGlossary.updatedGLossary
    //  targetGlossary.word = updatedGlossary.word;
    //  targetGlossary.definition = updatedGlossary.definition;
    //  targetGlossary.save()
    //  .then((savedDoc)=>{
    //    console.log('the saved doc is', savedDoc)
    //    callback(null, savedDoc)
    //  })
    //})
    //.catch((err) => {
    //  console.log(err);
    //  callback(err, null)
    //})
  }//
}
