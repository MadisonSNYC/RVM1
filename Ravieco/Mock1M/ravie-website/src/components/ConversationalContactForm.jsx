import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, ArrowRight, Sparkles } from 'lucide-react'

const FORM_STEPS = [
  {
    id: 'name',
    question: "Hi there! What's your name?",
    placeholder: "Enter your name",
    type: "text",
    required: true,
    validation: (value) => value.trim().length >= 2 ? null : "Please enter your name"
  },
  {
    id: 'email',
    question: "Nice to meet you! What's your business email?",
    placeholder: "your.email@company.com",
    type: "email",
    required: true,
    validation: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value) ? null : "Please enter a valid email address"
    }
  },
  {
    id: 'company',
    question: "What company are you with?",
    placeholder: "Your company name",
    type: "text",
    required: true,
    validation: (value) => value.trim().length >= 1 ? null : "Please enter your company name"
  },
  {
    id: 'service',
    question: "What type of project are you interested in?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select a service..." },
      { value: "brand-films", label: "Brand Films" },
      { value: "product-marketing", label: "Product Marketing" },
      { value: "social-media", label: "Social Media" },
      { value: "brand-design", label: "Brand Design" },
      { value: "interactive-web", label: "Interactive / Web" },
      { value: "live-experiential", label: "Live Experiential" },
      { value: "strategy", label: "Strategy" },
      { value: "other", label: "Something else" }
    ],
    validation: (value) => value ? null : "Please select a service"
  },
  {
    id: 'budget',
    question: "What's your estimated budget range?",
    type: "select",
    required: false,
    options: [
      { value: "", label: "Select budget range (optional)" },
      { value: "under-25k", label: "Under $25k" },
      { value: "25k-50k", label: "$25k - $50k" },
      { value: "50k-100k", label: "$50k - $100k" },
      { value: "100k-250k", label: "$100k - $250k" },
      { value: "250k-plus", label: "$250k+" },
      { value: "discuss", label: "Let's discuss" }
    ]
  },
  {
    id: 'message',
    question: "Tell us about your project and vision:",
    placeholder: "Describe your project, goals, timeline, or any specific requirements...",
    type: "textarea",
    required: true,
    validation: (value) => value.trim().length >= 20 ? null : "Please provide at least 20 characters describing your project"
  }
]

