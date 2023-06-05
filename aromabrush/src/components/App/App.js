//import logo from './logo.svg';
import React from 'react';
//import { Helmet } from 'react-helmet';
//import { hydrate, render } from "react-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';



function App() {



  //const rootElement = document.getElementById("root");
  //if (rootElement.hasChildNodes()) {
  //  hydrate(<App />, rootElement);
  //} else {
  //  render(<App />, rootElement);
 // }
//
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default App;
