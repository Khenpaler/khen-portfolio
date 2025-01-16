'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        {/* Skills and Technologies */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Next.js", level: 30, image: "./images/tech/nextjs.png" },
            { name: "React Native", level: 80, image: "./images/tech/react.png" },
            { name: "Laravel", level: 80, image: "./images/tech/laravel.png" },
            { name: "MySQL", level: 80, image: "./images/tech/mysql.png" },
            { name: "Git", level: 80, image: "./images/tech/git.png" },
            { name: "UX/UI", level: 50, image: "./images/tech/ui-ux.png" },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/10"
            >
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Details */}
              <div className="text-sm text-gray-400">{`Proficiency: ${skill.level}%`}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}