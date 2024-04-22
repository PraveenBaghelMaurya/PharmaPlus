import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/app-store.png";
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import linkdin from "../../../images/linkedin.png";
import "./footer.css";



const Footer = () => {
  return (
    <footer id="footer">
        <div className="Lfooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS</p>
          <div className="images">
         <a href="http://playstore/ravikumarsingh"><img src={playStore} alt="playStore" /></a>
          <a href="http://appstore/ravikumarsingh"><img src={appStore} alt="appStore" /></a>
          </div>
        </div>
        <div className="Mfooter">
          <h2>PharmaPlus</h2>
          <p>Good Quality Product is our first Priority</p>

          <p>Copyrights 2024 &copy; Praveen Kumar</p>
        </div>
        <div className="Rfooter">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/Praveenkumar884"> <img src={facebook} alt="facebook" /></a>
          <a href="https://www.instagram.com/praveen__baghel"> <img src={instagram} alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/praveen-kumar-847808208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <img src={linkdin} alt="llinkdin" /></a>
        </div>
    </footer>
  );
}

export default Footer;
