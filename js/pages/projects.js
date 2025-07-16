// Projects page module
class ProjectsPage {
    constructor() {
        this.name = 'projects';
        this.currentFilter = 'all';
        this.projects = [
            {
                id: 1,
                title: "E-Commerce Platform",
                description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
                longDescription: "Built with React, Node.js, and MongoDB. Features include user registration/login, product catalog, shopping cart, payment integration with Stripe, order management, and comprehensive admin panel.",
                image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=E-Commerce+Platform",
                category: "fullstack",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true
            },
            {
                id: 2,
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates and team features.",
                longDescription: "Real-time collaborative task management built with Vue.js and Socket.io. Features include task creation, assignment, progress tracking, team collaboration, and real-time notifications.",
                image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+Management",
                category: "frontend",
                technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL", "Tailwind CSS"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true
            },
            {
                id: 3,
                title: "Weather Dashboard",
                description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
                longDescription: "Weather application featuring current conditions, 7-day forecasts, interactive maps, and location search. Built with vanilla JavaScript and integrates multiple weather APIs.",
                image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather+Dashboard",
                category: "frontend",
                technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false
            },
            {
                id: 4,
                title: "Blog CMS",
                description: "A content management system for blogs with markdown support and SEO optimization.",
                longDescription: "Custom CMS built with Next.js featuring markdown editor, SEO optimization, comment system, and admin dashboard. Includes static site generation for optimal performance.",
                image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Blog+CMS",
                category: "fullstack",
                technologies: ["Next.js", "React", "Node.js", "MongoDB", "Markdown"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false
            },
            {
                id: 5,
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website showcasing projects and skills.",
                longDescription: "Personal portfolio website built with modern web technologies. Features include responsive design, smooth animations, contact form, and optimized performance.",
                image: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Portfolio+Site",
                category: "frontend",
                technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true
            },
            {
                id: 6,
                title: "API Gateway",
                description: "A microservices API gateway with authentication and rate limiting.",
                longDescription: "Scalable API gateway built with Node.js and Express. Features include request routing, authentication, rate limiting, logging, and monitoring for microservices architecture.",
                image: "https://via.placeholder.com/600x400/6366F1/FFFFFF?text=API+Gateway",
                category: "backend",
                technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false
            }
        ];
    }

    render() {
        return `
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h1 class="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            A collection of projects I've worked on, showcasing various technologies and problem-solving approaches.
                        </p>
                    </div>

                    <!-- Filter Buttons -->
                    <div class="flex flex-wrap justify-center gap-4 mb-12">
                        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 
                                     bg-blue-600 text-white" data-filter="all">
                            All Projects
                        </button>
                        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 
                                     bg-gray-200 text-gray-700 hover:bg-gray-300" data-filter="featured">
                            Featured
                        </button>
                        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 
                                     bg-gray-200 text-gray-700 hover:bg-gray-300" data-filter="fullstack">
                            Full Stack
                        </button>
                        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 
                                     bg-gray-200 text-gray-700 hover:bg-gray-300" data-filter="frontend">
                            Frontend
                        </button>
                        <button class="filter-btn px-6 py-2 rounded-full font-medium transition-all duration-200 
                                     bg-gray-200 text-gray-700 hover:bg-gray-300" data-filter="backend">
                            Backend
                        </button>
                    </div>

                    <!-- Projects Grid -->
                    <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        ${this.renderProjects()}
                    </div>
                </div>
            </section>

            <!-- Project Modal -->
            <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
                <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div id="modal-content">
                        <!-- Modal content will be inserted here -->
                    </div>
                </div>
            </div>
        `;
    }

    renderProjects() {
        return this.projects.map(project => `
            <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 
                      transition-all duration-300 hover:shadow-xl" 
                 data-category="${project.category}" 
                 data-featured="${project.featured}"
                 data-project-id="${project.id}">
                <div class="relative group">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                    <div class="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-center">
                            <button class="view-project-btn bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold 
                                         hover:bg-gray-100 transition-colors duration-200 mb-3">
                                View Details
                            </button>
                            <div class="flex gap-4 justify-center">
                                <a href="${project.githubUrl}" class="text-white hover:text-gray-200 transition-colors duration-200" 
                                   target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                                <a href="${project.liveUrl}" class="text-white hover:text-gray-200 transition-colors duration-200" 
                                   target="_blank" rel="noopener noreferrer">
                                    <i class="fas fa-external-link-alt text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    ${project.featured ? '<div class="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</div>' : ''}
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.slice(0, 3).map(tech => `
                            <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">${tech}</span>
                        `).join('')}
                        ${project.technologies.length > 3 ? `<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">+${project.technologies.length - 3} more</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderModal(project) {
        return `
            <div class="relative">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10" 
                        id="close-modal">
                    <i class="fas fa-times"></i>
                </button>
                
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover">
                
                <div class="p-8">
                    <div class="flex items-center gap-4 mb-4">
                        <h2 class="text-3xl font-bold text-gray-900">${project.title}</h2>
                        ${project.featured ? '<span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>' : ''}
                    </div>
                    
                    <p class="text-gray-600 text-lg mb-6">${project.longDescription}</p>
                    
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `
                                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <a href="${project.githubUrl}" 
                           class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 
                                  transition-colors duration-200 flex items-center gap-2"
                           target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                        <a href="${project.liveUrl}" 
                           class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 
                                  transition-colors duration-200 flex items-center gap-2"
                           target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    filterProjects(filter) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.style.transform = 'scale(0.8)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                const category = card.dataset.category;
                const featured = card.dataset.featured === 'true';
                
                let shouldShow = false;
                
                if (filter === 'all') {
                    shouldShow = true;
                } else if (filter === 'featured') {
                    shouldShow = featured;
                } else {
                    shouldShow = category === filter;
                }
                
                if (shouldShow) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.transform = 'scale(1)';
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            }, 200);
        });
    }

    updateFilterButtons(activeFilter) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === activeFilter) {
                btn.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                btn.classList.add('bg-blue-600', 'text-white');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
            }
        });
    }

    showModal(projectId) {
        const project = this.projects.find(p => p.id === parseInt(projectId));
        if (project) {
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            
            modalContent.innerHTML = this.renderModal(project);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Setup close modal events
            const closeBtn = document.getElementById('close-modal');
            closeBtn.addEventListener('click', () => this.hideModal());
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideModal();
                }
            });
        }
    }

    hideModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    init() {
        // Add scroll animations
        utils.observeElements('.project-card', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.currentFilter = filter;
                this.filterProjects(filter);
                this.updateFilterButtons(filter);
            });
        });

        // Project cards - view details
        const viewProjectBtns = document.querySelectorAll('.view-project-btn');
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const projectCard = btn.closest('.project-card');
                const projectId = projectCard.dataset.projectId;
                this.showModal(projectId);
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });
    }
}
