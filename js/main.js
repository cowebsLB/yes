// Main JavaScript file for portfolio website
class PortfolioApp {
    constructor() {
        this.currentPage = 'home';
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
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
        this.setupLoadingScreen();
        this.setupThemeToggle();
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.loadPage('home');
        this.handleRouting();
        
        // Global navigation event listener
        window.addEventListener('navigate', (e) => {
            this.loadPage(e.detail);
        });
        
        // Store app reference globally for access from pages
        window.portfolioApp = this;
        
        // Enhanced keyboard navigation
        this.setupKeyboardNavigation();
        
        // Optimized performance monitoring with throttling
        this.setupPerformanceMonitoring();
        
        // Preload critical resources
        this.preloadResources();
    }

    setupLoadingScreen() {
        // Create loading screen
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 z-50 flex items-center justify-center">
                <div class="text-center text-white">
                    <div class="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                    <h2 class="text-2xl font-bold mb-2">Loading Portfolio</h2>
                    <p class="text-blue-100">Preparing an amazing experience...</p>
                </div>
            </div>
        `;
        document.body.appendChild(loadingScreen);

        // Remove loading screen after content loads with reduced delay
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => loadingScreen.remove(), 300);
            }, 500); // Reduced from 1000ms to 500ms
        });
    }

    setupThemeToggle() {
        // Apply saved theme
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        }

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            
            // Update icon based on current theme
            if (this.isDarkMode) {
                icon.className = 'fas fa-sun text-yellow-500';
            }

            themeToggle.addEventListener('click', () => {
                this.isDarkMode = !this.isDarkMode;
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('darkMode', this.isDarkMode);

                // Update icon with animation
                icon.style.transform = 'scale(0)';
                setTimeout(() => {
                    icon.className = this.isDarkMode ? 'fas fa-sun text-yellow-500' : 'fas fa-moon text-gray-700';
                    icon.style.transform = 'scale(1)';
                }, 150);
            });
        }
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

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Navigate with arrow keys
            if (e.altKey) {
                const pages = ['home', 'about', 'projects', 'skills', 'contact'];
                const currentIndex = pages.indexOf(this.currentPage);
                
                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    e.preventDefault();
                    this.loadPage(pages[currentIndex - 1]);
                } else if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
                    e.preventDefault();
                    this.loadPage(pages[currentIndex + 1]);
                }
            }
            
            // Quick navigation with number keys
            if (e.key >= '1' && e.key <= '5') {
                const pages = ['home', 'about', 'projects', 'skills', 'contact'];
                const pageIndex = parseInt(e.key) - 1;
                if (pages[pageIndex]) {
                    this.loadPage(pages[pageIndex]);
                }
            }
        });
    }

    setupPerformanceMonitoring() {
        // Optimized performance monitoring with throttling
        if ('performance' in window) {
            window.addEventListener('load', () => {
                // Use requestIdleCallback for non-critical monitoring
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => {
                        const perfData = performance.getEntriesByType('navigation')[0];
                        if (perfData) {
                            console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                        }
                    });
                } else {
                    setTimeout(() => {
                        const perfData = performance.getEntriesByType('navigation')[0];
                        if (perfData) {
                            console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                        }
                    }, 0);
                }
            });
        }
    }

    preloadResources() {
        // Preload critical images
        const criticalImages = [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=75',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=entropy&auto=format&q=75',
            'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=entropy&auto=format&q=75'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
}

// Utility functions
const utils = {
    // Optimized animate elements when they come into view
    observeElements(selector, callback) {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Use requestAnimationFrame for smoother animations
                    requestAnimationFrame(() => {
                        callback(entry.target, index);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '50px' // Start animation slightly before element is visible
        });

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
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    },

    // Show notification
    showNotification(message, type = 'success', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white/80 hover:text-white" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    // Copy text to clipboard
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            utils.showNotification('Copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
            utils.showNotification('Failed to copy to clipboard', 'error');
        }
    },

    // Format date
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Get random number between min and max
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Validate email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Get device type
    getDeviceType() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    },

    // Lazy load images
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('skeleton');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('skeleton');
            imageObserver.observe(img);
        });
    }
};

// Enhanced animations manager
class AnimationManager {
    static init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupMouseTracker();
    }

    static setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animate;
                    element.classList.add(`animate-${animationType}`);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }

    static setupHoverEffects() {
        // Enhanced button hover effects
        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'absolute inset-0 bg-white/20 rounded-lg transform scale-0';
                ripple.style.transition = 'transform 0.6s ease-out';
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.style.transform = 'scale(1)', 10);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    static setupMouseTracker() {
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Update custom cursor
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            }
            
            // Parallax effect for hero elements
            const parallaxElements = document.querySelectorAll('.parallax-mouse');
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const x = (mouseX * speed) / 100;
                const y = (mouseY * speed) / 100;
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

// Performance monitor
class PerformanceMonitor {
    static init() {
        this.trackPageLoad();
        this.trackUserInteractions();
        this.trackErrors();
    }

    static trackPageLoad() {
        window.addEventListener('load', () => {
            if ('performance' in window && 'getEntriesByType' in performance) {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
                console.log(`🚀 Page loaded in ${loadTime}ms`);
                
                if (loadTime > 3000) {
                    console.warn('⚠️ Slow page load detected');
                }
            }
        });
    }

    static trackUserInteractions() {
        let interactionCount = 0;
        
        ['click', 'keydown', 'scroll'].forEach(event => {
            document.addEventListener(event, () => {
                interactionCount++;
            }, { passive: true });
        });
        
        // Log interaction stats every 30 seconds
        setInterval(() => {
            if (interactionCount > 0) {
                console.log(`📊 User interactions: ${interactionCount}`);
                interactionCount = 0;
            }
        }, 30000);
    }

    static trackErrors() {
        window.addEventListener('error', (e) => {
            console.error('💥 JavaScript Error:', e.error);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('💥 Unhandled Promise Rejection:', e.reason);
        });
    }
}

// Advanced Search Functionality
class SearchManager {
    constructor() {
        this.searchData = [];
        this.init();
    }

    init() {
        this.buildSearchIndex();
        this.setupSearchListeners();
    }

    buildSearchIndex() {
        // Index all searchable content
        this.searchData = [
            { type: 'page', title: 'Home', content: 'portfolio developer web development', page: 'home' },
            { type: 'page', title: 'About', content: 'experience timeline education values story', page: 'about' },
            { type: 'page', title: 'Projects', content: 'portfolio work showcase development', page: 'projects' },
            { type: 'page', title: 'Skills', content: 'technologies programming languages frameworks', page: 'skills' },
            { type: 'page', title: 'Contact', content: 'email phone linkedin get in touch', page: 'contact' },
            
            // Add project data
            { type: 'project', title: 'E-Commerce Platform', content: 'react nodejs mongodb fullstack shopping', page: 'projects', id: 1 },
            { type: 'project', title: 'Task Management App', content: 'vue.js socketio collaboration real-time', page: 'projects', id: 2 },
            { type: 'project', title: 'Weather Dashboard', content: 'javascript api maps forecasts frontend', page: 'projects', id: 3 },
            { type: 'project', title: 'Blog CMS', content: 'nextjs markdown content management seo', page: 'projects', id: 4 },
            { type: 'project', title: 'Portfolio Website', content: 'html css javascript responsive design', page: 'projects', id: 5 },
            { type: 'project', title: 'API Gateway', content: 'nodejs express microservices authentication', page: 'projects', id: 6 },
            
            // Add skills data
            { type: 'skill', title: 'JavaScript', content: 'programming language frontend backend', page: 'skills' },
            { type: 'skill', title: 'React', content: 'frontend framework component library', page: 'skills' },
            { type: 'skill', title: 'Node.js', content: 'backend runtime javascript server', page: 'skills' },
            { type: 'skill', title: 'Python', content: 'programming language backend scripting', page: 'skills' },
            { type: 'skill', title: 'MongoDB', content: 'database nosql document storage', page: 'skills' },
            { type: 'skill', title: 'Docker', content: 'containerization deployment devops', page: 'skills' }
        ];
    }

    setupSearchListeners() {
        const searchInput = document.getElementById('global-search');
        const searchResults = document.getElementById('search-results');

        if (!searchInput) return;

        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                this.performSearch(searchInput.value);
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });

        // Keyboard navigation for search results
        searchInput.addEventListener('keydown', (e) => {
            const results = searchResults.querySelectorAll('.search-result');
            const activeResult = searchResults.querySelector('.search-result.active');
            let activeIndex = Array.from(results).indexOf(activeResult);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = Math.min(activeIndex + 1, results.length - 1);
                this.setActiveResult(results, activeIndex);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = Math.max(activeIndex - 1, 0);
                this.setActiveResult(results, activeIndex);
            } else if (e.key === 'Enter' && activeResult) {
                e.preventDefault();
                activeResult.click();
            } else if (e.key === 'Escape') {
                searchResults.classList.add('hidden');
                searchInput.blur();
            }
        });
    }

    performSearch(query) {
        const searchResults = document.getElementById('search-results');
        if (!query.trim()) {
            searchResults.classList.add('hidden');
            return;
        }

        const results = this.searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8); // Limit to 8 results

        this.displayResults(results, query);
    }

    displayResults(results, query) {
        const searchResults = document.getElementById('search-results');
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="p-4 text-gray-500 text-center">
                    <i class="fas fa-search mb-2 text-2xl"></i>
                    <p>No results found for "${query}"</p>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map((result, index) => `
                <div class="search-result p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 ${index === 0 ? 'active bg-gray-50' : ''}"
                     data-page="${result.page}" data-id="${result.id || ''}">
                    <div class="flex items-center">
                        <i class="fas fa-${this.getResultIcon(result.type)} text-blue-500 mr-3"></i>
                        <div>
                            <div class="font-medium text-gray-900">${this.highlightMatch(result.title, query)}</div>
                            <div class="text-sm text-gray-500 capitalize">${result.type}</div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add click listeners to results
            searchResults.querySelectorAll('.search-result').forEach(result => {
                result.addEventListener('click', () => {
                    const page = result.dataset.page;
                    const id = result.dataset.id;
                    
                    // Navigate to page
                    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
                    
                    // If it's a project, show the modal after navigation
                    if (id && page === 'projects') {
                        setTimeout(() => {
                            const projectsPage = window.portfolioApp.pages.projects;
                            if (projectsPage) {
                                projectsPage.showModal(id);
                            }
                        }, 500);
                    }
                    
                    searchResults.classList.add('hidden');
                    document.getElementById('global-search').value = '';
                    utils.showNotification(`Navigated to ${result.textContent.trim()}`);
                });
            });
        }

