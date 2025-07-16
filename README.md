# Portfolio Website

A modern, responsive portfolio website built with HTML5, Tailwind CSS, and modular JavaScript. This single-page application features smooth navigation, beautiful animations, and a professional design.

## 🚀 Features

### Core Features
- **Single Page Application (SPA)** - Smooth navigation without page reloads
- **Fully Responsive** - Works perfectly on all devices and screen sizes
- **Modern Design** - Clean, professional interface with smooth animations
- **Modular Architecture** - Organized code structure with separate JS modules for each page
- **Fast Loading** - Optimized performance with CDN resources

### Page Sections
1. **Home** - Hero section with introduction, featured projects, and skills overview
2. **About** - Personal story, experience timeline, education, and values
3. **Projects** - Filterable project gallery with detailed modals
4. **Skills** - Interactive skill cards with proficiency levels and certifications
5. **Contact** - Contact form, information, and FAQ section

### Technical Features
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Font Awesome Icons** - Professional iconography throughout the site
- **Smooth Animations** - CSS transitions and JavaScript-powered effects
- **Mobile-First Design** - Responsive design starting from mobile devices
- **Accessibility** - Proper ARIA labels and keyboard navigation support
- **SEO Ready** - Semantic HTML structure and meta tags

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── js/
│   ├── main.js             # Core application logic and navigation
│   └── pages/
│       ├── home.js         # Home page module
│       ├── about.js        # About page module
│       ├── projects.js     # Projects page module
│       ├── skills.js       # Skills page module
│       └── contact.js      # Contact page module
└── README.md               # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **JavaScript (ES6+)** - Modern JavaScript with classes and modules
- **Font Awesome** - Icon library (CDN)

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, but recommended)

### Installation

1. **Clone or download** the project files to your local machine

2. **Open the project** in your preferred code editor

3. **Customize the content:**
   - Replace placeholder images with your actual photos and project screenshots
   - Update personal information in all page modules
   - Add your real contact information
   - Replace social media links with your profiles
   - Add your actual projects, skills, and experience

4. **Run the website:**
   - **Option 1:** Open `index.html` directly in your browser
   - **Option 2:** Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click index.html → "Open with Live Server"
     ```

## 🎨 Customization Guide

### 1. Personal Information
Update the following in each page module:

- **Home Page (`js/pages/home.js`)**:
  - Name in the hero section
  - Professional title and description
  - Profile image URL
  - Statistics (projects, experience, etc.)

- **About Page (`js/pages/about.js`)**:
  - Personal story and background
  - Experience timeline
  - Education details
  - Interests and values

- **Projects Page (`js/pages/projects.js`)**:
  - Project details in the `this.projects` array
  - Project images, descriptions, and technologies
  - GitHub and live demo URLs

- **Skills Page (`js/pages/skills.js`)**:
  - Skill levels and technologies in `this.skills` object
  - Certifications and achievements

- **Contact Page (`js/pages/contact.js`)**:
  - Contact information (email, phone, location)
  - Social media links
  - FAQ content

### 2. Styling and Colors
The website uses Tailwind CSS classes. To change colors:

- **Primary Color**: Replace `blue-600`, `blue-500`, etc. with your preferred color
- **Background Colors**: Modify gradient classes like `from-blue-50 to-indigo-100`
- **Custom Styles**: Add custom CSS in the `<head>` section of `index.html`

### 3. Images
Replace placeholder images with your actual content:

- Profile photos
- Project screenshots
- Professional headshots
- Company logos (if applicable)

### 4. Contact Form
The contact form includes basic validation and a simulated submission. To make it functional:

1. Replace the `submitForm()` method in `contact.js` with actual form handling
2. Integrate with a backend service or form handling service like:
   - Netlify Forms
   - Formspree
   - EmailJS
   - Your own backend API

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Mobile** (320px+): Single column layouts, hamburger menu
- **Tablet** (768px+): Two-column layouts, expanded navigation
- **Desktop** (1024px+): Multi-column layouts, full navigation
- **Large Desktop** (1280px+): Optimized spacing and larger content areas

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallback Support**: Graceful degradation for older browsers

## 📈 Performance Optimization

- **CDN Resources**: Fast loading of external libraries
- **Optimized Images**: Use WebP format when possible
- **Lazy Loading**: Images load as they come into view
- **Minification**: Consider minifying JavaScript for production
- **Caching**: Implement browser caching for better performance

## 🚢 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment with form handling
- **Vercel**: Git-based deployment with automatic builds
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static website hosting

### Traditional Hosting
- Upload files to any web hosting service
- Ensure the server can serve static files
- Point domain to the hosting location

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider sharing them!

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🙋‍♂️ Support

If you have questions about customization or run into issues:

1. Check the code comments for guidance
2. Review the browser console for error messages
3. Ensure all file paths are correct
4. Verify that CDN resources are loading properly

## ✨ Credits

- **Tailwind CSS** - For the utility-first CSS framework
- **Font Awesome** - For the icon library
- **Placeholder Images** - Replace with your actual content

---

**Happy coding!** 🎉

Remember to replace all placeholder content with your actual information before deploying your portfolio.
