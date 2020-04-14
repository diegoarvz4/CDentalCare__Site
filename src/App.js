import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SplashIntro from './components/SplashIntro/SplashIntro';
import HomeView from './containers/HomeView/HomeView';
import ScreenViews from './containers/ScreenViews/ScreenViews';
import SideMenu from './components/SideMenu/SideMenu';
import Nav from './components/Nav/Nav';
import BackNav from './components/BackNav/BackNav';
import Footer from './components/Footer/Footer';


const App = () => { 

  const [site, setSite] = useState(true);
  const [sideNav, setSideNav] = useState(false);
  const [fadeOutClass, setFadeOutClass] = useState(' ')

  const sideNavToggle = () => {
    setSideNav(prev => !prev )
  }

  const toHome = () => {
    setFadeOutClass('fadeOut');
  }
  
  return (
    <>
    { site ?  <SplashIntro 
                toHome={toHome} 
                fadeOutClass={fadeOutClass} 
                setSite={setSite}
              /> 
      : <div className="App">
          <div className="Site">
            { sideNav ? <SideMenu setSideNav={sideNavToggle} /> : null }
            <Nav setSideNav={sideNavToggle}/>
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route path="/">
                <BackNav />
                <ScreenViews />
              </Route>
            </Switch>
            {/* <Agreements /> */}
            <Footer />
          </div>
        </div>
    }
    </>  
  )
}

export default App;
