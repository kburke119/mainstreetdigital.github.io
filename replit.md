# Main Street Digital Consulting Website

## Overview

This is a static website for Main Street Digital Consulting, a digital marketing consultancy focused on helping small businesses with scalable, affordable digital solutions. The site serves as a marketing presence and lead generation tool, built with modern web technologies and optimized for performance and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (2025-07-10)

✓ Added new Main Street Digital Consulting logo to header, footer, and about sections
✓ Fixed mobile navigation dropdown functionality with proper open/close behavior
✓ Enhanced hero section with cleaner styling and better visual hierarchy
✓ Created placeholder SVG images for hero slider and portfolio sections
✓ Improved responsive design with better logo sizing and mobile navigation
✓ Updated color scheme and typography for professional appearance
✓ Fixed navigation toggle animation and click-outside-to-close functionality
✓ Fixed hero section double layering issue - corrected CSS positioning and z-index conflicts
✓ Created new "Our Apps" page with custom app showcase and pricing options
✓ Added "Our Apps" link to main navigation menu
✓ Enhanced hero section with quick links, badges, and floating stats
✓ Removed excessive animations and tightened Our Apps page layout
✓ Updated portfolio section with actual Digital Marketing Audit gif
✓ Cleaned up design by removing hero badges and floating stats for professional look
✓ Made Our Apps page more compact for desktop viewing
✓ Fixed footer consistency between homepage and Our Apps page
✓ Removed footer logo to clean up footer appearance

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and JavaScript (no frameworks)
- **Build System**: SASS for CSS preprocessing with live-server for development
- **Architecture Pattern**: Static site with component-based styling approach
- **Performance Strategy**: CDN-based external libraries with local asset optimization

### Styling System
- **CSS Architecture**: Modular CSS with custom properties (CSS variables)
- **Framework**: Bootstrap 5.3.0 loaded via CDN
- **Custom Styling**: Layered approach with main.css for base styles and style.css for enhancements
- **Design System**: Consistent color scheme, typography, and spacing using CSS custom properties

### JavaScript Architecture
- **Pattern**: Vanilla JavaScript with module-like organization
- **Event Handling**: Modern event listeners with throttling for performance
- **Animation**: AOS (Animate on Scroll) library for scroll-triggered animations
- **Component Initialization**: Centralized initialization system in main.js

## Key Components

### 1. Navigation System
- **Responsive navbar** with Bootstrap collapse functionality
- **Active link highlighting** based on scroll position
- **Scroll-triggered styling** changes for better UX
- **Multi-page navigation** with Our Apps page integration

### 2. Hero Section
- **Slider functionality** for multiple hero messages
- **Call-to-action** buttons for lead generation
- **Responsive design** across all device sizes
- **Fixed layering** with proper z-index management

### 3. Our Apps Page
- **Custom app showcase** with feature lists and pricing
- **Dual pricing model** (one-time purchase vs monthly subscription)
- **Interactive app cards** with hover effects
- **Responsive design** optimized for mobile devices
- **Call-to-action** for custom app development

### 4. Contact Form
- **JavaScript validation** for user input
- **Form submission handling** (likely to external service)
- **User feedback** for form states

### 5. Animation System
- **AOS library** for scroll-triggered animations
- **Custom scroll effects** for enhanced user experience
- **Performance-optimized** animation triggers

### 6. Performance Optimizations
- **Asset optimization** strategies
- **Lazy loading** implementations
- **Throttled event handlers** for smooth scrolling

## Data Flow

### Static Content Flow
1. **HTML Structure** → defines page layout and content
2. **CSS Styling** → applies design system and responsive layout
3. **JavaScript Enhancement** → adds interactivity and animations

### User Interaction Flow
1. **Page Load** → initialize all components and event listeners
2. **Scroll Events** → trigger navigation updates and animations
3. **Form Submission** → validate input and handle submission
4. **Navigation** → smooth scroll to sections with active state management

## External Dependencies

### CDN Dependencies
- **Bootstrap 5.3.0** - UI framework for responsive design
- **Font Awesome 6.4.0** - icon library
- **Google Fonts** - Inter and Poppins font families
- **AOS 2.3.1** - animation library for scroll effects

### Development Dependencies
- **SASS** - CSS preprocessing for enhanced styling capabilities
- **Live Server** - development server with auto-reload
- **HTTP Server** - static file serving for production builds

### Third-Party Services
- **Google Fonts API** - web font delivery
- **CDN Services** - for external library delivery
- **Form Handling** - likely external service integration (implementation pending)

## Deployment Strategy

### Static Site Deployment
- **Architecture**: Client-side only static website
- **Hosting**: Any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- **Build Process**: SASS compilation for CSS preprocessing
- **Asset Management**: Local assets with CDN fallbacks for external libraries

### Development Workflow
1. **Local Development** - using live-server for hot reload
2. **SASS Compilation** - for CSS preprocessing
3. **Asset Optimization** - manual optimization of images and files
4. **Deployment** - static file upload to hosting service

### Performance Considerations
- **CDN Usage** - external libraries served from CDN
- **Asset Optimization** - optimized images and CSS
- **Caching Strategy** - static assets with appropriate cache headers
- **SEO Optimization** - meta tags and semantic HTML structure

### Security Considerations
- **Static Site Security** - no server-side vulnerabilities
- **External Dependencies** - trusted CDN sources
- **Form Security** - client-side validation with server-side processing needed