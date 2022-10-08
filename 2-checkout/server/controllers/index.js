const models = require('../models/index.js')


module.exports = {
  get: function(req, res) {
    models.get()
    .then((response)=>{
      console.log('the response got from get request is ', response)
      res.status(200).json(response[0])
    }).catch((err)=> {
      res.sendStatus(400);
    })

  },

  post: function(req, res) {
    //console.log('the request body is ', req.body)
    models.create(req.body)
    .then(()=> {
      res.status(201).json('post request successful')
    }).catch((err)=> {
      console.log(err);
      res.sendStatus(400);
    })
  }
}
