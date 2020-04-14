import React from 'react';
import './SplashIntro.scss';
import logoImg from '../../assets/img/CDC_logo03.png';

const SplashIntro = ( { toHome, fadeOutClass, setSite } ) => {

  const handleAnimation = () => {
    console.log("end")
    setSite(false);
  }



  return (
    <div className={`Intro ${fadeOutClass}`}  onAnimationEnd={handleAnimation}>
      <div className="Intro__Content">

          <img src={logoImg} alt="Logo" />

          <h1>Expertos en tu salud dental</h1>
          <span 
            onClick={toHome}
            className="Intro__Btn" 
          />
      </div>
    </div>
  ) 
}

export default SplashIntro;