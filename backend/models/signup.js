const mongoose=require('mongoose')
const { Schema } = mongoose;

const SignupsSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
      },
      password: {
        type: String,
        required:true, 
      },
});
const SignupModel = mongoose.model('signup', SignupsSchema);
module.exports = SignupModel;  