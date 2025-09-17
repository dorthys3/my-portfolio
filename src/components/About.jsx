import React from 'react'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer with a passion for building clean and accessible interfaces.
          I enjoy transforming designs into performant React apps.
        </p>
        <p>Bachelor of Computer Science , Madras University with CGPA: 8.08/10.00	2023 <br></br>
Masters in Computer Application , Anna University with CGPA: 8.01/10.00	2025
</p>
        <ul className="skills">
            <br></br>
            <h4>SKILLS:</h4>
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  )
}