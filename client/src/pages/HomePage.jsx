import React from 'react';
import hero from '../assets/heroImg.png';


function HomePage() {
  return (
    <div id='home-page'>
      <section id="home-hero">
        <div id="hero"></div>
        {/* <img src={hero} alt="hero image of three people wearing streetwear and jewelry" /> */}
        <div id="idk-RENAMEME">
          <h1>We Know, <br /> This Is Cool Shirt</h1>
          <p>But it's good to know that this site does not legitimately sell anything. This site has been made for learning purposes only; but please, use this site and admire the beauty of "our clothing" and do not enter your real credit card info upon checkout.</p>
        </div>
      </section>
      <section id="clothing">
        <h2>Clothing</h2>
        <div id='clothing-small-display'>
          {/* I want to link all of these to their seperate page */}
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Hoodies</h3>
          </div>
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Shirts</h3>
          </div>
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Sweats</h3>
          </div>
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Jewlery</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;
