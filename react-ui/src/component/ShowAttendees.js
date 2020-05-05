import React, { Component } from 'react'
import EventDataService from '../service/EventDataService';

class ShowAttendees extends Component {
	
	constructor(props) {
        super(props)
		this.state = {
			students: [],
            message: null
        }
        this.refreshEvent = this.refreshEvent.bind(this)
    }

	refreshEvent() {
        EventDataService.retrieveEvent(this.props.eventID)
            .then(
                response => {
                    console.log(response);
					this.setState({ students: response.data.data.students })
                }
            )
    }

	componentDidMount() {
        this.refreshEvent();
    }

    renderTableHeader() {

        return (
			<div>
			<th>First Name</th>
			<th>Last Name</th>
			<th>PantherID</th>
			<th>Checked In</th>
			</div>
        );
    }
	
    renderTableData() {
            return (
				<div>
				{this.state.students.map(stuKey => 
                <tr key={stuKey._id}>
                    <td>{stuKey.firstName}</td>
                    <td>{stuKey.lastName}</td>
                    <td>{stuKey.pantherId}</td>
                    <td>{stuKey.checkin}</td>
                </tr>
				)}
				</div>
            );
    }
    

    render() {
        return (
            <div>
                <h1 id='title'>Attendees</h1>
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

export default ShowAttendees