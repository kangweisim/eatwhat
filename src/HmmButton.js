import React from 'react';
import './HmmButton.css';

const HmmButton = ({onClick}) => {
  
  return (
    <div className="HmmButton" onClick={onClick}>
      글쎄<span className="one dot">.</span><span className="two dot">.</span><span className="three dot">.</span>
    </div>
  )
}

export default HmmButton;
