const models = require('../models');
//console.log('save function is ', models.glossary.save)

module.exports = {
  get: function(req,res) {
    models.glossary.getAll()
    .then((data)=> {
      res.status(200).json(data)
    }).catch((err)=> {
      res.sendStatus(400)
    })
  },

  post: function(req, res) {
    models.glossary.save(req.body)
    .then(()=> {
      res.status(200).json('new glossary added')
    }).catch((err)=>{
      res.sendStatus(400);
    })

  },

  delete: function(req, res) {
    models.glossary.remove(req.body)
    .then(()=>{
      res.status(201).json('glossary deleted')
    }).catch((err)=> {
      res.sendStatus(400);
    })

  },

  put: function(req, res) {
    models.glossary.update(req.body)
    .then((data)=> {
      res.status(200).json(data.value)
    }).catch((err)=>{
      res.sendStatus(400);
    })

  }
}
