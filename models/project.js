const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {type: String, required: true},
    craft: {type: String, enum:["Crochet", "Knit", "Other"], required: true},
    // only show if other is selected
    other: String,
    // only show if crochet is selected
    hook: String,
    // only show if knit is selected
    needle: String,
    tools: String,
    rowCounter: Number,
    notes: String,
    startDate: {
        type: Date,
        default: function() {
            let today = new Date();
            return today;
        }
    },
    yarn: {type: Schema.Types.ObjectId, ref: "Yarn", required: false},
    pattern: {type: Schema.Types.ObjectId, ref: "Pattern"},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);