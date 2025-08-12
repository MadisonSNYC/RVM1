import { motion } from 'framer-motion'
import { ArrowLeft, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAllProjects } from '../data/projects'
import ProjectGrid from '../components/ProjectGrid'
import ErrorBoundary from '../components/ErrorBoundary'

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  
  const allProjects = getAllProjects()
  
  // Get unique categories and industries
  const categories = ['All', ...new Set(allProjects.map(p => p.category))]
  const industries = ['All', ...new Set(allProjects.map(p => p.industry))]
  
  // Filter projects based on selections
  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
    const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry
    return categoryMatch && industryMatch
  })

  return (
    <ErrorBoundary fallbackMessage="Failed to load the work page. Please refresh.">
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="body-sans">Back to Home</span>
            </Link>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="body-sans text-xl text-white/60 max-w-3xl">
              Premium motion design and creative campaigns for the world's most innovative brands.
              From launch films to brand identities, we craft experiences that resonate.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-white/60" />
              <span className="heading-sans text-white font-semibold">Filter Projects</span>
            </div>
            
            {/* Category Filter */}
            <div>
              <label className="body-sans text-white/60 text-sm mb-3 block">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#00D4FF] text-black'
                        : 'glass border-white/20 text-white/60 hover:border-[#00D4FF] hover:text-[#00D4FF]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <label className="body-sans text-white/60 text-sm mb-3 block">Industry</label>
              <div className="flex flex-wrap gap-2">
                {industries.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'bg-[#8B5CF6] text-white'
                        : 'glass border-white/20 text-white/60 hover:border-[#8B5CF6] hover:text-[#8B5CF6]'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="body-sans text-white/40 text-sm">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </div>
          </motion.div>

          {/* Projects Grid */}
          <ProjectGrid 
            projects={filteredProjects}
            layout="grid"
            onProjectClick={(project) => {
              // Handle project click - could open modal or navigate to project page
              console.log('Project clicked:', project)
            }}
          />

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedIndustry('All')
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Background Elements */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </ErrorBoundary>
  )
}