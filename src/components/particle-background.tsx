'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return  // This ensures that ctx is not null

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3,
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      if (ctx) { // Ensures ctx is still not null before calling methods on it
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          particle.x += particle.dx
          particle.y += particle.dy

          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(74, 222, 128, 0.2)'
          ctx.fill()
        })
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black"
    />
  )
}