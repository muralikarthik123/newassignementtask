import React,{useRef} from 'react'
import './home.css'
import Home1 from './reviews/reviews.jsx'

export default function Home() {
    const videoRef = useRef(null);
  return (
    <div className='home'>
        
        {/*1st section*/}
      <div className='s1'>
        <div className='leftside'>
            <h1>Welcome to e-Learning website to crack front end Interview and get hired by Dream Companies</h1>
            <div>
                <button className='bt1'>Start Practice</button>
                <button className='bt2'>Learn More</button>
            </div>
            <br/>
        </div>
        <div className="rightside">
            <video
            ref={videoRef}
            autoPlay
            muted
            loop
            id="myVideo"
            className='video1'
            >
            <source src="sample.mp4" type="video/mp4" />
        </video>
        </div>
    </div>

    {/*2nd section*/}
    <br/>
    <h1 className='heading'>Our Programs</h1>
    <br/>
    <div className='s2'>
        <div className='box'>
            <h1>JavaScript Challenges</h1>
            <ul>
                <li>Print hello World Program</li>
                <br/>
                <li>Generate a Random Number</li>
                <br/>
                <li>Check the number is Prime or Not</li>
                <br/>
                <li>Swaping 2 varabiles</li>
                <br/>
                <li>Checking Number is Even or Odd</li>
                <br/>
                <li>Print hello World Program</li>
                <br/>
                <li>Find the second largest number in an array</li>
                <br/>
                <li>Count the number of vowels in a string </li>
            </ul>
            <a href='https://programiz.pro/community-challenges/javascript'><button className='bt2'>Start Practice Now</button></a>
            <p></p>
        </div>
        <div className='box'>
            <h1>React Projects</h1>
            <ul>
                <li>Fitness Tracker</li>
                <br/>
                <li>Quiz App</li>
                <br/>
                <li>Social Media website</li>
                <br/>
                <li>Food Delivery website</li>
                <br/>
                <li>eCommerce website</li>
                <br/>
                <li>Portfolio</li>
                <br/>
                <li> Movie Ticket Booking website</li>
                <br/>
                <li>Food Ordering website</li>
            </ul>
            <a href='https://www.geeksforgeeks.org/reactjs-projects/'><button className='bt2'>Built More Projects</button></a>
            <p></p>
        </div>
        <div className='box'>
            <h1>Full Stack Projects:</h1>
            <ul>
                <li>Job Application</li>
                <br/>
                <li>Data Analytics App</li>
                <br/>
                <li>Work-Out Tracker</li>
                <br/>
                <li> Social Media App</li>
                <br/>
                <li> E-Commerce Platform</li>
                <br/>
                <li>Social Media App</li>
                <br/>
                <li>Food Delivery App</li>
                <br/>
                <li>Solar Tracking System</li>
            </ul>
            <a href='https://www.geeksforgeeks.org/best-full-stack-project-ideas/'><button className='bt2'>Start Builting Projects</button></a>
            <p></p>
        </div>
    </div> 

    {/*what our user say 3*/}
    <br/>
    <h1 className='h3'>What Our User say All over the world</h1>
    <br/>
    <Home1/>
    <br/>
    </div>
  )
}
