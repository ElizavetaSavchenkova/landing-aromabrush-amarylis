import React, { cloneElement } from 'react';
import { useState, useEffect, Children } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useResize } from '../use-resize';
import './Carousel.css'

function Carousel({ children }) {

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const { width, isScreenMy15, isScreenMy14, isScreenMy16 } = useResize();

  const handleLeftArrowClick = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 542
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 542
      const maxOffset = - (542 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }


  ///

  const handleLeftArrowClick760 = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 410
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick760 = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 410
      const maxOffset = - (410 * (pages.length - 1))
      console.log(newOffset)
      return Math.max(newOffset, maxOffset)
    })
  }


  //

  const handleLeftArrowClick450 = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 270
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick450 = () => {
    console.log('click')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 270
      const maxOffset = - (270 * (pages.length - 1))
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
            minWidth: '546px',
            maxWidth: '546px'
          }

        })
      })
    )
  }, [children])


  useEffect(() => {
    if (width <= 760) {
      setPages(
        Children.map(children, child => {
          return cloneElement(child, {
            style: {
              height: '100%',
              minWidth: '410px',
              maxWidth: '410px'
            }

          })
        })
      )
    }

  }, [children, width])


    useEffect(() => {
    if (width <= 450) {
      setPages(
        Children.map(children, child => {
          return cloneElement(child, {
            style: {
              height: '100%',
              minWidth: '270px',
              maxWidth: '270px'
            }

          })
        })
      )
    }

  }, [children, width])

  return (
    <div className="carousel">

      {isScreenMy14 &&
        <>
          <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow" onClick={handleRightArrowClick}></FaChevronRight>
        </>}
      {isScreenMy15 &&
        <>
          <FaChevronLeft className="arrow" onClick={handleLeftArrowClick760}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow" onClick={handleRightArrowClick760}></FaChevronRight>
        </>}

        {isScreenMy16 &&
        <>
          <FaChevronLeft className="arrow" onClick={handleLeftArrowClick450}></FaChevronLeft>
          <div className="window">
            <div className="elements" style={{
              transform: `translateX(${offset}px)`
            }}>{pages}</div>
          </div>
          <FaChevronRight className="arrow" onClick={handleRightArrowClick450}></FaChevronRight>
        </>}



    </div>
  )
}

export default Carousel
