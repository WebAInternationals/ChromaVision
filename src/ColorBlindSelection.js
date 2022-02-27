import React, { useState } from 'react';
import Popup from './Popup';
import './style.css';

function ColorBlindSelection() {
  const [showPopup, setShowPopup] = useState(true);

  const expandSettings = () => {
    setShowPopup(true);
    console.log('expanding settings');
  };

  const hideSettings = () => {
    setShowPopup(false);
    console.log('hiding settings');
  };
  return (
    <div>
      <h1 id='rainbow'>ChromaVision</h1>
      <h5>A simple extension for the colorblind.</h5>

      <div id='cvd-picker' class='container-fluid'>
        <div class='row my-4'>
          <div class='col-6'>
            <button
              id='open-button'
              type='button'
              class='btn btn-outline-primary'
              onClick={expandSettings}
            >
              Open Settings
            </button>
          </div>
          <div class='col-6'>
            <button
              id='close-button'
              type='button'
              class='btn btn-outline-primary'
              onClick={hideSettings}
            >
              Hide Settings
            </button>
          </div>
        </div>
        {/* <button id='changeColor' class='button'>
          click
        </button> */}
        {showPopup && <Popup />}
      </div>
    </div>
  );
}

export default ColorBlindSelection;
