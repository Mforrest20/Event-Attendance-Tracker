import React, { Component } from 'react';
import Events from './component/EventsList';
import PopupEvent from './component/PopupEvent';
import ShowEvents from './component/ShowEvents';
import ShowAttendees from './component/ShowAttendees';

export default class App extends Component {

  state = {
    'eventsLists': [
      { 'name': 'GSU orientation 2020(vertual)', 'id': 0 },
      { 'name': 'FreshMan orientation 2020', 'id': 1 },
      { 'name': 'Study Group', 'id': 2 }
    ]
  }

  render() {
    return (
      <div className='App'>

        <h1 className="hero-image">GSU Events</h1>

        <h1>GSU Events</h1>

        <Events eventsLists={this.state.eventsLists}></Events>
        <PopupEvent />
		<ShowEvents />
      </div>
    );
  }
}
