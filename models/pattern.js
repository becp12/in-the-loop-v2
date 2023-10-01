const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatternSchema = new Schema({
    title: {type: String, required: true},
    craft: {type: String, enum:["Crochet", "Knit", "Other"]},
    other: String,
    difficulty: {type: String, enum:["Beginner", "Easy (Beginner+)", "Intermediate", "Intermediate+", "Experienced"]},
    link: String,
    notes: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
}, {
    timestamps: true
});

module.exports = mongoose.model('Pattern', PatternSchema);