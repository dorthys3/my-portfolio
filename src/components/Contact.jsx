import React, { useState } from 'react'
import { personal } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // For demo: show a success message (replace with actual API call / email service)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

return (
    <section id="contact" className="contact">
        <div className="container">
            <h2>Contact</h2>
            <div className="contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="6" required />
                    <button className="btn" type="submit">Send Message</button>
                    {sent && <p className="success">Message sent! I'll reach out soon.</p>}
                </form>

                <div className="contact-info">
                    <h3>Get in touch</h3>
                    <p>Email: <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
                    <p>GitHub: <a href={personal.socials.github} target="_blank" rel="noreferrer">https://github.com/dorthys3</a></p>
                    <p>LinkedIn: <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">http://www.linkedin.com/in/dorthy-christobel-0ab73a33a</a></p>
                </div>
            </div>
        </div>
    </section>
)
}
