import React from 'react';
// importing necklace pendants
import abstractP from '../assets/jewelry/pendant-abstract.png';
import apeP from '../assets/jewelry/pendant-ape.png';
import circlesP from '../assets/jewelry/pendant-circles.png';
import eagleP from '../assets/jewelry/pendant-eagle.png';
import jaguarP from '../assets/jewelry/pendant-jaguar.png';
import monkeyP from '../assets/jewelry/pendant-monkey.png';
import skullNsnakeP from '../assets/jewelry/pendant-skull-and-snake.png';
import treeP from '../assets/jewelry/pendant-tree.png';
// importing rings
import butterfly1R from '../assets/jewelry/ring-gold-and-silver-butterfly1.png';
import butterfly3R from '../assets/jewelry/ring-gold-and-silver-butterfly3.png';
import birdR from '../assets/jewelry/ring-gold-bird.png';
import goldSolidR from '../assets/jewelry/ring-gold-solid.png';
import treeR from '../assets/jewelry/ring-gold-tree.png';
import gothicR from '../assets/jewelry/ring-silver-abs-gothic.png';
import eyesR from '../assets/jewelry/ring-silver-eyes.png';
import silverSolidR from '../assets/jewelry/ring-silver-solid.png';


function Jewelry() {
  return (
    <div className='product-page'>
      <h1>Jewelry</h1>
      <div className="product">
        <div className="card">
          <p>*$$$*</p>
          <img src={jaguarP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={skullNsnakeP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={circlesP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={eagleP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={treeP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={apeP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={monkeyP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={abstractP} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>

        {/* rings */}

        <div className="card">
          <p>*$$$*</p>
          <img src={butterfly1R} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={butterfly3R} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={birdR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={goldSolidR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={treeR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={gothicR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={eyesR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
        <div className="card">
          <p>*$$$*</p>
          <img src={silverSolidR} alt="jewelry PLACEHOLDER" />
          <p>*TITLE*</p>
          <p>*RATING*</p>
        </div>
      </div>
    </div>
  )
}

export default Jewelry;
