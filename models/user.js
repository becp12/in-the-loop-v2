const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);