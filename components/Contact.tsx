'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const tableRowVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.04,
      },
    }),
  }

  return (
    <section id="contact" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="mb-4"
        >
          <span className="text-blue-600 text-lg">Work</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Contact
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-lg text-gray-600 mb-8 max-w-3xl"
        >
          Get in touch with me anytime, through social media, e-mail.
        </motion.p>
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-8 lg:p-12 mb-8 will-change-transform border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-700 mb-8"
          >
            Just a friendly reminder that the information provided here is for <strong>business purposes only</strong>. 
            If you have any questions, feel free to chat with me directly on my social media. 
            I appreciate your understanding in using this responsibly.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              Contact
            </motion.h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <motion.tr 
                    className="border-b border-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Contact</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Detail</th>
                  </motion.tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Address', value: 'Gia Lâm, Hà Nội', isLink: false },
                    { label: 'Timezone', value: 'GMT+7', isLink: false },
                    { label: 'E-mail', value: 'van.nh120802@gmail.com', isLink: true, href: 'mailto:van.nh120802@gmail.com' },
                  ].map((row, index) => (
                    <motion.tr 
                      key={row.label}
                      className="border-b border-gray-100 will-change-[background-color]"
                      custom={index}
                      variants={tableRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        backgroundColor: 'rgba(37, 99, 235, 0.05)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <td className="py-3 px-4 text-gray-700">{row.label}</td>
                      <td className="py-3 px-4">
                        {row.isLink ? (
                          <motion.a 
                            href={row.href}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-2 will-change-transform"
                            whileHover={{ 
                              scale: 1.05, 
                              x: 5,
                              transition: { 
                                type: 'spring', 
                                stiffness: 400, 
                                damping: 25 
                              }
                            }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {row.value}
                          </motion.a>
                        ) : (
                          <span className="text-gray-700">{row.value}</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-gray-600 text-sm mt-4"
            >
              If you need any further information, such as my phone number, please do not hesitate to send me an email first.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              Social Media
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-4"
            >
              I've included some links to the social media platforms I use most frequently below.
            </motion.p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <motion.tr 
                    className="border-b border-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Social Media</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Profile URL</th>
                  </motion.tr>
                </thead>
                <tbody>
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com' },
                    { name: 'GitHub', url: 'https://github.com' },
                    { name: 'Facebook', url: 'https://facebook.com' },
                  ].map((social, index) => (
                    <motion.tr 
                      key={social.name}
                      className="border-b border-gray-100 will-change-[background-color]"
                      custom={index}
                      variants={tableRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        backgroundColor: 'rgba(37, 99, 235, 0.05)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <td className="py-3 px-4 text-gray-700">{social.name}</td>
                      <td className="py-3 px-4">
                        <motion.a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-200 will-change-transform"
                          whileHover={{ 
                            scale: 1.05, 
                            x: 5,
                            transition: { 
                              type: 'spring', 
                              stiffness: 400, 
                              damping: 25 
                            }
                          }}
                        >
                          https://www.{social.name.toLowerCase()}.com/...
                        </motion.a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
