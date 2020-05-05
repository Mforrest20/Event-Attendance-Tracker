import React, { Component } from 'react'
import ToggleSwitch from './ToggleSwitch'

class CheckIn extends Component {
    constructor(props) {
        super(props) //since we are extending class CheckIn so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            students: [
                { id: 1, firstName: 'Wasif', lastName: 'Potato', pantherID: 123320976, checkIn: false },
                { id: 2, firstName: 'Wasif', lastName: 'Potato', pantherID: 123320976, checkIn: false },
                { id: 3, firstName: 'Wasif', lastName: 'Potato', pantherID: 123320976, checkIn: false },
                { id: 4, firstName: 'Wasif', lastName: 'Potato', pantherID: 123320976, checkIn: false }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, firstName, lastName, pantherID,checkIn } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{pantherID}</td>
                    <td>{<ToggleSwitch checkIn/>}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Event Name</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CheckIn