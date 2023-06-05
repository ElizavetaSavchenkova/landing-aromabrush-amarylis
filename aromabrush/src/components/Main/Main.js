import React from 'react';
//import Promo from '../Promo/Promo';
//import AboutProject from '../AboutProject/AboutProject';
//import Techs from '../Techs/Techs';
//import AboutMe from '../AboutMe/AboutMe';
//import Portfolio from '../Portfolio/Portfolio';
import Solomeya from '../Solomeya/Solomeya';
import Promo from '../Promo/Promo';
import Order from '../Order/Order';
import Banner from '../Banner/Banner'
import AboutBrush from '../AboutBrush/AboutBrush';
import Buy from '../Buy/Buy';
import Review from '../Review/Review'
import Contacts from '../Contacts/Contacts';
import AboutCompany from '../AboutCompany/AboutCompany';
import './Main.css'


function Main() {
  return (
    <main className="main">
      <Solomeya />
      <Promo/>
      <Order/>
      <Banner/>
      <AboutBrush/>
      <Buy/>
      <Review/>
      <AboutCompany/>
      <Contacts/>


    </main>
  )
}

export default Main
