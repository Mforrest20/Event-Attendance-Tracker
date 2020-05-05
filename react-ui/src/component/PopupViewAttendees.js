import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import ShowAttendees from "./ShowAttendees";

export default (props) => (
  <Popup trigger={<button className="button">Check In Attendees</button>} modal>
  {close => (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="actions">
        <ShowAttendees eventID={props.eventID}/>
        <button
          className='button'
          onClick={() => {
            console.log("modal closed");
            close();
			
          }}>
            Back
        </button>
      </div>
    </div>
  )}
  </Popup>
);
