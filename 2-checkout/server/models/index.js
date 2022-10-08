var db = require('../db.js');
//console.log('db imported in models is ', db)

module.exports = {
  get: function () {
    return db.queryAsync("SELECT * FROM `users`")
  },

  create: function(userinfo, callback) {
    console.log('the plassed in userinfo is ', userinfo)
    return db.queryAsync("INSERT INTO `users` (username, email, passkey, mail_address, phone, card_number, expDate, CVV, bill_zip) VALUES (?,?,?,?,?,?,?,?,?)", [
     userinfo.username,
     userinfo.email,
     userinfo.passkey,
     userinfo.mail_address,
     userinfo.phone,
     userinfo.card_number,
     userinfo.expDate,
     userinfo.CVV,
     userinfo.bill_zip
     ])
  }
}


//module.exports= mongoose.model('User', userSchema);