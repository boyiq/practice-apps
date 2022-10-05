const models = require('../models');
console.log('save function is ', models.glossary.save)

module.exports = {
  get: function(req,res) {


  },

  post: function(req, res) {

    models.glossary.save(req.body);
    res.end('post successful');
  }
}
