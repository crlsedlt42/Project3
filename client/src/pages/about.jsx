import React from 'react';
import logo from '..\assets\FabicCodeLogoWhite500px.png';
const AboutPage = () => {
return (
<div style={{ textAlign: 'center', margin: '30px' }}>
<img src={logo} alt="FabicCode Logo" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
<h1 style={{ color: 'black' }}>About Us</h1>
<p>FabicCode is a brand that opens up the opportunity for everyone to easily get their hands on new styles with just a few clicks</p>
<p>Feel free to hang out for a while and explore what we have to offer!</p>
</div>
);
};
export default AboutPage;