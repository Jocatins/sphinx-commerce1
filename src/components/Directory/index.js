import React from 'react';
import Man from '../../assets/man.jpg';
import Woman from '../../assets/woman.jpg';
import './styles.scss';

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${Man})` }}>
          <a>Mens Clothings</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Woman})` }}>
          <a>Women's Clothings</a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Directory;
