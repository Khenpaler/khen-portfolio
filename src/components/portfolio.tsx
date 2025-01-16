'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const handleImageClick = (image: any) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage("")
  }

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
        >
          My Portfolio
        </motion.h2>

        {/* Portfolio Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "TransitTrack: Fleet Management System",
              description: "A fleet management system for Canitoan Transport Cooperative to track buses, employees, maintenance scheduling, and fuel monitoring.",
              techStack: ["Next.js", "Tailwind CSS", "React Native", "Typescript", "Laravel", "MySQL", "Pusher", "Flespi",  "Sinotrack"],
              image: "/images/portfolio/transittrack.png",
              link: "/portfolio/transittrack"
            },
            {
              title: "Event Wise",
              description: "A comprehensive event management system designed to handle the scheduling, organization, and tracking of events. It allows users to create, manage, and attend events, with features such as notifications, ticketing, and detailed event information.",
              techStack: ["Next.js", "React Native", "Laravel"],
              image: "/images/portfolio/eventwise.png",
              link: "/portfolio/eventwise"
            },
            {
              title: "POKUS: Student Companion",
              description: "An app to help students with study scheduling and time management.",
              techStack: ["React Native", "Firebase"],
              image: "/images/portfolio/pokus.png",
              link: "/portfolio/pokus"
            },
            {
              title: "Scholar Attendance Monitoring System",
              description: "A system designed for monitoring student attendance, with functionalities for recording, tracking, and generating reports on student attendance patterns.",
              techStack: ["Lumen Laravel"],
              image: "/images/portfolio/scholar-attendance.png",
              link: "/portfolio/scholar-attendance"
            },
            {
              title: "Kent & Kent's Barber Shop",
              description: "A web-based system for managing barber shop operations, allowing users to schedule appointments, track services, and manage client information.",
              techStack: ["HTML", "CSS", "JavaScript"],
              image: "/images/portfolio/business_barber.png",
              link: "/portfolio/kent-barber-shop"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => handleImageClick(project.image)}
              />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Selected Project"
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}