        searchResults.classList.remove('hidden');
    }

    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="bg-yellow-200 px-1 rounded">$1</span>');
    }

    getResultIcon(type) {
        const icons = {
            page: 'file-alt',
            project: 'code',
            skill: 'cog'
        };
        return icons[type] || 'search';
    }

    setActiveResult(results, index) {
        results.forEach((result, i) => {
            if (i === index) {
                result.classList.add('active', 'bg-gray-50');
            } else {
                result.classList.remove('active', 'bg-gray-50');
            }
        });
    }
}

// Particle Trail Effect
class ParticleTrail {
    constructor() {
        this.particles = [];
        this.maxParticles = 15;
        this.init();
    }

    init() {
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-trail';
            document.body.appendChild(particle);
            
            this.particles.push({
                element: particle,
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                life: 0
            });
        }
    }

    bindEvents() {
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Update first particle to follow mouse exactly
            if (this.particles[0]) {
                this.particles[0].targetX = mouseX;
                this.particles[0].targetY = mouseY;
                this.particles[0].life = 1;
            }
        });
    }

    animate() {
        this.particles.forEach((particle, index) => {
            if (index > 0) {
                // Make each particle follow the previous one
                const prevParticle = this.particles[index - 1];
                const dx = prevParticle.x - particle.x;
                const dy = prevParticle.y - particle.y;
                
                particle.targetX = prevParticle.x - dx * 0.1;
                particle.targetY = prevParticle.y - dy * 0.1;
                particle.life = prevParticle.life * 0.95;
            }
            
            // Smooth movement
            particle.x += (particle.targetX - particle.x) * 0.15;
            particle.y += (particle.targetY - particle.y) * 0.15;
            
            // Update DOM element
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.opacity = particle.life * (1 - index / this.maxParticles);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// 3D Tilt Effect Manager
class TiltEffectManager {
    static init() {
        const tiltElements = document.querySelectorAll('.tilt-card');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * 10;
                const rotateY = (centerX - x) / centerX * 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }
}

// Enhanced Typing Animation
class TypingAnimation {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.currentPhraseIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.pauseTime = options.pauseTime || 2000;
        
        this.init();
    }

    init() {
        this.element.classList.add('typing-text');
        this.type();
    }

    type() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
                setTimeout(() => this.type(), 500);
                return;
            }
        } else {
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentPhrase.length) {
                this.isDeleting = true;
                setTimeout(() => this.type(), this.pauseTime);
                return;
            }
        }
        
        setTimeout(() => this.type(), this.isDeleting ? this.deleteSpeed : this.typeSpeed);
    }
}

