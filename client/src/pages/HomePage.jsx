import React from 'react';
import hero from '../assets/heroImg.png';
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";

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
      <div>
      <CategoryMenu />
      <ProductList />
      <Cart />

      </div>
    </div>
  );
};

export default HomePage;
