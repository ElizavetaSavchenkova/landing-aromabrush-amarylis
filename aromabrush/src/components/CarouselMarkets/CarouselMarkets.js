import React, { cloneElement } from 'react';
import { useState, useEffect, Children } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { useResize } from '../use-resize';
import './CarouselMarkets.css'

function Carousel({ children }) {

  const { width, isScreenMy14, isScreenMy15, isScreenMy16 } = useResize();
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    console.log('click2')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 680
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    console.log('click2')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 680
      const maxOffset = - (680 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  const handleLeftArrowClick760 = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 360
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick760 = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 360
      const maxOffset = - (360 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  const handleLeftArrowClick450 = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 300
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick450 = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 300
      const maxOffset = - (300 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    if (width >= 761) {
      setOffset(0) //вернуть иконки в исходную позицию
      setPages(
        Children.map(children, child => {
          return cloneElement(child, {
            style: {
              height: '100%',
              minWidth: '640px',
              maxWidth: '640px',
            }
          })
        })
      )
    }
  }, [children, width])

  useEffect(() => {
    if (width <= 760 && width >= 451) {
      setOffset(0)
      setPages(
        Children.map(children, child => {
          return cloneElement(child, {
            style: {
              height: '100%',
              minWidth: '365px',
              maxWidth: '365px',
            }

          })
        })
      )
    }
  }, [children, width])

  useEffect(() => {
    if (width <= 450) {
      setOffset(0)
      setPages(
        Children.map(children, child => {
          return cloneElement(child, {
            style: {
              height: '100%',
              minWidth: '300px',
              maxWidth: '300px',
            }
          })
        })
      )
    }
  }, [children, width])

  return (
    <div className="carousel-markets">
      {isScreenMy14 &&
        <>
          <FaChevronLeft className="arrow2" onClick={handleLeftArrowClick}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow2 arrow2_right" onClick={handleRightArrowClick}></FaChevronRight>
        </>}
      {isScreenMy15 &&
        <>
          <FaChevronLeft className="arrow2" onClick={handleLeftArrowClick760}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow2 arrow2_right" onClick={handleRightArrowClick760}></FaChevronRight>
        </>}
      {isScreenMy16 &&
        <>
          <FaChevronLeft className="arrow2" onClick={handleLeftArrowClick450}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow2 arrow2_right" onClick={handleRightArrowClick450}></FaChevronRight>
        </>}
    </div>
  )
}

export default Carousel
