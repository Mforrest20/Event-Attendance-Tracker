import axios from 'axios'

const EVENT_MAIN_URL = 'http://gsuevents.com:80'
const EVENT_API_URL = `${EVENT_MAIN_URL}/route/api`

class EventDataService {

    retrieveAllEvents() {
        return axios.get(`${EVENT_API_URL}/events`);
    }
	retrieveEvent(eventID){
		return axios.get(`${EVENT_API_URL}/event/${eventID}`);
	}
}

export default new EventDataService()

			