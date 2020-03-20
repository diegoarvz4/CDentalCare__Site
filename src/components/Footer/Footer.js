import React from 'react';
import './Footer.scss';
import twitterImg from '../../assets/img/twitter.svg';
import facebookImg from '../../assets/img/facebook.svg';
import logo from '../../assets/img/CDC_logo02.png';

const Agreements = () => {

  const footerLinks = [
    'Sucursales',
    'Servicios',
    'Convenios',
    'Social Media'
  ]

  return (
    <footer className="Footer">
      <div className="Footer__Container">
        <img className="Footer__Logo" src={logo} alt="CDental Care"/>
        <h4>CDental Care Group | 2020</h4>
        <div className="Footer__Links">
          <ul>
            {
              footerLinks.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))
            }
          </ul>
        </div>
        <div className="Footer__SocialMedia">
          <img src={twitterImg} alt="twitter"/>
          <img src={facebookImg} alt="facebook"/>
        </div>      
      </div>
      <span className="Footer__PrivacyPolicy">Aviso de Privacidad</span>
      </footer>
  )
}

export default Agreements;
