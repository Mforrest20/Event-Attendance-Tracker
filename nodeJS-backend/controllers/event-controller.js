const GSUEvent = require('../models/event-model')

createEvent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an event',
        })
    }

    const gsuEvent = new GSUEvent(body)

    if (!gsuEvent) {
        return res.status(400).json({ success: false, error: err })
    }

    gsuEvent
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: gsuEvent._id,
                message: 'Event created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}

updateEventAttendee = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
	
	GSUEvent.update(
	{ 'students._id': req.params.id },
	{ $set:  { 'students.$.checkin': body.checkin }},
	(err, result) => {
		if (err) {
			res.status(500)
			.json({ error: 'Unable to update attendance.', });
		} else {
			res.status(200)
			.json(result);
		}
	}
	)
}

getEventById = async (req, res) => {
    await GSUEvent.findById(req.params.id, 'eventName startDate startTime endTime students', (err, gsuEvent) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!gsuEvent) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: gsuEvent })
    }).catch(err => console.log(err))
}

getEvents = async (req, res) => {
    await GSUEvent.find({},'eventName startDate students.checkin', (err, gsuEvent) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!gsuEvent.length) {
            return res
                .status(404)
                .json({ success: false, error: `Events not found` })
        }
        return res.status(200).json({ success: true, data: gsuEvent })
    }).catch(err => console.log(err))
}


module.exports = {
	updateEventAttendee,
	createEvent,
    getEvents,
    getEventById,
}