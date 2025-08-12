import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { companyInfo, offices, socialLinks } from '../data/company-info'
import ErrorBoundary from '../components/ErrorBoundary'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:${companyInfo.email}?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <ErrorBoundary fallbackMessage="Failed to load the contact page. Please refresh.">
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="body-sans">Back to Home</span>
            </Link>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Work Together
            </h1>
            <p className="body-sans text-xl text-white/60 max-w-3xl">
              Ready to create something extraordinary? We'd love to hear about your project 
              and explore how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="glass-dark rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#00D4FF]" />
                  <h2 className="heading-sans text-2xl font-bold text-white">Send us a message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="body-sans text-white/60 text-sm mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="body-sans text-white/60 text-sm mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="body-sans text-white/60 text-sm mb-2 block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] transition-colors"
                      placeholder="Awesome Corp"
                    />
                  </div>

                  <div>
                    <label className="body-sans text-white/60 text-sm mb-2 block">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="motion-graphics">Motion Graphics</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="creative-direction">Creative Direction</option>
                      <option value="product-marketing">Product Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="body-sans text-white/60 text-sm mb-2 block">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value=">100k">More than $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="body-sans text-white/60 text-sm mb-2 block">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                      placeholder="Share your vision, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-dark rounded-3xl p-8">
                <h3 className="heading-sans text-xl font-bold text-white mb-6">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 text-white/60 hover:text-[#00D4FF] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="body-sans">{companyInfo.email}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-white/60">
                    <MessageSquare className="w-5 h-5" />
                    <span className="body-sans">Response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              {offices.map((office) => (
                <div key={office.id} className="glass-dark rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#00D4FF]" />
                    <h3 className="heading-sans text-xl font-bold text-white">
                      {office.city} Office
                    </h3>
                  </div>
                  
                  <div className="body-sans text-white/60 mb-4">
                    <p>{office.address}</p>
                    <p>{office.zipcode}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-semibold">{office.contact.name}</p>
                      <p className="text-white/60 text-sm">{office.contact.title}</p>
                    </div>
                    
                    <a 
                      href={`mailto:${office.contact.email}`}
                      className="flex items-center gap-2 text-[#00D4FF] hover:text-[#8B5CF6] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="body-sans text-sm">{office.contact.email}</span>
                    </a>
                    
                    <a 
                      href={`tel:${office.contact.phone}`}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="body-sans text-sm">{office.contact.phone}</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="glass-dark rounded-3xl p-8">
                <h3 className="heading-sans text-xl font-bold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/3 left-1/4 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </ErrorBoundary>
  )
}