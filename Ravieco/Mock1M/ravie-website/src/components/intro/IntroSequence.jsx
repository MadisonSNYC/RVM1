/**
 * Premium Intro Sequence Component
 * Inspired by Domaine.com - 4.2 second choreographed animation
 * 
 * Timeline:
 * 0-900ms: Black screen + headline fade in/raise
 * 900-2400ms: Mosaic tiles reveal L→R with stagger
 * 2400-3300ms: Partial clear (top/bottom exit) + secondary copy
 * 3300-4200ms: Page reveal (overlay slides up)
 */

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntroState } from './useIntroState'
import './intro.css'

// Import project thumbnails for mosaic
import CoinbaseThumbnail from '../../assets/CoinbaseThumbnail.webp'
import LoopsWP from '../../assets/LoopsWP.webp'
import kwthmb from '../../assets/kwthmb.webp'
import JheneThmb from '../../assets/JheneThmb.webp'
import Ozonethmb1 from '../../assets/Ozonethmb1.webp'
import ososthmb from '../../assets/ososthmb.webp'
import cfathmb from '../../assets/cfathmb.webp'
import ravieIcon from '../../assets/ravie-icon.png'
import ravieLogo from '../../assets/Ravielogo1.png'

// Timeline constants (in ms) - Slower timing, no headline
const TIMELINE = {
  total: 8500,
  preroll: { start: 0, end: 3600 },        // 3.6s for word cycle (500ms delay + 4*750ms + 100ms)
  mosaic: { start: 3600, end: 5600 },      // 2s for mosaic reveal
  leftSlide: { start: 5600, end: 6300 },   // 0.7s for left half to slide black
  pause: { start: 6300, end: 6600 },       // 0.3s pause
  secondary: { start: 6600, end: 7700 },   // 1.1s for secondary text
  reveal: { start: 7700, end: 8500 }       // 0.8s for final slide up
}

const STAGGER_DELAY = 120 // ms between each tile (slower stagger)

// Word cycle configuration
const WORD_CYCLE_CONFIG = {
  prefixes: ["create", "build", "launch", "move"],
  perWordMs: 750,  // Slower per word
  startDelayMs: 500
}

// Inline WordCycle component for pre-roll
function WordCycle({ prefixes, perWordMs, startDelayMs, isVisible, currentTime }) {
  if (!isVisible) return null
  
  // Calculate which word should be showing
  const elapsedTime = currentTime
  
  // During delay, show nothing
  if (elapsedTime < startDelayMs) {
    return null
  }
  
  // Time since words started showing
  const timeInWords = elapsedTime - startDelayMs
  
  // Which word? (0-indexed)
  const wordIndex = Math.floor(timeInWords / perWordMs)
  
  // If we've shown all words, fade out
  if (wordIndex >= prefixes.length) {
    return null
  }
  
  const currentPrefix = prefixes[wordIndex]
  
  // Are we in the fade out phase?
  const isFadingOut = false // Simplified - just cut to next word
  
  return (
    <motion.div
      className="intro-word-cycle"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isFadingOut ? 0 : 1
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 40,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentPrefix}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, var(--color-ravie-red) 0%, var(--color-ravie-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {currentPrefix}
          </motion.span>
        </AnimatePresence>
        <img 
          src={ravieLogo} 
          alt="Ravie.co" 
          style={{
            height: 'clamp(2rem, 5vw, 3.5rem)',
            width: 'auto',
            opacity: 0.95
          }}
        />
      </div>
    </motion.div>
  )
}

