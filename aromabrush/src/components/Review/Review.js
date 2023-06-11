import React from 'react';
import './Review.css'
import ras from '../../images/ras-review.svg'
import kaw from '../../images/kaw.svg'
import alina from '../../images/alina.svg'

function Review() {
  return (
    <section className="review">
      <div className="review__container">
        <div className="review__fugure"></div>
        <div className="review__container-2">

          <img className="review__kaw" src={kaw}></img>
          <div className="review__container-info">
            <p className="review__review">Купила себе расческу Solomeya с ароматом
              клубники – влюбилась!  Она идеально подходит
              для моих волос, и укладка стала проще.
              Теперь каждая прическа – это творчество
              и удовольствие. И как бонус – ощущение массажа.
              Просто незаменимая вещь!</p>
            <div className="review__review-user review__review-user_grid" id="grid">
              <img className="review__review-user-img block_size_img" src={alina}></img>
              <p className="review__review-user-text">Алина Овечкина</p>
              <p className="review__review-user-text block_size_big" id="#item1">Довольный покупатель</p>
            </div>
          </div>
          <img className="review__review-img" src={ras}></img>


        </div>



      </div>



    </section>
  )
}

export default Review
