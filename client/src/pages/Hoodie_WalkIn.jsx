import React from 'react';

import BlackFront_WalkIn495 from '../assets/hoodies/black-hoodie-front-WalkIn495.png';
import BlackBack_WalkIn495 from '../assets/hoodies/black-hoodie-back-WalkIn495.png';
import BlackFront_WalkIn990 from '../assets/hoodies/black-hoodie-front-WalkIn990.png';
import BlackBack_WalkIn990 from '../assets/hoodies/black-hoodie-back-WalkIn990.png';
import WalkIn from '../assets/designs/WalkIn.png';

function WalkInPage() {
  return (
    <div className='spec-item-page'>
      <section className='hero'>
        <img src={BlackFront_WalkIn495} alt="WalkIn design" />
        <img src={WalkIn} alt="WalkIn design" />
        <img src={BlackBack_WalkIn495} alt="WalkIn design" />
      </section>
      <section className="spec-item-display">
        <img src={BlackFront_WalkIn990} alt="WalkIn design" />
        <div className="spec-item-info">
          <h1>*TITLE*</h1>
          <h2>*$$$*</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt doloribus inventore, reiciendis molestiae minus dolorem unde facere non qui in, accusamus tenetur sapiente sint asperiores blanditiis, quia distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab ea debitis natus, impedit, aspernatur saepe magni velit, ex eveniet aliquid architecto. Deleniti, voluptatibus debitis illum recusandae reiciendis nam libero?</p>
          <button>Buy</button>
        </div>
      </section>
      {/* <h3>You May Also Like:</h3> */}
    </div>
  )
}

export default WalkInPage;
