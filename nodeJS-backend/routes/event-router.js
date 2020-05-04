const express = require('express')

const EventCtrl = require('../controllers/event-controller')

const router = express.Router()

router.post('/event', EventCtrl.createEvent)
router.get('/event/:id', EventCtrl.getEventById)
router.get('/events', EventCtrl.getEvents)
router.put('/event/:id', EventCtrl.updateEventAttendee)

module.exports = router