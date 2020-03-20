import React, { useState, useEffect } from 'react';
import './App.scss';

import Intro from './components/Intro/Intro';
import SideMenu from './components/SideMenu/SideMenu';
import Nav from './components/Nav/Nav';
import Cover from './components/Cover/Cover';
import Services from './components/Services/Services';
import Agreements from './components/Agreements/Agreements';
import Footer from './components/Footer/Footer';
import LineSeaparator from './components/LineSeparator/LineSeparator';

const App = () => { 

  const [site, setSite] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setSite(false);
    }, 2000)

    return () => {
      console.log('will unmount');
    }
  }, [])

  return (
    <div className="App">
      {
        site 
        ? <Intro />
        : <div className="Site">
            <SideMenu />
            <Nav />
            <Cover />
            <LineSeaparator />
            <Services />
            <LineSeaparator />
            <Agreements />
            <Footer />
          </div>
      }
    </div>
  )
}

export default App;
