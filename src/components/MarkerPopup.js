import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  return  (
    <Popup>
      <div className='popup-text'>{name}</div>
      <div className='popup-text'>/-- tallies here --/</div>
    </Popup>
  );
};
export default MarkerPopup;