import React from 'react';

import WhiteFront_RememberMe990 from '../assets/t-shirts/white-shirt-front-RememberMe990.png';
import WhiteFront_RememberMe495 from '../assets/t-shirts/white-shirt-front-RememberMe495.png';
import WhiteBack_RememberMe990 from '../assets/t-shirts/white-shirt-back990.png';
import WhiteBack_RememberMe495 from '../assets/t-shirts/white-shirt-back495.png';
import RememberMe from '../assets/designs/RememberMe.png';

function Shirt_RememberMe() {
  return (
    <div className='spec-item-page'>
      <section className='hero'>
        <img src={WhiteFront_RememberMe495} alt="Remember Me design" />
        <img src={RememberMe} alt="Remember Me design" />
        <img src={WhiteBack_RememberMe495} alt="Remember Me design" />
      </section>
      <section className="spec-item-display">
        <img src={WhiteFront_RememberMe990} alt="Remember Me design" />
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

export default Shirt_RememberMe;