// Progressive Web App Manager
class PWAManager {
    static init() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }

        // Add to home screen prompt
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Show install button
            const installBtn = document.createElement('button');
            installBtn.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50';
            installBtn.innerHTML = '<i class="fas fa-download mr-2"></i>Install App';
            installBtn.onclick = () => {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        utils.showNotification('Portfolio app installed!');
                    }
                    deferredPrompt = null;
                    installBtn.remove();
                });
            };
            
            document.body.appendChild(installBtn);
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                if (installBtn.parentNode) {
                    installBtn.remove();
                }
            }, 10000);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all systems
    new PortfolioApp();
    AnimationManager.init();
    PerformanceMonitor.init();
    
    // Initialize new advanced features
    const searchManager = new SearchManager();
    const particleTrail = new ParticleTrail();
    TiltEffectManager.init();
    PWAManager.init();
    
    // Initialize lazy loading
    utils.lazyLoadImages();
    
    // Enhanced typing animation for hero section
    setTimeout(() => {
        const typingElement = document.querySelector('.typewriter-text');
        if (typingElement) {
            new TypingAnimation(typingElement, [
                'Full Stack Developer',
                'UI/UX Enthusiast', 
                'Problem Solver',
                'Tech Innovator',
                'Code Artist'
            ], {
                typeSpeed: 100,
                deleteSpeed: 50,
                pauseTime: 2000
            });
        }
    }, 1000);
    
    // Add keyboard shortcuts help
    document.addEventListener('keydown', (e) => {
        if (e.key === '?' && e.shiftKey) {
            utils.showNotification(`
                <div class="text-left">
                    <strong>Keyboard Shortcuts:</strong><br>
                    • Alt + ← → : Navigate pages<br>
                    • 1-5 : Quick page access<br>
                    • Ctrl + K : Focus search<br>
                    • Escape : Close modals/search
                </div>
            `, 'info', 8000);
        }
        
        // Ctrl+K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('global-search');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
    
    // Add visit counter (stored in localStorage)
    const visitCount = parseInt(localStorage.getItem('portfolioVisits') || '0') + 1;
    localStorage.setItem('portfolioVisits', visitCount.toString());
    console.log(`🎯 Portfolio visit #${visitCount}`);
    
    // Show welcome message for first-time visitors
    if (visitCount === 1) {
        setTimeout(() => {
            utils.showNotification('Welcome to my portfolio! Press Shift+? for keyboard shortcuts.', 'info', 5000);
        }, 2000);
    }
    
    console.log('🎉 Portfolio app initialized successfully with advanced features!');
});
