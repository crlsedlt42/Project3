import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      {/* <img src={logo} alt="FabicCode Logo" style={{ width: '150px', height: '150px', marginBottom: '20px' }} /> */}
      <h1>About Us</h1>
      <p>
        Attribute:Attire is a brand that opens up the opportunity for everyone
        to easily get their hands on new styles with just a few clicks
      </p>
      <p>
        This is not an official site that sells any of the products. This was
        made for learning purposes only and will not send anything to you if you
        make an order.
      </p>
      {/* add a section of where to contact the devs */}
    </div>
  );
};
export default AboutPage;
