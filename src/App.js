import React from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js'
import Footer from './components/Footer';
import Global from './theme/global.js';


function App() {
  return (
    <React.Fragment>
      <Global/>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
