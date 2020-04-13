import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Intro from './components/Intro/Intro';
import HomeView from './containers/HomeView/HomeView';
import ScreenViews from './containers/ScreenViews/ScreenViews';
import SideMenu from './components/SideMenu/SideMenu';
import Nav from './components/Nav/Nav';
import BackNav from './components/BackNav/BackNav';
import Footer from './components/Footer/Footer';


const App = () => { 

  const [site, setSite] = useState(false);
  const [sideNav, setNav] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setSite(false);
    }, 2000)
  }, [])

  return (
    <div className="App">
      
      {
        site 
        ? <Intro />
        : <div className="Site">
            {/*<SideMenu />*/}
            <Nav />
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
      }
    </div>
  )
}

export default App;
