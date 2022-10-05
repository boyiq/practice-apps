const models = require('../models');
console.log('save function is ', models.glossary.save)

module.exports = {
  get: function(req,res) {
    models.glossary.getAll((err, data)=> {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log('data passed back to the respond is ', data)
        res.status(200).json(data)
      }
    });
  },

  post: function(req, res) {
    models.glossary.save(req.body, (err)=> {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json('post successful');
      }
    });
  },

  delete: function(req, res) {

  }
}
