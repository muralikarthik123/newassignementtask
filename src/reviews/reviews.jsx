import React from 'react'
import './reviews.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
export default function imgswitch() {
  return (
    <div className='reviews'>
      {/* Images flipping */}
      <div className="c1">
        <Carousel className='col1'>
          <Carousel.Item interval={1000}>
            <br/>
            <img className="images" src="./img4.jpg" alt="I1" />
            <h1 className='name'>Name:Siri</h1>
            <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>

          <Carousel.Item>
          <br/>
          <img className="images" src="./img7.webp" alt="I2" />
          <h1 className='name'>Name:David</h1>
          <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>

          <Carousel.Item>
          <br/>
            <img className="images" src="./img8.jpg" alt="I3" />
            <h1 className='name'>Name:Natasha</h1>
            <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
          <br/>
            <img className="images" src="./img6.jpg" alt="I4" />
            <h1 className='name'>Name:Emey</h1>
            <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
          <br/>
            <img className="images" src="./img5.webp" alt="I5" />
            <h1 className='name'>Name:John</h1>
            <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
          <br/>
            <img className="images" src="./img5.avif" alt="I6" />
            <h1 className='name'>Name:Joseph</h1>
            <p className='content'>Welcome to LearnSphere, your gateway to limitless learning opportunities.Discover a world of knowledge with our vast library of courses across technology, business, design, and more.Our interactive lessons are designed to make learning engaging, effective, and fun.</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
