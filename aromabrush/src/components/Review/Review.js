import React from 'react';
import pinkBrushReview from '../../images/brush-review.svg';
import quotes from '../../images/quotes-review.svg';
import buyer from '../../images/buyer-photo-review.svg';
import './Review.css';

function Review() {
  return (
    <section className="review">
      <div className="review__container">
        <div className="review__container-figure">
          <div className="review__fugure-circle"></div>
          <img className="review__figure-quotes" src={quotes} alt='Фигура - кавычки'></img>
          <div className="review__container-info">
            <blockquote className="review__quote">
              <p className="review__quote-text">Купила себе расческу Solomeya с ароматом
                клубники – влюбилась!  Она идеально подходит
                для моих волос, и укладка стала проще.
                Теперь каждая прическа – это творчество
                и удовольствие. И как бонус – ощущение массажа.
                Просто незаменимая вещь!</p>
            </blockquote>
            <div className="review__user-container review__user-container_grid" id="grid">
              <img className="review__user-img review__user-img_location" src={buyer} alt='Фото покупателя, оставившего отзыв'></img>
              <p className="review__review-user-text">Алина Овечкина</p>
              <p className="review__review-user-text review__review-user-text_location">Довольный покупатель</p>
            </div>
          </div>
          <img className="review__brush-img" src={pinkBrushReview} alt='Арома-расчёска с ароматом клубники'></img>
        </div>
      </div>
    </section>
  )
}

export default Review
