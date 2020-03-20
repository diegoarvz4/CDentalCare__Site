import React from 'react';
import './App.scss';

import Nav from './components/Nav/Nav';
import Cover from './components/Cover/Cover';
import Services from './components/Services/Services';
import Agreements from './components/Agreements/Agreements';
import Footer from './components/Footer/Footer';
import LineSeaparator from './components/LineSeparator/LineSeparator';

const App = () => (
  <div className="App">
    <Nav />
    <Cover />
    <LineSeaparator />
    <Services />
    <LineSeaparator />
    <Agreements />
    <Footer />
  </div>
)

export default App;
