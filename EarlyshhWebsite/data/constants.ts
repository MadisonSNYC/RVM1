// Screen dimensions for iPhone mockup placeholders
export const MOCKUP_SCREEN_WIDTH = 138 // Approx screen width inside a 150px wide mockup with 6px borders
export const MOCKUP_SCREEN_HEIGHT = 288 // Approx screen height inside a 300px tall mockup with 6px borders

// Common styling patterns
export const gradients = {
  primary: 'from-pink-500 via-purple-600 via-blue-600 to-turquoise-500',
  secondary: 'from-sky-400 to-cyan-400',
  cta: 'from-purple-600 via-pink-600 to-orange-500',
  benefits: 'from-purple-400 to-pink-400',
  features: 'from-sky-400 to-cyan-400',
  steps: 'from-pink-400 to-purple-400',
  insights: 'from-cyan-400 to-blue-400',
} as const

export const colors = {
  button: {
    primary: 'from-teal-400 to-cyan-500',
    primaryHover: 'from-teal-500 to-cyan-600',
  },
} as const