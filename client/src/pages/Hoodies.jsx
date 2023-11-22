import React from 'react';

import BlackFront_WalkIn from '../assets/hoodies/black-hoodie-front-WalkIn495.png';
import BlackBack_WalkIn from '../assets/hoodies/black-hoodie-back-WalkIn495.png';

function Hoodies() {
  return (
    <div className='product-page'>
      <h1>Hoodies</h1>
      <div className="product">
        <div className="card">
          <p>*$$$*</p>
          <img src={BlackFront_WalkIn} alt="Hoodie PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={BlackBack_WalkIn} alt="Hoodie PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={BlackFront_WalkIn} alt="Hoodie PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={BlackBack_WalkIn} alt="Hoodie PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={BlackBack_WalkIn} alt="Hoodie PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
      </div>
    </div>
  )
}

export default Hoodies;
