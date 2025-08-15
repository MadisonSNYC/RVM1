import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { X, ArrowRight, Check, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import { validateEmail, validateText } from '../utils/validation'

const formSteps = [
  {
    id: 'greeting',
    question: "Let's build something great together",
    subtext: "Hi there! What's your name?",
    field: 'name',
    type: 'text',
    placeholder: 'John Doe',
    validation: (value) => validateText(value, { minLength: 2, maxLength: 100, fieldName: 'Name' })
  },
  {
    id: 'email',
    question: "Nice to meet you, {name}!",
    subtext: "What's the best email to reach you?",
    field: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    validation: (value) => validateEmail(value)
  },
  {
    id: 'company',
    question: "Great! Almost there...",
    subtext: "What company or organization are you with?",
    field: 'company',
    type: 'text',
    placeholder: 'Awesome Corp (optional)',
    required: false,
    validation: (value) => validateText(value, { minLength: 0, maxLength: 100, required: false, fieldName: 'Company' })
  },
  {
    id: 'project',
    question: "Let's talk about your project",
    subtext: "What type of work are you looking for?",
    field: 'projectType',
    type: 'select',
    options: [
      { value: 'motion-graphics', label: 'Motion Graphics', icon: '🎬' },
      { value: 'brand-identity', label: 'Brand Identity', icon: '🎨' },
      { value: 'creative-direction', label: 'Creative Direction', icon: '✨' },
      { value: 'product-marketing', label: 'Product Marketing', icon: '📱' },
      { value: 'other', label: 'Something else', icon: '💡' }
    ]
  },
  {
    id: 'budget',
    question: "Let's align on investment",
    subtext: "What's your budget range for this project?",
    field: 'budget',
    type: 'select',
    options: [
      { value: '<10k', label: 'Less than $10K', icon: '🌱' },
      { value: '10k-25k', label: '$10K - $25K', icon: '🌿' },
      { value: '25k-50k', label: '$25K - $50K', icon: '🌳' },
      { value: '50k-100k', label: '$50K - $100K', icon: '🏔️' },
      { value: '>100k', label: 'More than $100K', icon: '🚀' }
    ]
  },
  {
    id: 'message',
    question: "Tell us your vision",
    subtext: "Share your goals and any specific requirements",
    field: 'message',
    type: 'textarea',
    placeholder: 'Describe your project goals, timeline, and any specific requirements...',
    validation: (value) => validateText(value, { minLength: 10, maxLength: 1000, fieldName: 'Message' })
  }
]

export default function FrostedContactForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fieldAnimation, setFieldAnimation] = useState(false)
  const inputRef = useRef(null)

  const currentStepData = formSteps[currentStep]
  const progress = ((currentStep + 1) / formSteps.length) * 100

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen, currentStep])

  useEffect(() => {
    if (errors[currentStepData?.field]) {
      setFieldAnimation(true)
      setTimeout(() => setFieldAnimation(false), 500)
    }
  }, [errors, currentStepData])

  const handleInputChange = useCallback((value) => {
    const field = currentStepData.field
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }))
    }
  }, [currentStepData, errors])

  const validateCurrentStep = useCallback(() => {
    const step = formSteps[currentStep]
    const value = formData[step.field]

    if (!step.required && step.required !== undefined && !value) {
      return true
    }

    if (step.validation) {
      const validation = step.validation(value)
      if (!validation.isValid) {
        setErrors({ [step.field]: validation.error })
        return false
      }
    } else if (!value && step.type !== 'select') {
      setErrors({ [step.field]: 'This field is required' })
      return false
    }

    return true
  }, [currentStep, formData])

  const handleNext = useCallback(() => {
    if (!validateCurrentStep()) return

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleSubmit()
    }
  }, [currentStep, validateCurrentStep])

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const mailtoLink = `mailto:work@ravie.co?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`

      window.location.href = mailtoLink
      setIsSuccess(true)

      setTimeout(() => {
        onClose()
        setCurrentStep(0)
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ submit: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && currentStepData.type !== 'textarea') {
      e.preventDefault()
      handleNext()
    }
  }, [currentStepData, handleNext])

  const getQuestionText = () => {
    let question = currentStepData.question
    if (question.includes('{name}') && formData.name) {
      question = question.replace('{name}', formData.name)
    }
    return question
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Frosted Glass Container */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl" />
            
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-white/40 text-sm mt-2">
                  Step {currentStep + 1} of {formSteps.length}
                </p>
              </div>

              {!isSuccess ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Question */}
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {getQuestionText()}
                      </h2>
                      <p className="text-white/60 text-lg">
                        {currentStepData.subtext}
                      </p>
                    </div>

                    {/* Input Field */}
                    <div className={`space-y-4 ${fieldAnimation ? 'animate-shake' : ''}`}>
                      {currentStepData.type === 'text' || currentStepData.type === 'email' ? (
                        <input
                          ref={inputRef}
                          type={currentStepData.type}
                          value={formData[currentStepData.field]}
                          onChange={(e) => handleInputChange(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={currentStepData.placeholder}
                          className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-lg placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
                          autoComplete="off"
                        />
                      ) : currentStepData.type === 'textarea' ? (
                        <textarea
                          ref={inputRef}
                          value={formData[currentStepData.field]}
                          onChange={(e) => handleInputChange(e.target.value)}
                          placeholder={currentStepData.placeholder}
                          rows={5}
                          className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-lg placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all resize-none"
                        />
                      ) : currentStepData.type === 'select' ? (
                        <div className="grid gap-3">
                          {currentStepData.options.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleInputChange(option.value)}
                              className={`
                                flex items-center gap-4 p-4 rounded-2xl border transition-all text-left
                                ${formData[currentStepData.field] === option.value
                                  ? 'bg-purple-500/20 border-purple-400 text-white'
                                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
                                }
                              `}
                            >
                              <span className="text-2xl">{option.icon}</span>
                              <span className="text-lg">{option.label}</span>
                              {formData[currentStepData.field] === option.value && (
                                <Check className="w-5 h-5 ml-auto text-purple-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      ) : null}

                      {/* Error Message */}
                      {errors[currentStepData.field] && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors[currentStepData.field]}
                        </motion.p>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8">
                      <button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={`
                          px-6 py-3 rounded-full font-medium transition-all
                          ${currentStep === 0
                            ? 'text-white/30 cursor-not-allowed'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                          }
                        `}
                      >
                        Back
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={isSubmitting}
                        className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                      >
                        {currentStep === formSteps.length - 1 ? (
                          <>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Sparkles className="w-5 h-5" />
                          </>
                        ) : (
                          <>
                            Next
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-white/60 text-lg">
                    We'll be in touch within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}