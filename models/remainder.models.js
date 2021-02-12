const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remaiderSchema = new Schema ({
    title: {type: String, required: true},
    remaindate: { type: Date, required: true},
    remainbefore: {type: Date, required: false},
    repeat: { type: Number, required: true},//0=all, 1=except sunday, 2=monday-friday
    Marker: {type: Number, required: false}
},
{
    timestamps: true
});

remaiderSchema.set('toJSON', {virtuals: true})
module.exports = mongoose.model('remainder', remaiderSchema)


