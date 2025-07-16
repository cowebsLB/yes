// Home page module
class HomePage {
    constructor() {
        this.name = 'home';
    }

    render() {
        return `
            <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
                <!-- Animated Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient bg-300%"></div>
                
                <!-- Geometric Shapes -->
                <div class="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float parallax-element" data-speed="0.3"></div>
                <div class="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-float" style="animation-delay: 2s;" data-speed="0.2"></div>
                <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-float" style="animation-delay: 4s;" data-speed="0.4"></div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div class="animate-fade-in animate-on-load">
                        <div class="relative mb-8">
                            <img src="https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=Your+Photo" 
                                 alt="Profile Picture" 
                                 class="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-white hover-lift animate-glow">
                            <!-- Status indicator -->
                            <div class="absolute bottom-2 right-1/2 transform translate-x-16 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse-slow"></div>
                        </div>
                        
                        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                            Hi, I'm <span class="gradient-text glitch-effect typewriter-text">Your Name</span>
                        </h1>
                        
                        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-on-load">
                            A passionate <span class="text-blue-600 font-semibold gradient-text">Full Stack Developer</span> 
                            creating amazing digital experiences with modern technologies.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-load">
                            <button class="cta-button magnetic-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold 
                                         hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 
                                         shadow-lg hover:shadow-xl hover-lift">
                                <span>View My Work</span>
                                <i class="fas fa-rocket ml-2"></i>
                            </button>
                            <button class="cta-button magnetic-button border-2 border-gradient bg-white text-gray-800 px-8 py-3 rounded-lg 
                                         font-semibold hover:bg-gray-50 transform hover:scale-105 
                                         transition-all duration-200 hover-lift">
                                <span>Download CV</span>
                                <i class="fas fa-download ml-2"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="mt-16 animate-bounce-slow animate-on-load">
                        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
                            <i class="fas fa-chevron-down text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Quick About Section -->
            <section class="py-20 bg-white relative overflow-hidden">
                <!-- Background Elements -->
                <div class="absolute top-0 left-0 w-full h-full">
                    <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 parallax-element" data-speed="0.1"></div>
                </div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="animate-slide-up animate-on-load">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6 gradient-text">About Me</h2>
                            <p class="text-lg text-gray-600 mb-6">
                                I'm a creative developer with over X years of experience in building 
                                web applications. I love turning complex problems into simple, 
                                beautiful, and intuitive solutions.
                            </p>
                            <p class="text-lg text-gray-600 mb-8">
                                When I'm not coding, you'll find me exploring new technologies, 
                                contributing to open source projects, or enjoying a good cup of coffee.
                            </p>
                            <button class="text-blue-600 font-semibold hover:text-blue-700 
                                         transition-colors duration-200 about-link magnetic-button">
                                Learn More About Me <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                        <div class="animate-slide-up animate-on-load">
                            <div class="advanced-card bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white hover-lift">
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="text-center group">
                                        <div class="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-200">50+</div>
                                        <div class="text-blue-100">Projects</div>
                                    </div>
                                    <div class="text-center group">
                                        <div class="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-200">3+</div>
                                        <div class="text-blue-100">Years Exp</div>
                                    </div>
                                    <div class="text-center group">
                                        <div class="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-200">25+</div>
                                        <div class="text-blue-100">Happy Clients</div>
                                    </div>
                                    <div class="text-center group">
                                        <div class="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-200">15+</div>
                                        <div class="text-blue-100">Technologies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Projects -->
            <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-5">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.2) 1px, transparent 0); background-size: 50px 50px;"></div>
                </div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="text-center mb-16 animate-on-load">
                        <h2 class="text-4xl font-bold text-gray-900 mb-4 gradient-text">Featured Projects</h2>
                        <p class="text-xl text-gray-600">Some of my recent work</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-load">
                        ${this.renderFeaturedProjects()}
                    </div>
                    
                    <div class="text-center mt-12 animate-on-load">
                        <button class="projects-link magnetic-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold 
                                     hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 
                                     shadow-lg hover:shadow-xl hover-lift">
                            <span>View All Projects</span>
                            <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Skills Preview -->
            <section class="py-20 bg-white relative overflow-hidden">
                <div class="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50 parallax-element" data-speed="0.2"></div>
                <div class="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-2xl opacity-50 parallax-element" data-speed="0.3"></div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="text-center mb-16 animate-on-load">
                        <h2 class="text-4xl font-bold text-gray-900 mb-4 gradient-text">Technologies I Work With</h2>
                        <p class="text-xl text-gray-600">Always learning and staying up-to-date</p>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-on-load">
                        ${this.renderSkillIcons()}
                    </div>
                    
                    <div class="text-center mt-12 animate-on-load">
                        <button class="skills-link magnetic-button text-blue-600 font-semibold hover:text-blue-700 
                                     transition-colors duration-200">
                            View All Skills <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    renderFeaturedProjects() {
        const projects = [
            {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with React and Node.js",
                image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce",
                tags: ["React", "Node.js", "MongoDB"],
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                title: "Task Management App",
                description: "A collaborative task management tool with real-time updates",
                image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App",
                tags: ["Vue.js", "Express", "Socket.io"],
                gradient: "from-green-500 to-emerald-500"
            },
            {
                title: "Portfolio Website",
                description: "A responsive portfolio website with modern design",
                image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
                tags: ["HTML5", "CSS3", "JavaScript"],
                gradient: "from-purple-500 to-pink-500"
            }
        ];

        return projects.map((project, index) => `
            <div class="project-card advanced-card bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 
                      transition-all duration-500 hover:shadow-2xl hover-lift group animate-on-load"
                 style="animation-delay: ${index * 200}ms">
                <div class="relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 
                              transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <i class="fas fa-external-link-alt text-2xl mb-2"></i>
                            <p class="font-semibold">View Project</p>
                        </div>
                    </div>
                    <!-- Floating badge -->
                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <i class="fas fa-star text-yellow-500"></i>
                    </div>
                </div>
                <div class="p-6 relative">
                    <!-- Gradient border -->
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}"></div>
                    
