import React from 'react';
import './AboutBrush.css'

function AboutBrush() {
  return (
    <section className="aboutbrush">
      <div className="aboutbrush__container">
        <h3 className="aboutbrush__title">О РАСЧЁСКАХ</h3>
        <div className="aboutbrush__video-container">
          <iframe className="aboutbrush__video" width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ssuZ8PUEqZM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <p className="aboutbrush__subtitle">Арома-расчески от Solomeya - ваш ключ к здоровым
          и красивым волосам. Подходят для любого типа волос, бережно распутывают и не травмируют пряди. Легко моются, устойчивы
          к нагреву. </p>
        <p className="aboutbrush__subtitle aboutbrush__subtitle_second">Изысканные ароматы: виноград, жасмин, лаванда, клубника,
          лимон, манго. Дарите своим волосам лучшее с Solomeya!</p>
      </div>
    </section>
  )
}

export default AboutBrush

// <video className='aboutbrush__video' ></video>
