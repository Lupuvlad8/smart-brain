import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  if (imageUrl.length > 0)
  return (
    <div className='photo-container'>
      <img id='inputimage' alt='' src={imageUrl}/>
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  );
}

export default FaceRecognition;
