'use client'

import { motion } from 'framer-motion'

export default function Quote() {
  const summaryHighlights = [
    'Deliver production-grade features across React, Next.js, Flask, and Node.js to improve performance and UX.',
    'Build and ship Flutter + React Native apps adopted by thousands of active users.',
    'Engineer Way4 payment flows powering large-scale fintech and banking operations.',
    'Collaborate tightly with product, QA, and infrastructure teams to ensure smooth, dependable releases.',
  ]

  const educationHighlights = [
    'Focused on scalable software architecture, distributed systems, and system design.',
    'Led project-based courses in mobile development and DevOps workflows.',
    'Actively mentored juniors on clean code and performance-first engineering practices.',
  ]

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Professional Summary
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
              Full-Stack Software Developer — building real products that scale
            </h2>
            <p className="text-gray-600 mb-6">
              I build resilient software that balances product value with long-term sustainability.
              I thrive in fast-moving teams, owning features end-to-end — from discovery to deployment and beyond.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              {summaryHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              English: good working proficiency — experienced in global teams and documentation.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl shadow-inner p-8 border border-blue-100">
            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Education
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-2">
              Hanoi University of Science and Technology
            </h3>
            <p className="text-gray-700 font-medium mb-4">
              B.S. Computer Science · Graduation Grade: Very Good
            </p>
            <p className="text-gray-600 mb-6">Oct 2020 – Jul 2024</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              {educationHighlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
