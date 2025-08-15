import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useAnimate } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function RelatedProjectsCarousel({ currentProject }) {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [scope, animate] = useAnimate()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  
  // Motion values for drag
  const x = useMotionValue(0)
  const dragX = useMotionValue(0)
  
  // Get related projects based on tags/category
  const getRelatedProjects = () => {
    // Filter projects by same category or industry, excluding current
    const related = projects.filter(p => {
      if (p.id === currentProject.id) return false
      
      // Priority 1: Same category
      if (p.category === currentProject.category) return true
      
      // Priority 2: Same industry
      if (p.industry === currentProject.industry) return true
      
      // Priority 3: Same tier
      if (p.tier === currentProject.tier) return true
      
      return false
    })
    
    // Sort by relevance and limit to 6
    return related.slice(0, 6)
  }
  
  const relatedProjects = getRelatedProjects()
  
  // Check scroll boundaries
  const checkScrollBoundaries = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }
  
  // Smooth scroll with momentum
  const scrollToPosition = (direction) => {
    if (!containerRef.current) return
    
    const cardWidth = 400 // Approximate card width
    const currentScroll = containerRef.current.scrollLeft
    const targetScroll = direction === 'left' 
      ? Math.max(0, currentScroll - cardWidth * 2)
      : currentScroll + cardWidth * 2
    
    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }
  
  // Handle drag end with momentum
  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const velocity = info.velocity.x
    const momentum = velocity * 0.5
    
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft
      const targetScroll = Math.max(0, currentScroll - momentum)
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }
  
  // Convert vertical scroll to horizontal
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        container.scrollLeft += e.deltaY
        checkScrollBoundaries()
      }
    }
    
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])
  
  // Monitor scroll position
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    container.addEventListener('scroll', checkScrollBoundaries)
    checkScrollBoundaries() // Initial check
    
    return () => container.removeEventListener('scroll', checkScrollBoundaries)
  }, [])
  
  if (relatedProjects.length === 0) return null
  
  return (
    <section className="relative py-20">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-2">
              More Projects
            </h2>
            <p className="text-white/60 text-lg">But wait, there's more</p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToPosition('left')}
              disabled={!canScrollLeft}
              className={`
                w-12 h-12 rounded-full border flex items-center justify-center transition-all
                ${canScrollLeft 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-white/10 text-white/30 cursor-not-allowed'
                }
              `}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollToPosition('right')}
              disabled={!canScrollRight}
              className={`
                w-12 h-12 rounded-full border flex items-center justify-center transition-all
                ${canScrollRight 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-white/10 text-white/30 cursor-not-allowed'
                }
              `}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Scrollable Container */}
        <motion.div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
        >
          <div className="flex gap-6 px-6 lg:px-[calc((100vw-1280px)/2)]">
            {relatedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[350px] md:w-[400px] group"
              >
                <motion.div
                  whileHover={{ scale: isDragging ? 1 : 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => !isDragging && navigate(`/work/${project.id}`)}
                  className="cursor-pointer"
                >
                  {/* Project Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                    <img 
                      src={project.image || "/image.png"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/80 text-sm mb-2">{project.description}</p>
                        <div className="flex items-center gap-2 text-purple-400">
                          <span className="text-sm">View Project</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Preview on Hover */}
                    {project.video && (
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-1">
                    <h3 className="text-white text-lg font-medium group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {project.category} • {project.client}
                    </p>
                    {project.metrics && (
                      <p className="text-purple-400/80 text-xs">{project.metrics}</p>
                    )}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
        
        {/* Custom Scrollbar Indicator */}
        <div className="hidden md:block mt-6 mx-auto max-w-2xl px-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{
                width: '33%',
                x: useTransform(
                  () => containerRef.current?.scrollLeft || 0,
                  (value) => `${(value / (containerRef.current?.scrollWidth - containerRef.current?.clientWidth)) * 67}%`
                )
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto px-6 mt-20 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-white font-light mb-4">
            Interested in similar results?
          </h3>
          <p className="text-white/60 text-lg mb-8">
            Let's discuss how we can elevate your brand with motion design that captivates and converts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
          >
            Let's talk about your project
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

// Hide scrollbar but keep functionality
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

// Add styles to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = scrollbarHideStyles
  document.head.appendChild(style)
}