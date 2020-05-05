import React, { Component } from 'react'
import EventDataService from '../service/EventDataService';
import PopupVA from './PopupViewAttendees';

class ShowEvents extends Component {
	
	constructor(props) {
        super(props)
		this.state = {
			gsuEvents: [],
            message: null
        }
        this.refreshEvents = this.refreshEvents.bind(this)
    }

	refreshEvents() {
        EventDataService.retrieveAllEvents()
            .then(
                response => {
                    console.log(response);
					this.setState({ gsuEvents: response.data.data })
                }
            )
    }

	componentDidMount() {
        this.refreshEvents();
    }

    renderTableHeader() {
        return (
			<div>
				<th>Event Name</th>
				<th>Event Date</th>
				<th>Attendees</th>
				<th>Check In</th>
			</div>
        );
    }
	
    renderTableData() {
            return (
				<div>
				{this.state.gsuEvents.map(eventKey => 
                <tr key={eventKey._id}>
                    <td>{eventKey.eventName}</td>
                    <td>{eventKey.startDate}</td>
                    <td>{eventKey.students.length}</td>
                    <td><PopupVA eventID={eventKey._id}/></td>
                </tr>
				)}
				</div>
            );
    }
    

    render() {
        return (
            <div>
                <h1 id='title'>Events List</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowEvents