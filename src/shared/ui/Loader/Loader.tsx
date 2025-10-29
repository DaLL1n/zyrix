import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <span className="loader-letter">Z</span>
      <span className="loader-letter">y</span>
      <span className="loader-letter">r</span>
      <span className="loader-letter">i</span>
      <span className="loader-letter">x</span>

      <div className="loader"></div>
    </div>
  );
};

export default Loader;