                    <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        ${project.title}
                    </h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map((tag, tagIndex) => `
                            <span class="px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium
                                       transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                                  style="animation-delay: ${(index * 200) + (tagIndex * 50)}ms">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderSkillIcons() {
        const skills = [
            { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500", bg: "from-yellow-400 to-orange-500" },
            { name: "React", icon: "fab fa-react", color: "text-blue-500", bg: "from-blue-400 to-cyan-500" },
            { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500", bg: "from-green-400 to-emerald-500" },
            { name: "Python", icon: "fab fa-python", color: "text-blue-600", bg: "from-blue-500 to-indigo-500" },
            { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", bg: "from-orange-400 to-red-500" },
            { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-600", bg: "from-blue-400 to-purple-500" }
        ];

        return skills.map((skill, index) => `
            <div class="skill-icon text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl 
                      transition-all duration-500 transform hover:scale-110 hover:-rotate-2 hover-lift group cursor-pointer animate-on-load"
                 style="animation-delay: ${index * 100}ms">
                <!-- Animated background -->
                <div class="absolute inset-0 bg-gradient-to-r ${skill.bg} opacity-0 group-hover:opacity-10 
                          rounded-xl transition-opacity duration-300"></div>
                
                <!-- Icon container with pulse effect -->
                <div class="relative mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full 
                          bg-gradient-to-r ${skill.bg} p-0.5 group-hover:animate-pulse-slow">
                    <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <i class="${skill.icon} text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                
                <!-- Skill name with gradient effect on hover -->
                <div class="text-gray-700 font-medium group-hover:bg-gradient-to-r group-hover:${skill.bg} 
                          group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    ${skill.name}
                </div>
                
                <!-- Floating particles on hover -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div class="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r ${skill.bg} rounded-full animate-ping"></div>
                    <div class="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r ${skill.bg} rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
                </div>
            </div>
        `).join('');
    }

    init() {
        // Add typing effect to name with enhanced styling
        const nameElement = document.querySelector('.typewriter-text');
        if (nameElement) {
            const originalText = nameElement.textContent;
            nameElement.style.position = 'relative';
            utils.typeWriter(nameElement, originalText, 100);
            
            // Add cursor effect
            setTimeout(() => {
                nameElement.innerHTML += '<span class="animate-ping">|</span>';
            }, originalText.length * 100);
        }

        // Enhanced scroll animations with staggered delays
        utils.observeElements('.animate-on-load', (element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px) scale(0.95)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
        });

        // Add magnetic effect to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translate(0, 0) scale(1)';
            });
        });

        // Add advanced hover effects to skill icons
        const skillIcons = document.querySelectorAll('.skill-icon');
        skillIcons.forEach((icon, index) => {
            icon.addEventListener('mouseenter', () => {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl';
                ripple.style.animation = 'ripple 0.6s ease-out';
                icon.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add CSS for ripple animation
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    0% { transform: scale(0) rotate(0deg); opacity: 1; }
                    100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Setup enhanced button event listeners
        this.setupEventListeners();
        
        // Add parallax effect to floating elements
        this.setupAdvancedParallax();
    }

    setupAdvancedParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    }

    setupEventListeners() {
        // CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.textContent.includes('View My Work')) {
                    // Navigate to projects
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }));
                } else if (button.textContent.includes('Download CV')) {
                    // Trigger CV download
                    this.downloadCV();
                }
            });
        });

        // About link
        const aboutLink = document.querySelector('.about-link');
        if (aboutLink) {
            aboutLink.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' }));
            });
        }

        // Projects link
        const projectsLink = document.querySelector('.projects-link');
        if (projectsLink) {
            projectsLink.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }));
            });
        }

        // Skills link
        const skillsLink = document.querySelector('.skills-link');
        if (skillsLink) {
            skillsLink.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'skills' }));
            });
        }

        // Listen for navigation events
        window.addEventListener('navigate', (e) => {
            const app = window.portfolioApp || document.portfolioApp;
            if (app && app.loadPage) {
                app.loadPage(e.detail);
            }
        });
    }

    downloadCV() {
        // Create a sample CV download (you can replace with actual CV file)
        const link = document.createElement('a');
        link.href = '#'; // Replace with actual CV file path
        link.download = 'Your_Name_CV.pdf';
        link.click();
        
        // Show a message since we don't have an actual CV file
        alert('CV download functionality - Please replace with your actual CV file path');
    }
}
