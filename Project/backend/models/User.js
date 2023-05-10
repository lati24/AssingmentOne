const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    employeeEmail: {type: String, require: true, unique: true},
    employeeAddress: {type: String, require: true , unique: true},
    employeePassword: {type: String, require: true, unique: true}
});

let User = mongoose.model('User',userSchema)

module.exports = User;