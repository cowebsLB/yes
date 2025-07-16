// Main JavaScript file for portfolio website
class PortfolioApp {
    constructor() {
        this.currentPage = 'home';
        this.pages = {
            home: new HomePage(),
            about: new AboutPage(),
            projects: new ProjectsPage(),
            skills: new SkillsPage(),
            contact: new ContactPage()
        };
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.loadPage('home');
        this.handleRouting();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const pageName = href.substring(1);
                    this.loadPage(pageName);
                    this.updateActiveNavLink(link);
                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });
    }

    setupMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.add('hidden');
    }

    setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;
        let ticking = false;

        const updateNavbar = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow and blur effect on scroll
            if (scrollTop > 10) {
                navbar.classList.add('shadow-lg', 'backdrop-blur-md');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.classList.remove('shadow-lg', 'backdrop-blur-md');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            }

            // Hide/show navbar on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show navbar
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });

        // Add parallax effect to page content
        this.setupParallaxEffects();
        
        // Add mouse cursor effects
        this.setupCursorEffects();
    }

    updateActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'font-semibold');
            link.classList.add('text-gray-700');
        });
        
        // Update all links with the same href (desktop and mobile)
        const href = activeLink.getAttribute('href');
        const allMatchingLinks = document.querySelectorAll(`a[href="${href}"]`);
        allMatchingLinks.forEach(link => {
            link.classList.remove('text-gray-700');
            link.classList.add('text-blue-600', 'font-semibold');
        });
    }

    loadPage(pageName) {
        if (this.pages[pageName]) {
            this.currentPage = pageName;
            const content = this.pages[pageName].render();
            const mainContent = document.getElementById('main-content');
            
            // Add sophisticated page transition
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px) scale(0.98)';
            
            setTimeout(() => {
                mainContent.innerHTML = content;
                // Initialize page-specific functionality
                this.pages[pageName].init();
                
                // Add advanced animations after content load
                this.addAdvancedAnimations();
                
                // Enhanced fade in effect
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0) scale(1)';
                
                // Scroll to top with custom easing
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth'
                });
                
                // Trigger entrance animations
                this.triggerEntranceAnimations();
            }, 200);

            // Update URL without page reload
            history.pushState({page: pageName}, '', `#${pageName}`);
        }
    }

    triggerEntranceAnimations() {
        // Staggered entrance animations for elements
        const animatedElements = document.querySelectorAll('.animate-on-load');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    handleRouting() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const page = e.state?.page || this.getPageFromHash();
            this.loadPage(page);
            this.updateActiveNavLinkByPage(page);
        });

        // Handle initial page load from URL hash
        const initialPage = this.getPageFromHash();
        if (initialPage && initialPage !== 'home') {
            this.loadPage(initialPage);
            this.updateActiveNavLinkByPage(initialPage);
        }
    }

    getPageFromHash() {
        const hash = window.location.hash.substring(1);
        return this.pages[hash] ? hash : 'home';
    }

    updateActiveNavLinkByPage(pageName) {
        const targetLink = document.querySelector(`a[href="#${pageName}"]`);
        if (targetLink) {
            this.updateActiveNavLink(targetLink);
        }
    }

    setupParallaxEffects() {
        // Add floating particles background
        this.createFloatingParticles();
        
        // Add parallax scrolling to hero sections
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-element');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    setupCursorEffects() {
        // Create custom cursor
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
        document.body.appendChild(cursor);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

    createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        document.body.appendChild(particlesContainer);

        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    addAdvancedAnimations() {
        // Add magnetic effect to buttons
        const buttons = document.querySelectorAll('button, .cta-button');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0) scale(1)';
            });
        });

        // Add glitch effect to text on hover
        const glitchElements = document.querySelectorAll('.glitch-effect');
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('glitch-active');
                setTimeout(() => {
                    element.classList.remove('glitch-active');
                }, 500);
            });
        });
    }
}

// Utility functions
const utils = {
    // Animate elements when they come into view
    observeElements(selector, callback) {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    },

    // Add typing effect to text
    typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    },

    // Smooth scroll to element
    scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
