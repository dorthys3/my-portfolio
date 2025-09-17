import React from 'react'
import { personal } from '../data'
import profilePic from '../assets/profile.jpg'  // <-- Import image properly

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Hi, I'm DORTHY CHRISTOBEL.</h1>
          <p className="lead">
            {personal.role} — {personal.bio} <br />
            Detail-oriented and motivated professional with strong knowledge in software development fundamentals, quality assurance, and academic mentoring. Skilled in Java, JavaScript, and modern web technologies with a keen interest in software testing methodologies. Eager to contribute as a Testing Faculty, guiding students in mastering software testing concepts, tools, and practices while fostering a learning environment that bridges theory with practical application.
          </p>
          <a className="btn" href="#contact">Contact</a>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Dorthy Christobel" /> {/* <-- Use imported image */}
        </div>
      </div>
    </section>
  )
}
