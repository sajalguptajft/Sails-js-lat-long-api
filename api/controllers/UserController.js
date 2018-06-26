var UserController = {

  createUser: function (req, res) {

    console.log("in create method");

    var user = {
      firstName:req.param("firstName"),
      lastName:req.param("lastName"),
      username:req.param("username"),
      latitude:req.param("latitude"),
      longitude:req.param("longitude")
    }

    console.log("user : ",user);

    User.create(user).exec(function (err, user){
      if(err){
        res.send(err);
      }
      else{
        res.send("success")
      }
    });

  },

  getUser: function (req, res) {
    var user =  User.find().exec(function(err, user){
      res.json({user:user})
    });
  }


};
module.exports = UserController;
