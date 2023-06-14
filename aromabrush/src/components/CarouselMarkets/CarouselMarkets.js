import React, { cloneElement } from 'react';
import { useState, useEffect, Children } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './CarouselMarkets.css'

function Carousel({ children }) {

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 400
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 400
      const maxOffset = - (400 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '400px',
            maxWidth: '400px'
          }

        })
      })
    )
  }, [children])

  return (
    <div className="carousel">
      <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}></FaChevronLeft>
      <div className="window">
        <div className="elements" style={{
          transform: `translateX(${offset}px)`
        }}>{pages}</div>
      </div>
      <FaChevronRight className="arrow" onClick={handleRightArrowClick}></FaChevronRight>


    </div>
  )
}

export default Carousel
