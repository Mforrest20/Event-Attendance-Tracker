
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GSUEvent = new Schema(
    {
        eventName: { type: String, required: true },
        semester: { type: String, required: false },
        year: { type: String, required: false },
		desc: { type: String, required: false },
        startDate: { type: String, required: false },
        endDate: { type: String, required: false },
		meetFreq: { type: String, required: false },
        startTime: { type: String, required: false },
        endTime: { type: String, required: false },
		students: [ {pantherId: Number, 
					firstName: String,
					lastName: String,
					department: String,
					level: String,
					campus: String,
					degree: String,
					email: String,
					college: String,
					year: Number,
					checkin: Boolean}]
	},
    { timestamps: true },
)

module.exports = mongoose.model('events', GSUEvent)