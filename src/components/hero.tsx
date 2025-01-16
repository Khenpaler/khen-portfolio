'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-green-500 to-white bg-clip-text text-transparent">
              Khen Harold Paler
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8">
              Hi, I'm a 4th-year BSIT student and a full-stack developer passionate about creating efficient and scalable applications. 
              I specialize in Laravel, React Native, and Next.js to deliver seamless web and mobile solutions.
            </p>
            <a
              href="/docs/Khen_Harold_Paler_CV.pdf"
              download="Khen_Harold_Paler_CV.pdf"
              className="relative group px-6 md:px-8 py-2 md:py-3 rounded-full overflow-hidden inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white opacity-90 group-hover:opacity-100 transition-opacity">Download CV</span>
            </a>
            <div className="mt-12 flex gap-6">
              {[
                { src: "./images/hero/facebook.png", alt: "Facebook", href: "https://web.facebook.com/khenpro123" },
                { src: "./images/hero/tiktok.png", alt: "TikTok", href: "https://www.tiktok.com/@khen732" },
                { src: "./images/hero/github.png", alt: "GitHub", href: "https://github.com/Khenpaler" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={50}
                      height={50}
                      className="opacity-80 hover:opacity-100 transition-opacity transform scale-100 hover:scale-125"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 md:mt-0"
          >
            <div className="aspect-square rounded-full overflow-hidden relative max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent z-10" />
              <Image
                src="./images/hero/khen_pic.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}