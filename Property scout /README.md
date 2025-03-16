# PropertyScout Zoning Transformation Animation

This project creates an interactive animation that visualizes how PropertyScout's zoning analysis technology helps real estate developers understand and leverage NYC zoning regulations, particularly in light of the "City of Yes" zoning changes.

## Overview

The animation demonstrates:

1. **Building Transformation**: Shows how a property can transform from its current state to its maximum potential under new zoning regulations
2. **Data Visualization**: Displays key zoning metrics (FAR, height, use groups) changing as the transformation occurs
3. **NYC Context**: Features a stylized NYC skyline as a backdrop

## Features

- **Interactive Animation**: Users can trigger the animation with a button and reset it
- **Responsive Design**: Works on desktop and mobile devices
- **Brand Consistency**: Uses PropertyScout's purple brand color scheme
- **SVG Graphics**: Lightweight, scalable vector graphics for optimal performance
- **Progressive Reveal**: Animation unfolds in stages for better comprehension

## Technical Implementation

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables, flexbox, and transitions
- **JavaScript**: Vanilla JS for animation logic and SVG creation
- **SVG**: Programmatically generated building and skyline graphics

## Placement Recommendations

This animation is designed to be placed in one of these strategic locations on the PropertyScout Consulting site:

1. **Hero Section**: As a focal point alongside or replacing the current YouTube video
2. **"City of Yes" Section**: To visually demonstrate the impact of zoning changes
3. **"Our Process" Section**: To illustrate the consulting workflow

## Usage

Simply open `index.html` in a modern web browser to view the animation. Click the "See Transformation" button to start the animation, which will show:

1. A building transforming from its current state to its potential under new zoning
2. Zoning metrics updating to reflect the new possibilities
3. A progress bar indicating the animation's progress

## Customization

The animation can be easily customized by modifying:

- Colors in the CSS variables (`:root` section in `styles.css`)
- Building dimensions and features in the `createBuildingSvg()` function
- Zoning metrics in the HTML structure
- Animation timing in the JavaScript file

## Integration

To integrate this animation into the PropertyScout Consulting website:

1. Copy the HTML structure from `index.html` into the desired section of the site
2. Include the CSS and JavaScript files
3. Adjust container dimensions and styling to match the site's design system

---

Created for PropertyScout Consulting to showcase their expertise in NYC real estate development and zoning analysis. 