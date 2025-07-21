# Contributing to Main Street Digital Consulting Website

Thank you for your interest in contributing to our website! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/mainstreet-digital-website.git
   cd mainstreet-digital-website
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Making Changes

### Code Style Guidelines

- **HTML**: Use semantic HTML5 elements
- **CSS**: Follow BEM methodology for class naming
- **JavaScript**: Use modern ES6+ syntax
- **Indentation**: Use 2 spaces for indentation
- **Comments**: Add comments for complex logic

### File Structure

```
├── index.html              # Main homepage
├── our-apps.html           # Apps showcase page  
├── assets/
│   ├── css/
│   │   ├── main.css        # Main styles
│   │   └── style.css       # Additional styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # All image assets
```

### Testing Your Changes

1. **Local Testing**: Open `index.html` in your browser
2. **Mobile Testing**: Test on different screen sizes
3. **Browser Testing**: Check compatibility across browsers
4. **Performance**: Ensure fast loading times

## 🎨 Design Guidelines

- **Colors**: Use CSS custom properties defined in `:root`
- **Typography**: Stick to Inter and Poppins font families
- **Spacing**: Use consistent spacing units (rem/em)
- **Responsive**: Mobile-first approach

## 📱 Mobile Optimization

When making changes, ensure:
- Touch targets are at least 44px
- Text is readable without zooming
- Forms work well on mobile keyboards
- Images are optimized for mobile

## 🔧 Development Workflow

1. **Make your changes** in your feature branch
2. **Test thoroughly** across devices and browsers
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** on GitHub

## 📋 Pull Request Guidelines

### PR Title Format
- `Add: [description]` for new features
- `Fix: [description]` for bug fixes
- `Update: [description]` for updates
- `Optimize: [description]` for performance improvements

### PR Description
Include:
- Summary of changes
- Screenshots (if UI changes)
- Testing performed
- Any breaking changes

## 🐛 Bug Reports

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

## 💡 Feature Requests

For new features:
- Describe the feature clearly
- Explain the use case
- Consider mobile implications
- Provide mockups if possible

## 📊 Performance Considerations

- **Images**: Optimize all images (use WebP when possible)
- **CSS**: Minimize unused styles
- **JavaScript**: Avoid blocking the main thread
- **Fonts**: Use font-display: swap

## 🔍 Code Review Process

1. **Automated checks**: Ensure code passes basic validation
2. **Manual review**: Code will be reviewed for:
   - Functionality
   - Performance
   - Mobile compatibility
   - Code quality
3. **Testing**: Changes will be tested on various devices

## 🎯 Deployment

- **GitHub Pages**: Automatic deployment on merge to main
- **Custom Domain**: Configured via CNAME file
- **CDN**: External assets served from CDN

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: mainstreetdigitalconsulting@gmail.com

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Website credits (if significant contribution)
- Release notes

Thank you for contributing to Main Street Digital Consulting!

---

*This contributing guide is designed to help maintain code quality and ensure a smooth development process.*