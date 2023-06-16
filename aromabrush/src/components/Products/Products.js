import React from 'react';
import { useEffect } from 'react';


import black from '../../images/brush-promo.svg';
//import icon3 from '../../images/ras3.svg';
import strawberry from '../../images/strawberry.svg'
import mango from '../../images/mango.svg';
import lemon from '../../images/lemon.svg'
import jasmine from '../../images/jasmine.svg'
import lavender from '../../images/lavender.svg'
import grape from '../../images/grape.svg'
import './Products.css';
import { useResize } from '../use-resize';
import Carousel from '../Carousel/Carousel';


import photo from '../../images/1.svg'
import photo2 from '../../images/2.svg'
import photo3 from '../../images/3.svg'
import photo4 from '../../images/4s.svg'
import photo5 from '../../images/5.svg'
import photo6 from '../../images/6.svg'



import brush1 from '../../images/brush1.png'
import brush2 from '../../images/brush2.png'
import brush3 from '../../images/brush3.png'
import brush4 from '../../images/brush4.png'
import brush5 from '../../images/brush5.png'
import brush6 from '../../images/brush6.png'
import brush7 from '../../images/brush7.png'
import brush8 from '../../images/brush8.png'
import brush9 from '../../images/brush9.png'
import brush10 from '../../images/brush10.png'
import brush11 from '../../images/brush11.png'



function Products() {
  const { width, isScreenMy5, isScreenMy17, isScreenMy15, isScreenMy16, isScreenMy19, isScreenLg, isScreenXl } = useResize();
  var slideIndex = 1;

  useEffect(() => {
    console.log(width)
    console.log(width)
  }, [width])


  return (
    <section className="products" >



      {isScreenMy5 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>
          <div className="products__tagline-container">
            <div className="products__tagline-desc products__tagline-desc_left">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo}></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={photo2}></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo3}></img>
              </div>
            </div>
            <Carousel>

              <img className="products__brush-image" src={brush1}></img>
              <img className="products__brush-image" src={brush2}></img>
              <img className="products__brush-image" src={brush3}></img>
              <img className="products__brush-image" src={brush4}></img>
              <img className="products__brush-image" src={brush5}></img>
              <img className="products__brush-image" src={brush6}></img>
              <img className="products__brush-image" src={brush7}></img>
              <img className="products__brush-image" src={brush8}></img>
              <img className="products__brush-image" src={brush9}></img>
              <img className="products__brush-image" src={brush10}></img>
              <img className="products__brush-image" src={brush11}></img>
            </Carousel>



            <div className="products__tagline-desc">
              <div className="products__figure products__figure_left">
                <img className="products__figure-text" src={photo4}></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={photo5}></img>
              </div>
              <div className="products__figure products__figure_left">
                <img className="products__figure-text" src={photo6}></img>            </div>
            </div>
          </div>
          <ul className="products__tastes-list">
            <li className="products__taste-el">
              <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Запах - клубника"></img>
              <span className="products__taste-caption">клубника</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={mango} alt="Запах - манго"></img>
              <span className="products__taste-caption">манго</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={lemon} alt="Запах - лимон"></img>
              <span className="products__taste-caption">лимон</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={jasmine} alt="Запах - жасмин"></img>
              <span className="products__taste-caption">жасмин</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={lavender} alt="Запах - лаванда"></img>
              <span className="products__taste-caption">лаванда</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={grape} alt="Запах - виноград"></img>
              <span className="products__taste-caption">виноград</span>
            </li>
          </ul>
        </div>}

      {isScreenMy17 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>

          <div className="products__tagline-container">

            <Carousel>

              <img className="products__brush-image" src={brush1}></img>
              <img className="products__brush-image" src={brush2}></img>
              <img className="products__brush-image" src={brush3}></img>
              <img className="products__brush-image" src={brush4}></img>
              <img className="products__brush-image" src={brush5}></img>
              <img className="products__brush-image" src={brush6}></img>
              <img className="products__brush-image" src={brush7}></img>
              <img className="products__brush-image" src={brush8}></img>
              <img className="products__brush-image" src={brush9}></img>
              <img className="products__brush-image" src={brush10}></img>
              <img className="products__brush-image" src={brush11}></img>
            </Carousel>

            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo}></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={photo2}></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo5}></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Запах - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Запах - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Запах - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Запах - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Запах - виноград"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Запах - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">


              </li>
            </ul>


          </div>

        </div>}
      {isScreenMy15 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>

          <div className="products__tagline-container">

            <Carousel>


              <img className="products__brush-image" src={brush1}></img>
              <img className="products__brush-image" src={brush2}></img>
              <img className="products__brush-image" src={brush3}></img>
              <img className="products__brush-image" src={brush4}></img>
              <img className="products__brush-image" src={brush5}></img>
              <img className="products__brush-image" src={brush6}></img>
              <img className="products__brush-image" src={brush7}></img>
              <img className="products__brush-image" src={brush8}></img>
              <img className="products__brush-image" src={brush9}></img>
              <img className="products__brush-image" src={brush10}></img>
              <img className="products__brush-image" src={brush11}></img>
            </Carousel>

            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo}></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={photo2}></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo5}></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Запах - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Запах - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Запах - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Запах - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Запах - виноград"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Запах - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">


              </li>
            </ul>


          </div>

        </div>}

      {isScreenMy16 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>

          <div className="products__tagline-container">

            <Carousel>

              <img className="products__brush-image" src={brush1}></img>
              <img className="products__brush-image" src={brush2}></img>
              <img className="products__brush-image" src={brush3}></img>
              <img className="products__brush-image" src={brush4}></img>
              <img className="products__brush-image" src={brush5}></img>
              <img className="products__brush-image" src={brush6}></img>
              <img className="products__brush-image" src={brush7}></img>
              <img className="products__brush-image" src={brush8}></img>
              <img className="products__brush-image" src={brush9}></img>
              <img className="products__brush-image" src={brush10}></img>
              <img className="products__brush-image" src={brush11}></img>
            </Carousel>

            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo}></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={photo2}></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={photo5}></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Запах - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Запах - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Запах - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Запах - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Запах - виноград"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Запах - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">


              </li>
            </ul>


          </div>

        </div>}
    </section>
  )
}

