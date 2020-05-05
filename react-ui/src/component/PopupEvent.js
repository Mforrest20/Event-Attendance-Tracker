import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import CreateEvent from "./CreateEvent";

export default () => (
  <Popup trigger={<button className="button">Create Events</button>} modal>
  {close => (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="actions">
        <CreateEvent />
        <button
          className='button'
          onClick={() => {
            console.log("modal closed");
            close();
			// this.setState({ showForm: true })
          }}>
            Cancel Upload
        </button>
      </div>
    </div>
  )}
  </Popup>
  
);
