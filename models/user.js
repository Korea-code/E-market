const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const userSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  email: {
    type: String,
    requried: true,
    unique: true
  },
  password: {
    type: String,
    requried: true
  },
  type: {
    type: String,
    defalut: "User"
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});
userSchema.pre("save", function(next) {
  bcrypt
    .genSalt(10)
    .then(salt => {
      bcrypt
        .hash(this.password, salt)
        .then(encryptPassword => {
          this.password = encryptPassword;
          next();
        })
        .catch(err => console.log(`Error occured when hashing ${err}`));
    })
    .catch(err => console.log(`Error occured when salting ${err}`));
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
