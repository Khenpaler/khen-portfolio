'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            About
          </h2>
        </motion.div>
        <div className="space-y-20 md:space-y-32">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={item % 2 === 0 ? "md:order-2" : ""}>
                <span className="text-sm text-green-500 font-medium">What I'm Doing</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  {item === 1 ? "Building Scalable Web Apps" : "Creating Mobile Solutions"}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-6">
                  {item === 1
                    ? "I develop robust web applications tailored to meet specific needs using modern frameworks and tools."
                    : "Crafting seamless mobile applications that offer great user experiences."}
                </p>
                <button className="group relative px-4 md:px-6 py-2 rounded-full overflow-hidden">
                  <span className="absolute inset-0 border border-green-500 rounded-full group-hover:scale-105 transition-transform" />
                  <span className="relative text-green-500 group-hover:text-white transition-colors z-10">
                    Learn More
                  </span>
                  <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-green-500" />
                </button>
              </div>
              <div className="relative group">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={
                      item === 1
                        ? "/images/about/web.png"
                        : "/images/about/mobile.png"
                    }
                    alt={item === 1 ? "Web Development" : "Mobile Development"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-0 transition-opacity blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
