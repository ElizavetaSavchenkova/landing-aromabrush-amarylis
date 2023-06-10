//import logo from './logo.svg';
import React from 'react';
import { useEffect } from 'react';
//import { Helmet } from 'react-helmet';
//import { hydrate, render } from "react-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import icon from '../../images/krug.svg'
import Footer from '../Footer/Footer';



function App() {

  // addEventListener('scroll',() => {
  // let hue = content.getBoundingClientRect().top/22;
  // main.style.background = `linear-gradient(45deg, white, hsl(${hue},100%,50%))`;
  // });

  //const rootElement = document.getElementById("root");
  //if (rootElement.hasChildNodes()) {
  //  hydrate(<App />, rootElement);
  //} else {
  //  render(<App />, rootElement);
  // }
  //

  //window.onscroll = function() {
  // if ((window).scrollTop() > 400){
  // ('.header').css({'background-color': 'white'} )
  // }else{
  // ('.header').css({'background-color': 'black'})
  //};

  //}

  console.log(window.innerWidth);

  function menu() {
    if (window.innerWidth === 1440) {
      console.log('Разрешение')
    }
  }

  useEffect(() => {
    menu()
  }, [])

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    console.log(scrollDistance)
    if ((scrollDistance > 1000) && (scrollDistance < 2000)) {
      console.log(scrollDistance)
      const header = document.querySelector('header');
      console.log(header)
      header.classList.add('header__black')
    } else {
      const header = document.querySelector('header');
      header.classList.remove('header__black')
    }
  })



  return (
    <div className="page">

      <Header />

      <Main />

      <Footer />


    </div>
  )
}
export default App;
