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
    console.log('the delete request body is ', req.body)
    models.glossary.remove(req.body)
    .then(()=>{
      res.status(201).json('glossary deleted')
    }).catch((err)=> {
      res.sendStatus(400);
    })

  },

  put: function(req, res) {
    console.log('the put request body updated glossry is ', req.body)

    models.glossary.update(req.body)
    .then((data)=> {
      console.log('put request successful')
      res.status(200).json(req.body)
    }).catch((err)=>{
      res.sendStatus(400);
    })


    //models.glossary.update(req.body.data, function (err, data) {
    //  if (err) {
    //    res.sendStatus(400);
    //  } else {
    //    res.status(200).json(req.body.data)
    //  }
    //})
  }
}
