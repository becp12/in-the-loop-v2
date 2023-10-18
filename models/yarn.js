const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YarnSchema = new Schema({
    brand: {type: String, required: true},
    subBrand: String,
    weight: {type: String, required: true},
    color: String,
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Yarn', YarnSchema);