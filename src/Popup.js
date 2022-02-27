import { useState } from 'react';
import { normal } from './utils/normal';
import { deuteranopia } from './utils/deuteranopia';
import { protanopia } from './utils/protanopia';
import { tritanopia } from './utils/tritanopia';
// import { deuteranopiaFilter } from './filters/deuteranopia';

function Popup() {
  const settings = {
    colorFilterID: [
      'option-deuteranopia',
      'option-protanopia',
      'option-tritanopia',
    ],
    colorBlindTypes: [
      'Deuteranopia (green-blind)',
      'Protanopia (red-blind)',
      'Tritanopia (blue-blind)',
    ],
  };
  const [contrast, setContrast] = useState('0.7');
  const handleContrastChange = (e) => {
    setContrast(e.target.value);
  };

  const matrix = `
      0.292746395668271,0.707241249103522,0.000000156558466,0,0
      0.292750943335557,0.707252206989406,-0.000000220239329,0,0
      -0.022336513011080,0.022336649609041,1.000002309415585,0,0
      0,0,0,1,0`;

  const injectScript = () => {
    // deuteranopiaFilter(matrix);
  };

  async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    console.log(tabs);
    return tabs[0];
  }
  const handleReset = () => {
    disableOptions();
    setContrast(0.7);
    normal();
  };

  const handleSelect = (e) => {
    console.log('checked? ' + e.target.checked);
    if (e.target.checked) {
      disableOptions();
      e.target.checked = true;
      const id = e.target.value;
      if (id < 10) {
        deuteranopia(id % 10, contrast);
      } else if (id < 20) {
        protanopia(id % 10, contrast);
      } else {
        tritanopia(id % 10, contrast);
      }
      console.log(id);
    } else {
      normal();
    }
  };

  const disableOptions = () => {
    for (let cvd of settings.colorFilterID) {
      document.getElementById(cvd + '-0').checked = false;
      document.getElementById(cvd + '-1').checked = false;
      document.getElementById(cvd + '-2').checked = false;
    }
  };

  return (
    <div>
      <div id='header' class='row'>
        <div class='col-6'>
          <label></label>
        </div>
        <div class='col-2' style={{ fontSize: '0.8em' }}>
          No filter, simulated vision
        </div>
        <div class='col-2' style={{ fontSize: '0.8em' }}>
          Filtered, normal vision
        </div>
        <div class='col-2' style={{ fontSize: '0.8em' }}>
          Filtered, simulated vision
        </div>
      </div>
      <form>
        {settings.colorBlindTypes.map((type, i) => (
          <div id={settings.colorFilterID.at(i)} class='row my-2'>
            <div class='col-6'>
              <label>{type}</label>
            </div>
            <div class='col-2'>
              <label class='switch'>
                <input
                  type='checkbox'
                  id={settings.colorFilterID.at(i) + '-0'}
                  value={i * 10 + 0}
                  onChange={handleSelect}
                />
                <span class='slider round'></span>
              </label>
            </div>
            <div class='col-2'>
              <label class='switch'>
                <input
                  type='checkbox'
                  id={settings.colorFilterID.at(i) + '-1'}
                  value={i * 10 + 1}
                  onChange={handleSelect}
                />
                <span class='slider round'></span>
              </label>
            </div>
            <div class='col-2'>
              <label class='switch'>
                <input
                  type='checkbox'
                  id={settings.colorFilterID.at(i) + '-2'}
                  value={i * 10 + 2}
                  onChange={handleSelect}
                />
                <span class='slider round'></span>
              </label>
            </div>
          </div>
        ))}
        <div class='row' style={{ marginTop: '20px' }}>
          <div class='col-5'>
            <label for='slider' class='form-label'>
              Adjust Contrast: {contrast}
            </label>
          </div>
          <div class='col-4'>
            <input
              type='range'
              class='form-range w-100'
              min='0'
              max='5'
              step='0.1'
              value={contrast}
              onChange={handleContrastChange}
              id='slider'
            />
          </div>
          <div class='col-3'>
            <button
              type='button'
              class='btn btn-outline-primary'
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Popup;
