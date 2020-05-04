const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://testUser:dontsharepassword@cluster0-3qix1.mongodb.net/events?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db