import React from 'react';
class CreateEvent extends React.Component {

    state = { showForm: false }

    showForm = () => {
        return (
            <div className="form-style-6">
                <form id="add-app">

                    <label>Event Name: </label>
                    <input type="text"></input>

                    <label>Semester: </label>
                    <input type="text" ></input>

                    <label>Year: </label>
                    <input type="number"></input>

                    <label>Description (Optional): </label>
                    <textarea placeholder="Type your Message.."></textarea>

                    <label>Start Date: </label>
                    <input type="date"></input>

                    <label>End Date: </label>
                    <input type="date"></input>

                    <label>Semester: </label>
                    <input type="text" ></input>

                    <label>Start Time: </label>
                    <input type="time" ></input>

                    <label>End Time: </label>
                    <input type="time" ></input>

                    <button>Create</button>
                </form>
            </div>
        );
    }
    render() { 
        return (
            <div className='create-event'>
                <h1>Create Event</h1>
                <button onClick={() => this.setState({ showForm: true })}>Create Event</button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        );
    }
}

export default CreateEvent;