export default function ConversationalContactForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const inputRef = useRef(null)

  console.log('ConversationalContactForm render:', { isOpen, currentStep })

  const currentStepData = FORM_STEPS[currentStep]
  const isLastStep = currentStep === FORM_STEPS.length - 1

  // Focus input when step changes
  useEffect(() => {
    if (isOpen && inputRef.current && !isSubmitted) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentStep, isOpen, isSubmitted])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (value) => {
    setFormData(prev => ({
      ...prev,
      [currentStepData.id]: value
    }))
    
    // Clear error when user starts typing
    if (errors[currentStepData.id]) {
      setErrors(prev => ({
        ...prev,
        [currentStepData.id]: null
      }))
    }
  }

  const validateCurrentStep = () => {
    const value = formData[currentStepData.id] || ''
    const error = currentStepData.validation ? currentStepData.validation(value) : null
    
    if (error) {
      setErrors(prev => ({
        ...prev,
        [currentStepData.id]: error
      }))
      return false
    }
    
    return true
  }

  const handleNext = () => {
    if (!validateCurrentStep()) {
      // Add shake animation for invalid input
      inputRef.current?.classList.add('animate-shake')
      setTimeout(() => {
        inputRef.current?.classList.remove('animate-shake')
      }, 500)
      return
    }

    if (isLastStep) {
      handleSubmit()
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      setShowSuccess(true)
      
      // Auto close after success message
      setTimeout(() => {
        onClose()
        // Reset form
        setTimeout(() => {
          setCurrentStep(0)
          setFormData({})
          setErrors({})
          setIsSubmitting(false)
          setIsSubmitted(false)
          setShowSuccess(false)
        }, 500)
      }, 3000)
      
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ submit: 'Something went wrong. Please try again.' })
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleNext()
    }
  }

  const renderInput = () => {
    const value = formData[currentStepData.id] || ''
    const hasError = errors[currentStepData.id]

    if (currentStepData.type === 'select') {
      return (
        <motion.select
          ref={inputRef}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          className={`w-full p-4 bg-white/[0.03] backdrop-blur-md border rounded-2xl text-white text-lg focus:outline-none transition-all duration-300 ${
            hasError 
              ? 'border-red-500 focus:border-red-400' 
              : 'border-white/20 focus:border-neon-blue focus:bg-white/[0.05] focus:shadow-lg focus:shadow-neon-blue/10'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {currentStepData.options.map(option => (
            <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
              {option.label}
            </option>
          ))}
        </motion.select>
      )
    }

    if (currentStepData.type === 'textarea') {
      return (
        <motion.textarea
          ref={inputRef}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={currentStepData.placeholder}
          rows={4}
          className={`w-full p-4 bg-white/[0.03] backdrop-blur-md border rounded-2xl text-white text-lg placeholder-white/40 focus:outline-none resize-none transition-all duration-300 ${
            hasError 
              ? 'border-red-500 focus:border-red-400' 
              : 'border-white/20 focus:border-neon-blue focus:bg-white/[0.05] focus:shadow-lg focus:shadow-neon-blue/10'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      )
    }

    return (
      <motion.input
        ref={inputRef}
        type={currentStepData.type}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={currentStepData.placeholder}
        className={`w-full p-4 bg-white/[0.03] backdrop-blur-md border rounded-2xl text-white text-lg placeholder-white/40 focus:outline-none transition-all duration-300 ${
          hasError 
            ? 'border-red-500 focus:border-red-400' 
            : 'border-white/20 focus:border-neon-blue focus:bg-white/[0.05] focus:shadow-lg focus:shadow-neon-blue/10'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    )
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 400 }}
          className="bg-[#1A1A1A]/95 backdrop-blur-2xl rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl shadow-black/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Success State */}
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 400 }}
                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-green-400" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Thank you!</h3>
              <p className="text-white/80 text-lg mb-2">We've received your message and are excited about your project.</p>
              <p className="text-white/60">We'll get back to you within 1 business day.</p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 bg-neon-blue/10 border border-neon-blue/20 rounded-xl"
              >
                <p className="text-neon-blue text-sm">
                  🚀 In the meantime, check out our latest work or follow us on social media!
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-vivid-purple rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Let's Work Together</h2>
                </div>
                
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Close contact form"
                >
                  ✕
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Step {currentStep + 1} of {FORM_STEPS.length}</span>
                  <span className="text-white/60 text-sm">{Math.round(((currentStep + 1) / FORM_STEPS.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue to-vivid-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / FORM_STEPS.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <h3 className="text-xl text-white mb-6">{currentStepData.question}</h3>
                
                {renderInput()}
                
                {/* Error Message */}
                <AnimatePresence>
                  {errors[currentStepData.id] && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 mt-3 text-red-400"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errors[currentStepData.id]}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-6 py-3 text-white/70 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                )}

                {/* Next/Submit Button */}
                <motion.button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className={`ml-auto flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-neon-blue to-vivid-purple text-black hover:shadow-lg hover:shadow-neon-blue/25 hover:scale-105'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isLastStep ? (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm text-center mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="flex items-center justify-center gap-6 text-sm">
                  <a 
                    href="mailto:hello@ravie.co" 
                    className="text-neon-blue hover:text-vivid-purple transition-colors"
                  >
                    hello@ravie.co
                  </a>
                  <span className="text-white/30">•</span>
                  <a 
                    href="tel:+1234567890" 
                    className="text-neon-blue hover:text-vivid-purple transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}