import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import Upload from "./Upload";


export default () => (
  <Popup trigger={<button className="button">CheckIn </button>} modal>
  {close => (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="actions">
        <Upload />
        <button
          className='button'
          onClick={() => {
            console.log("modal closed");
            close();
          }}>
            Cancel Upload
        </button>
      </div>
    </div>
  )}
  </Popup>
);
