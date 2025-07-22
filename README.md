# Software-Engineer-Web-Portfolio
Portfolio Website - Kamohelo Maphela
A modern, responsive portfolio website showcasing my skills, education, projects, and professional services as a Software Engineer. Built with clean HTML5, CSS3, and JavaScript with smooth animations and interactive features.
🌟 Features
Design & User Experience

Responsive Design: Fully responsive layout that works seamlessly across all devices
Modern UI/UX: Clean, professional design with smooth animations and hover effects
Dark Theme: Elegant dark green gradient theme with accent colors
Smooth Scrolling: One-page layout with smooth scroll navigation
Active Navigation: Dynamic navigation highlighting based on current section

Interactive Elements

Typing Animation: Dynamic text animation showing "Software Engineer" and "Software Developer"
Social Media Integration: Direct links to Facebook, Twitter, Instagram, LinkedIn, and GitHub
Contact Form: Functional contact form with EmailJS integration and validation
Hover Tooltips: Interactive social media icons with descriptive labels
Download CV: Direct download link for curriculum vitae

Sections

Home: Hero section with introduction and social links
Education: Academic background and qualifications
Certifications: Professional certifications from FreeCodeCamp
Skills: Technical skills organized by categories
Projects: Portfolio of development projects
Services: Professional services offered
Contact: Contact form and information

🛠️ Technologies Used
Frontend

HTML5: Semantic markup with modern structure
CSS3:

Flexbox and CSS Grid for layouts
CSS Animations and Transitions
Custom Properties (CSS Variables)
Responsive Media Queries


JavaScript (ES6+):

Typed.js for text animations
EmailJS for contact form functionality
Smooth scrolling navigation
Form validation



External Libraries

Typed.js: For animated typing effects
Unicons: Icon library for consistent iconography
EmailJS: Email service for contact form submissions
Google Fonts: Poppins font family

Services

EmailJS: Handles contact form submissions without backend server

🚀 Getting Started
Prerequisites

Modern web browser (Chrome, Firefox, Safari, Edge)
Internet connection (for external libraries and fonts)

Installation

Clone the repository
bashgit clone https://github.com/Kamohelo02/portfolio-website.git
cd portfolio-website

File Structure
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── assets/
│   ├── Me.png          # Profile image
│   ├── Education.png   # Education section icon
│   ├── Certification.png # Certification section icon
│   ├── Skills.png      # Skills section icon
│   ├── Projects.png    # Projects section icon
│   ├── Services.png    # Services section icon
│   ├── Contacts.png    # Contact section icon
│   └── Curriculum Vitae.pdf # CV file
└── README.md

Setup EmailJS (Optional)

Create an account at EmailJS
Create a service and template
Replace the service ID and public key in script.js:
javascriptemailjs.init({
    publicKey: 'YOUR_PUBLIC_KEY', // Replace with your key
});

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)



Launch the website

Open index.html in your web browser
Or use a local server like Live Server (VS Code extension)



📱 Responsive Breakpoints

Desktop: 1200px and above
Tablet: 768px to 1199px
Mobile: Below 768px

✨ Key Features Explained
Smooth Navigation
The website uses JavaScript to detect scroll position and automatically highlight the corresponding navigation link.
Contact Form Validation

Real-time form validation
Email format verification
Required field checking
Success/error message display
EmailJS integration for email delivery

Animation System

CSS keyframe animations for page load effects
Staggered animations using CSS custom properties
Hover effects for interactive elements
Smooth transitions throughout

Social Media Integration

Direct links to all major social platforms
Hover tooltips with platform names
Consistent styling with theme colors

🎨 Customization
Colors
The website uses a green color scheme. To change colors, update these CSS custom properties:
css:root {
    --primary-color: #23cf17;      /* Green accent */
    --bg-primary: #0f3a2e;         /* Dark green */
    --bg-secondary: #1a4f3d;       /* Medium green */
    --bg-tertiary: #0d2b20;        /* Darker green */
    --text-light: #e9ede8;         /* Light text */
}
Content

Update personal information in index.html
Replace images in the assets folder
Modify sections to match your experience
Update social media links

Animations
Adjust animation timing by modifying the CSS animation properties:
cssanimation-delay: calc(0.2s * var(--i)); /* Staggered animations */
transition: all 0.3s ease;              /* Smooth transitions */
🔧 Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Mobile browsers (iOS Safari, Chrome Mobile)

📊 Performance Features

Optimized images and assets
Minimal external dependencies
Efficient CSS animations
Lazy loading considerations
Mobile-first responsive design

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is open source and available under the MIT License.
📞 Contact
Kamohelo Maphela

Email: kamohelomaphela04@gmail.com
Phone: +27 734 757 7506
LinkedIn: Kamohelo Maphela
GitHub: Kamohelo02

🙏 Acknowledgments

FreeCodeCamp for certifications and learning resources
Unicons for the beautiful icon library
Google Fonts for the Poppins font family
Typed.js for the smooth typing animations
EmailJS for contact form functionality


Built with ❤️ by Kamohelo Maphela
