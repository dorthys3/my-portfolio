import React from 'react'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <div className="foot-links">
          <a href={personal.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}