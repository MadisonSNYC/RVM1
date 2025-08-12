// Centralized thumbnail imports to avoid duplication
import CoinbaseThumbnail from '../assets/CoinbaseThumbnail.webp'
import LoopsWP from '../assets/LoopsWP.webp'
import kwthmb from '../assets/kwthmb.webp'
import JheneThmb from '../assets/JheneThmb.webp'
import Ozonethmb1 from '../assets/Ozonethmb1.webp'
import ososthmb from '../assets/ososthmb.webp'
import cfathmb from '../assets/cfathmb.webp'
import Rectangle75 from '../assets/Rectangle+75.webp'

// Map of thumbnail filenames to imported assets
export const thumbnailMap = {
  'CoinbaseThumbnail.webp': CoinbaseThumbnail,
  'LoopsWP.webp': LoopsWP,
  'kwthmb.webp': kwthmb,
  'JheneThmb.webp': JheneThmb,
  'Ozonethmb1.webp': Ozonethmb1,
  'ososthmb.webp': ososthmb,
  'cfathmb.webp': cfathmb,
  'Rectangle+75.webp': Rectangle75,
  'image.png': Rectangle75 // Fallback for generic image references
}

// Helper function to get thumbnail with fallback
export const getThumbnail = (filename) => {
  return thumbnailMap[filename] || Rectangle75
}