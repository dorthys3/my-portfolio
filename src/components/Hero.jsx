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
            Detail-oriented and motivated aspiring Full-Stack Software Developer with strong foundations in programming, software development principles, and modern web technologies. Skilled in Java, JavaScript, and web development frameworks, with hands-on experience in building responsive web applications. Passionate about problem-solving, continuous learning, and applying best practices in software development to create efficient and scalable solutions.

          </p><br></br><br></br>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  )
}
