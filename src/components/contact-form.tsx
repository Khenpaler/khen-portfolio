'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form Data:", formData) // Debugging step

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    try {
      console.log("Sending email with params:", templateParams) // Debugging step

      const response = await emailjs.send(
        'service_t58sigm', 
        'template_8ffwfkl', 
        templateParams,
        'UNdNG9DNyX7rde5xm'
      )

      console.log("EmailJS response:", response) // Debugging step

      if (response.status === 200) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Make the message disappear after 5 seconds
        setTimeout(() => {
          setStatus('')
        }, 5000)
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error("EmailJS error:", error) // Logging error
      setStatus('An error occurred. Please try again.')
    }
}

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-green-950/20 to-black" />
      <div className="container mx-auto px-4 max-w-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 md:py-3 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:border-green-500 transition-colors backdrop-blur-sm"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity blur -z-10" />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 md:py-3 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:border-green-500 transition-colors backdrop-blur-sm"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity blur -z-10" />
            </div>
            <div className="relative group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 md:py-3 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:border-green-500 transition-colors backdrop-blur-sm"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity blur -z-10" />
            </div>
            <div className="relative group">
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-4 py-2 md:py-3 bg-black/50 rounded-lg border border-white/10 focus:outline-none focus:border-green-500 transition-colors backdrop-blur-sm"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity blur -z-10" />
            </div>
            <button
              type="submit"
              className="w-full relative group px-6 py-2 md:py-3 rounded-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:scale-105 transition-transform" />
              <span className="relative text-white">Submit</span>
            </button>
            {status && <p className="text-center mt-4 text-white">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}