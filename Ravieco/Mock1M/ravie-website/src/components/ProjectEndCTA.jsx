import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react'
import ConversationalContactForm from './ConversationalContactForm'
import ScrollReveal from './ScrollReveal'

export default function ProjectEndCTA({ projectTitle = "this project" }) {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <section className="relative py-20 px-10 md:px-20 lg:px-44 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/10 to-vivid-purple/10 border border-neon-blue/20 mb-6"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Sparkles className="w-4 h-4 text-neon-blue" />
                </motion.div>
                <span className="text-neon-blue text-sm font-medium">Ready to create something amazing?</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Inspired by {projectTitle}?
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your vision to life with the same level of creativity and attention to detail.
              </p>

              {/* Primary CTA */}
              <motion.button
                onClick={() => setShowContactForm(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-vivid-purple rounded-2xl text-black font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue/25 transition-all duration-300 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MessageSquare className="w-6 h-6" />
                <span>Let's Talk About Your Project</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.p 
                className="text-white/40 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Response within 24 hours • No commitment required
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-neon-blue mb-2">50+</div>
              <div className="text-white/60 text-sm">Projects Delivered</div>
            </div>
            <div className="p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-vivid-purple mb-2">25M+</div>
              <div className="text-white/60 text-sm">Views Generated</div>
            </div>
            <div className="p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">8+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vivid-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl" />
      </section>

      {/* Contact Form Modal */}
      <ConversationalContactForm 
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  )
}