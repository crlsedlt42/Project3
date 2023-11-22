import React from 'react';


function HomePage() {
  return (
    <div id='home-page'>
      <section id="hero">
        <img src="https://via.placeholder.com/1920x600" alt="placeholder" />
        <div id="idk-RENAMEME">
          <h1>Inspirational text here</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum. Laudantium magni amet incidunt culpa necessitatibus, earum eaque laboriosam doloribus?</p>
        </div>
      </section>
      <section id="clothing">
        <h2>Clothing</h2>
        <div id='clothing-small-display'>
          {/* I want to link all of these to their seperate page */}
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Hats</h3>
          </div>
          {/* I want to link all of these to their seperate page */}
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Shirts</h3>
          </div>
          {/* I want to link all of these to their seperate page */}
          <div className='small-display'>
            <img src="https://via.placeholder.com/476x100" alt="placeholder" />
            <h3>Jackets</h3>
          </div>
          {/* I want to link all of these to their seperate page */}
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
