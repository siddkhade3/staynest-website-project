const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email:{
    type:String,
    require:true,
  }
});

const passportLocalMongooseFunction =  passportLocalMongoose.default || passportLocalMongoose; 

userSchema.plugin(passportLocalMongooseFunction);


module.exports = mongoose.model("User", userSchema);