export default Products

// showSlides(slideIndex);

  // Next/previous controls

  //var slideIndex = 1;
  // showSlides(slideIndex);

  //function plusSlides(n) {
  //  showSlides(slideIndex += n);
  //}

  //function currentSlide(n) {
  //  showSlides(slideIndex = n);
  // }

  // function showSlides(n) {
  //  var i;
  //var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}
  // console.log('fff')
  // if (n < 1) {slideIndex = slides.length}
  //console.log('fff')
  // f//or (i = 0; i < slides.length; i++) {
  //    slides[i].style.display = "none";
  //  console.log('fff')
  //}
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //   console.log('fff')
  //}//
  // slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  // }

  //<div class="slideshow-container">

  //<div class="mySlides fade">
  // <div class="numbertext">1 / 3</div>
  //<img className="img" src={photo} ></img>
  // <div class="text">Caption Text</div>
  //</div>

  ////<div class="mySlides fade">
  //<div class="numbertext">2 / 3</div>
  //<img className="img" src={photo2} ></img>
  //<div class="text">Caption Two</div>
  ///div>

  //<div class="mySlides fade">
  //<div class="numbertext">3 / 3</div>
  // <img className="img" src={photo3}  ></img>
  // <div class="text">Caption Three</div>
  //</div>

  ////<a class="prev" onclick={plusSlides(-1)}>&#10094;</a>
  ///<a class="next" onclick={plusSlides(1)}>&#10095;</a>
  ///</div>
  ///<br></br>


  //<div >
  /////<span class="dot" onclick={currentSlide(1)}></span>
  ///<span class="dot" onclick={currentSlide(2)}></span>
  ///<span class="dot" onclick={currentSlide(3)}></span>
  //</div>

// <span className="products__figure-text">ПРИЯТНЫЙ АРОМАТ</span>