export default function IntroSequence({ onComplete }) {
  const { shouldPlay, markAsCompleted, isReducedMotion } = useIntroState()
  const [currentTime, setCurrentTime] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const animationFrame = useRef()
  const startTime = useRef()
  const containerRef = useRef()

  // Lock body scroll when intro is active
  useEffect(() => {
    if (shouldPlay && isVisible) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [shouldPlay, isVisible])

  // Mosaic tiles configuration (5x3 grid - perfect checkerboard)
  // Pattern: M=Media, B=Black
  // Row 0: M B M B M
  // Row 1: B M B M B  
  // Row 2: M B M B M
  const tiles = [
    // Row 0
    { id: 1, src: CoinbaseThumbnail, row: 0, col: 0 },  // M
    { id: 2, row: 0, col: 1, isBlack: true },           // B
    { id: 3, src: kwthmb, row: 0, col: 2 },            // M
    { id: 4, row: 0, col: 3, isBlack: true },          // B
    { id: 5, src: LoopsWP, row: 0, col: 4 },           // M
    // Row 1  
    { id: 6, row: 1, col: 0, isBlack: true },          // B
    { id: 7, src: JheneThmb, row: 1, col: 1 },         // M
    { id: 8, row: 1, col: 2, isBlack: true },          // B
    { id: 9, src: ravieIcon, row: 1, col: 3, isLogo: true }, // M (Logo)
    { id: 10, row: 1, col: 4, isBlack: true },         // B
    // Row 2
    { id: 11, src: ososthmb, row: 2, col: 0 },         // M
    { id: 12, row: 2, col: 1, isBlack: true },         // B
    { id: 13, src: cfathmb, row: 2, col: 2 },          // M
    { id: 14, row: 2, col: 3, isBlack: true },         // B
    { id: 15, src: Ozonethmb1, row: 2, col: 4 }        // M
  ]

  // Calculate tile index for L→R sweep (row-major order)
  const getTileIndex = (row, col) => row * 5 + col

  // Handle completion
  const handleComplete = useCallback(() => {
    markAsCompleted()
    
    // Start exit animation
    setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ''
      onComplete?.()
      
      // Transfer focus to main content
      const mainHeading = document.querySelector('h1:not(.intro-headline)')
      if (mainHeading) {
        mainHeading.tabIndex = -1
        mainHeading.focus()
        mainHeading.removeAttribute('tabindex')
      }
    }, 300)
  }, [markAsCompleted, onComplete])

  // Main animation loop using RAF for smooth timeline
  useEffect(() => {
    if (!shouldPlay) {
      setIsVisible(false)
      onComplete?.()
      return
    }

    // Reduced motion: skip pre-roll, start at mosaic
    if (isReducedMotion) {
      setCurrentTime(TIMELINE.mosaic.start)
      setTimeout(handleComplete, 200)
      return
    }

    // Animation loop
    const animate = (timestamp) => {
      if (!startTime.current) {
        startTime.current = timestamp
      }

      const elapsed = timestamp - startTime.current
      setCurrentTime(elapsed)

      if (elapsed < TIMELINE.total) {
        animationFrame.current = requestAnimationFrame(animate)
      } else {
        handleComplete()
      }
    }

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [shouldPlay, isReducedMotion, handleComplete, onComplete])


  if (!isVisible) return null

  // Calculate animation states based on timeline
  const prerollVisible = currentTime >= TIMELINE.preroll.start && currentTime < TIMELINE.preroll.end
  // No headline phase anymore
  const headlineVisible = false
  const headlineRaised = false
  const headlineExiting = false
  const mosaicVisible = currentTime >= TIMELINE.mosaic.start
  const leftHalfSliding = currentTime >= TIMELINE.leftSlide.start
  const isPaused = currentTime >= TIMELINE.pause.start && currentTime < TIMELINE.secondary.start
  const secondaryVisible = currentTime >= TIMELINE.secondary.start && currentTime < TIMELINE.reveal.start
  const overlayExiting = currentTime >= TIMELINE.reveal.start

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="intro-container"
        initial={{ opacity: 1 }}
        animate={{ 
          y: overlayExiting ? '-110vh' : 0,
          opacity: overlayExiting ? 0 : 1
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1]
        }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-label="Loading Ravie"
        aria-modal="true"
      >
        {/* Skip button removed per user request */}

        {/* Pre-roll: Word cycle */}
        {!isReducedMotion && (
          <WordCycle
            prefixes={WORD_CYCLE_CONFIG.prefixes}
            perWordMs={WORD_CYCLE_CONFIG.perWordMs}
            startDelayMs={WORD_CYCLE_CONFIG.startDelayMs}
            isVisible={prerollVisible}
            currentTime={currentTime - TIMELINE.preroll.start}
          />
        )}

        {/* Phase 1: Headline - shows after pre-roll */}
        {headlineVisible && (
          <motion.div
            className="intro-headline-container"
            initial={{ opacity: 0, y: 16 }}
            animate={{ 
              opacity: 1,
              y: headlineRaised ? 0 : 16
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h1 className="intro-headline">
              We create <span className="intro-headline-em">cult</span> followings
            </h1>
          </motion.div>
        )}

        {/* Phase 2-3: Mosaic Grid */}
        {mosaicVisible && (
          <>
            <div className="intro-mosaic">
              {tiles.map((tile) => {
              const tileIndex = getTileIndex(tile.row, tile.col)
              const tileStartTime = TIMELINE.mosaic.start + (tileIndex * STAGGER_DELAY)
              const isTileVisible = currentTime >= tileStartTime
              
              // When sliding: hide everything except media tiles in left column
              const isLeftColumn = tile.col === 0
              const isLeftMediaTile = isLeftColumn && !tile.isBlack
              const shouldHide = leftHalfSliding && !isLeftMediaTile

              return (
                <motion.div
                  key={tile.id}
                  className={`intro-tile intro-tile-${tile.row}-${tile.col}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: shouldHide ? 0 : (isTileVisible ? 1 : 0),
                    scale: isTileVisible ? 1 : 0.98,
                    clipPath: isTileVisible 
                      ? 'inset(0% 0% 0% 0%)' 
                      : 'inset(0% 100% 0% 0%)'
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.6 },
                    clipPath: { 
                      duration: 0.8, 
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }
                  }}
                >
                  {tile.isBlack ? (
                    <div className="intro-tile-black" />
                  ) : tile.isLogo ? (
                    <div className="intro-tile-logo">
                      <img src={tile.src} alt="Ravie" />
                    </div>
                  ) : (
                    <img src={tile.src} alt="" loading="eager" />
                  )}
                </motion.div>
              )
            })}
            </div>
            
            {/* Black overlay for right side - covers everything except left column */}
            <motion.div
              className="intro-right-overlay"
              initial={{ x: '100%' }}
              animate={{ 
                x: leftHalfSliding ? 0 : '100%'
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
              }}
              style={{
                position: 'absolute',
                left: 'calc(20% + 2px)', // Account for grid gap
                top: 0,
                width: 'calc(80% - 2px)',
                height: '100%',
                background: '#000',
                pointerEvents: 'none',
                zIndex: 15
              }}
            />
          </>
        )}

        {/* Phase 3: Secondary copy - Bold statement */}
        <motion.div
          className="intro-secondary-bold"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: secondaryVisible ? 1 : 0
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            position: 'absolute',
            left: '35%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50%',
            zIndex: 20
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            textAlign: 'left',
            margin: 0
          }}>
            We create<br/>
            <span style={{ color: 'var(--color-ravie-red)' }}>cult</span> followings
          </h2>
        </motion.div>

        {/* Debug progress bar (optional) */}
        {process.env.NODE_ENV === 'development' && (
          <div 
            className="intro-progress" 
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: `${(currentTime / TIMELINE.total) * 100}%`,
              height: '2px',
              background: 'var(--color-ravie-red)',
              zIndex: 10000
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}