import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="center">
      <div className="absolute mt2">
        <img alt='' src={imageUrl} width='500px' heigh='auto'/>
      </div>
    </div>
  );
};

export default FaceRecognition;
