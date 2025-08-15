import { useState, useRef, useMemo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react'
import InteractiveTimeline from '../components/InteractiveTimeline'
import ProcessVisualization from '../components/ProcessVisualization'
import RelatedProjectsCarousel from '../components/RelatedProjectsCarousel'
import ScrollReveal from '../components/ScrollReveal'
import MetricCard from '../components/MetricCard'
import FloatingNavigation from '../components/FloatingNavigation'
import ProjectHero from '../components/ProjectHero'
import FrostedContactForm from '../components/FrostedContactForm'
import ProjectEndCTA from '../components/ProjectEndCTA'
import useScrollSpy from '../hooks/useScrollSpy'

/**
 * ProjectPageContent Component
 * Main content component for individual project pages
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @returns {JSX.Element}
 */
export default function ProjectPageContent({ project }) {
  const navigate = useNavigate()
  const [showContactForm, setShowContactForm] = useState(false)
  const containerRef = useRef(null)
  
  // Section refs for scroll spy
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const deliverablesRef = useRef(null)
  const processRef = useRef(null)
  const resultsRef = useRef(null)
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])
  const progressBar = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })

  // Team members who worked on this project
  const teamMembers = useMemo(() => [
    { id: 1, name: "Austin Bauwens", role: "Creative Director", image: "/ravie-icon.png" },
    { id: 2, name: "Noah Wilde", role: "Lead Developer", image: "/ravie-icon.png" },
    { id: 3, name: "Madison", role: "Motion Designer", image: "/ravie-icon.png" }
  ], [])

  // Memoize section navigation configuration
  const sectionNav = useMemo(() => [
    { id: 'hero', label: 'Top', ref: heroRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'deliverables', label: 'Deliverables', ref: deliverablesRef },
    { id: 'process', label: 'Process', ref: processRef },
    { id: 'results', label: 'Results', ref: resultsRef }
  ], [])
  
  // Use custom scroll spy hook
  const activeSection = useScrollSpy(sectionNav)
  
  // Memoize scroll handler
  const scrollToSection = useCallback((sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50 origin-left"
        style={{ scaleX: progressBar }}
      />
      
      {/* Floating Dots Navigation */}
      <FloatingNavigation 
        sections={sectionNav}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Project Page Sub-Header - Below Main Navigation */}
      <div className="fixed top-20 left-0 right-0 z-30 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-2">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/work')}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Work</span>
            </button>
            <div className="h-4 w-px bg-white/20" />
            <p className="text-white/50 text-sm">{project.client} • {project.category}</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <ProjectHero 
        project={project}
        heroRef={heroRef}
        heroY={heroY}
        heroOpacity={heroOpacity}
      />

      {/* Project Tags Section */}
      <section className="relative z-10 bg-gradient-to-b from-black/50 to-black py-12">
        <div className="w-full px-10 md:px-20 lg:px-44">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Service Tags */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-white/40 text-xs uppercase tracking-widest min-w-[80px]">Services</span>
                <div className="flex flex-wrap gap-2">
                  {(project.services || ['Product Launch', 'Brand Design']).map((service, index) => (
                    <motion.span
                      key={service}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs text-white/70 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Industry Tags */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-white/40 text-xs uppercase tracking-widest min-w-[80px]">Industry</span>
                <div className="flex flex-wrap gap-2">
                  {(project.industries || ['Entertainment', 'Web3 & AI']).map((industry, index) => (
                    <motion.span
                      key={industry}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs text-white/70 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="relative z-10 bg-black">
        {/* About This Project */}
        <div ref={aboutRef} className="w-full px-10 md:px-20 lg:px-44 py-20">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-white font-light mb-8">
                About this project
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-white/60 uppercase text-sm mb-4">The Challenge</h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.challenge || "The client needed a fresh perspective to connect with their audience and stand out in a competitive market."}
                  </p>
                </div>
                <div>
                  <h3 className="text-white/60 uppercase text-sm mb-4">Our Approach</h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.approach || "We crafted a comprehensive visual strategy that balanced bold creativity with strategic business objectives."}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Deliverables with Sticky Elements */}
        <div ref={deliverablesRef} className="w-full px-10 md:px-20 lg:px-44 py-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12 max-w-4xl mx-auto">
              Key Deliverables
            </h2>
          </ScrollReveal>
          
          <div className="space-y-32">
            {/* Deliverable 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="lg:sticky lg:top-32">
                  <h3 className="text-2xl text-white mb-4">Brand Identity System</h3>
                  <p className="text-white/60 mb-6">
                    A complete visual identity that captures the essence of the brand while ensuring consistency across all touchpoints.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      Logo variations and usage guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      Color palette and typography system
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      Brand pattern library
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <img 
                    src={project.image}
                    alt="Brand Identity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Deliverable 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 lg:order-2">
                  <img 
                    src={project.image}
                    alt="Motion Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="lg:sticky lg:top-32 lg:order-1">
                  <h3 className="text-2xl text-white mb-4">Motion Design System</h3>
                  <p className="text-white/60 mb-6">
                    Dynamic animations that bring the brand to life and create memorable user experiences.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      Animated logo reveals
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      UI micro-interactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full" />
                      Social media animations
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="w-full px-10 md:px-20 lg:px-44 py-20 border-t border-white/10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12 text-center">
              Project Timeline
            </h2>
          </ScrollReveal>
          <InteractiveTimeline phases={project.phases} />
        </div>

        {/* Process Visualization */}
        <div ref={processRef} className="w-full px-10 md:px-20 lg:px-44 py-20 border-t border-white/10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12 text-center">
              Our Creative Process
            </h2>
          </ScrollReveal>
          <ProcessVisualization />
        </div>

        {/* Results Section with Animated Metrics */}
        <div ref={resultsRef} className="w-full px-10 md:px-20 lg:px-44 py-20 border-t border-white/10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12 max-w-4xl mx-auto">
              Impact & Results
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <MetricCard value="250%" label="Increase in engagement" delay={0.1} />
            <MetricCard value="3M+" label="Video views" delay={0.2} />
            <MetricCard value="45%" label="Conversion rate boost" delay={0.3} />
          </div>

          {/* Client Testimonial */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 max-w-4xl mx-auto">
              <blockquote className="relative">
                <div className="absolute -top-8 -left-4 text-6xl text-purple-500/20">"</div>
                <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed">
                  {project.testimonial || "Working with Ravie transformed our brand presence. Their creative vision and strategic approach delivered results beyond our expectations."}
                </p>
                <footer className="mt-6">
                  <p className="text-white">
                    {project.clientName || "Marketing Director"}
                  </p>
                  <p className="text-white/60">
                    {project.client}
                  </p>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>

        {/* Team Credits */}
        <div className="w-full px-10 md:px-20 lg:px-44 py-20 border-t border-white/10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12">
              Project Team
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <Link
                  to="/about"
                  className="group block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white group-hover:text-purple-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-white/60 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 group-hover:text-purple-400 transition-colors">
                    View full team →
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Project End CTA */}
        <ProjectEndCTA projectTitle={project.title} />

        {/* Related Projects Carousel with CTA */}
        <RelatedProjectsCarousel currentProject={project} />
      </section>


      {/* Contact Form Modal */}
      <FrostedContactForm 
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  )
}