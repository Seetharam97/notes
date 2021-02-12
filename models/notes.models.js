const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailyNoteSchema = new Schema({

	title: { type: String, required: false },

	content: { type: String, required: true },

},{
	timestamps: true
})

dailyNoteSchema.set('toJSON', { virtual: true })

module.exports = mongoose.model('dailyNotes', dailyNoteSchema)