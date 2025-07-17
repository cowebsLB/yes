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
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "fullstack",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true,
                status: "Live",
                year: "2024"
            },
            {
                id: 2,
                title: "Social Media Dashboard",
                description: "A comprehensive social media management dashboard with analytics and posting capabilities.",
                longDescription: "Modern social media management platform featuring real-time analytics, scheduled posting, engagement tracking, and multi-platform integration. Built with Vue.js for seamless user experience and comprehensive social media insights.",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "frontend",
                technologies: ["Vue.js", "Chart.js", "Express", "PostgreSQL", "Tailwind CSS", "Redis"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true,
                status: "Live",
                year: "2024"
            },
            {
                id: 3,
                title: "Twitter Analytics Tool",
                description: "Real-time Twitter analytics and engagement tracking with comprehensive insights.",
                longDescription: "Advanced Twitter analytics platform featuring real-time engagement tracking, sentiment analysis, hashtag monitoring, and comprehensive social media insights. Built with React and modern data visualization for detailed analytics reporting.",
                image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "frontend",
                technologies: ["React", "Twitter API", "Chart.js", "Node.js", "MongoDB", "Socket.io"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false,
                status: "Live",
                year: "2023"
            },
            {
                id: 4,
                title: "Blog CMS",
                description: "A content management system for blogs with markdown support and SEO optimization.",
                longDescription: "Custom CMS built with Next.js featuring markdown editor, SEO optimization, comment system, admin dashboard, multi-user support, and analytics integration. Includes static site generation for optimal performance.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6c7b8?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "fullstack",
                technologies: ["Next.js", "React", "Node.js", "MongoDB", "Markdown", "Vercel"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false,
                status: "Live",
                year: "2023"
            },
            {
                id: 5,
                title: "Instagram Marketing Hub",
                description: "A modern Instagram marketing platform with content scheduling and analytics.",
                longDescription: "Comprehensive Instagram marketing solution featuring content scheduling, hashtag optimization, engagement analytics, and visual content management. Built with modern web technologies for seamless social media marketing and brand management.",
                image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "fullstack",
                technologies: ["React", "Node.js", "Instagram API", "MongoDB", "Tailwind CSS"],
                githubUrl: "#",
                liveUrl: "#",
                featured: true,
                status: "Live",
                year: "2024"
            },
            {
                id: 6,
                title: "API Gateway",
                description: "A microservices API gateway with authentication and rate limiting.",
                longDescription: "Scalable API gateway built with Node.js and Express. Features include request routing, authentication, rate limiting, logging, monitoring, load balancing, and circuit breaker pattern for microservices architecture.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
                category: "backend",
                technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "Kubernetes"],
                githubUrl: "#",
                liveUrl: "#",
                featured: false,
                status: "In Development",
                year: "2024"
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

                    <!-- Blog/Articles Section -->
                    <div class="mt-20 mb-16">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-4">Latest Articles</h2>
                        <p class="text-xl text-gray-600 text-center mb-12">Sharing knowledge and insights from my development journey</p>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${this.renderBlogPosts()}
                        </div>
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

            <!-- Article Modal -->
            <div id="article-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
                <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div id="article-modal-content">
                        <!-- Article content will be inserted here -->
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
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                         loading="lazy"
                         decoding="async">
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
                
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-64 object-cover"
                     loading="lazy"
                     decoding="async">
                
                <div class="p-8">
                    <div class="flex items-center gap-4 mb-4">
                        <h2 class="text-3xl font-bold text-gray-900">${project.title}</h2>
                        ${project.featured ? '<span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>' : ''}
                    </div>
                    
                    <p class="text-gray-600 text-lg mb-6">${project.longDescription}</p>
                    
                    <!-- Project Stats -->
                    <div class="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-blue-600">${project.year}</div>
                            <div class="text-sm text-gray-600">Year</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${project.status}</div>
                            <div class="text-sm text-gray-600">Status</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-purple-600">${project.technologies.length}</div>
                            <div class="text-sm text-gray-600">Technologies</div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `
                                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-4">
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

    renderArticleModal(article) {
        return `
            <div class="relative">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10" 
                        id="close-article-modal">
                    <i class="fas fa-times"></i>
                </button>
                
                <img src="${article.image}" alt="${article.title}" 
                     class="w-full h-64 object-cover"
                     loading="lazy"
                     decoding="async">
                
                <div class="p-8">
                    <!-- Article Header -->
                    <div class="mb-6">
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                ${article.category}
                            </span>
                            <span class="text-gray-500 text-sm">${utils.formatDate(article.date)}</span>
                        </div>
                        
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">${article.title}</h1>
                        
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-3">
                                <img src="${article.authorImage}" alt="${article.author}" 
                                     class="w-10 h-10 rounded-full">
                                <div>
                                    <p class="font-medium text-gray-900">${article.author}</p>
                                    <p class="text-sm text-gray-500">${article.readTime}</p>
                                </div>
                            </div>
                            
                            <div class="flex space-x-3">
                                <button class="text-gray-400 hover:text-blue-600 transition-colors duration-200" 
                                        title="Share on Twitter">
                                    <i class="fab fa-twitter text-lg"></i>
                                </button>
                                <button class="text-gray-400 hover:text-blue-600 transition-colors duration-200" 
                                        title="Share on LinkedIn">
                                    <i class="fab fa-linkedin text-lg"></i>
                                </button>
                                <button class="text-gray-400 hover:text-blue-600 transition-colors duration-200" 
                                        title="Copy Link">
                                    <i class="fas fa-link text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Article Content -->
                    <div class="prose max-w-none mb-8">
                        ${article.content}
                    </div>
                    
                    <!-- Tags -->
                    <div class="border-t pt-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
                        <div class="flex flex-wrap gap-2">
                            ${article.tags.map(tag => `
                                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="mt-8 flex flex-wrap gap-4">
                        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 
                                     transition-colors duration-200 flex items-center gap-2"
                                id="close-article-btn">
                            <i class="fas fa-arrow-left"></i>
                            Back to Articles
                        </button>
                        <button class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 
                                     transition-colors duration-200 flex items-center gap-2"
                                onclick="utils.showNotification('Article bookmarked!', 'success')">
                            <i class="fas fa-bookmark"></i>
                            Bookmark
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderBlogPosts() {
        const blogPosts = [
            {
                id: 1,
                title: "Building Scalable React Applications",
                excerpt: "Learn the best practices and patterns for creating maintainable React applications that can grow with your team.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">Introduction to Scalable React Architecture</h3>
                    <p class="mb-4">Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the essential patterns and techniques that will help your React applications grow smoothly as your team and requirements expand.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">1. Component Architecture</h4>
                    <p class="mb-4">The foundation of any scalable React application lies in its component architecture. Here are the key principles:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Single Responsibility:</strong> Each component should have one clear purpose</li>
                        <li><strong>Composition over Inheritance:</strong> Use component composition to build complex UIs</li>
                        <li><strong>Prop Drilling Solutions:</strong> Implement Context API or state management for deep prop passing</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">2. State Management Strategies</h4>
                    <p class="mb-4">Choosing the right state management solution is crucial for scalability:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Local State:</strong> useState and useReducer for component-specific data</li>
                        <li><strong>Global State:</strong> Context API for shared application state</li>
                        <li><strong>External Libraries:</strong> Redux, Zustand, or Recoil for complex state management</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">3. Code Organization</h4>
                    <p class="mb-4">Organize your codebase for maintainability and team collaboration:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Feature-based folder structure</li>
                        <li>Shared components and utilities</li>
                        <li>Consistent naming conventions</li>
                        <li>Proper TypeScript integration</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Conclusion</h4>
                    <p class="mb-4">By following these patterns and best practices, you'll be well-equipped to build React applications that can scale with your team and business requirements. Remember, the key is to start simple and refactor as your application grows.</p>
                `,
                date: "2024-07-10",
                readTime: "8 min read",
                category: "React",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["React", "JavaScript", "Best Practices"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            },
            {
                id: 2,
                title: "Mastering Modern CSS Grid",
                excerpt: "Discover the power of CSS Grid and how it can revolutionize your layout designs with practical examples.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">CSS Grid: The Modern Layout Solution</h3>
                    <p class="mb-4">CSS Grid has revolutionized how we approach web layouts. Unlike traditional methods like floats or flexbox, Grid provides a two-dimensional layout system that gives you unprecedented control over your designs.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Understanding Grid Fundamentals</h4>
                    <p class="mb-4">CSS Grid introduces several key concepts:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Grid Container:</strong> The parent element with display: grid</li>
                        <li><strong>Grid Items:</strong> Direct children of the grid container</li>
                        <li><strong>Grid Lines:</strong> The dividing lines that make up the structure</li>
                        <li><strong>Grid Tracks:</strong> The space between two grid lines</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Practical Grid Examples</h4>
                    <div class="bg-gray-100 p-4 rounded mb-4">
                        <code class="text-sm">
                            .grid-container {<br>
                            &nbsp;&nbsp;display: grid;<br>
                            &nbsp;&nbsp;grid-template-columns: 1fr 2fr 1fr;<br>
                            &nbsp;&nbsp;grid-gap: 20px;<br>
                            }
                        </code>
                    </div>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Advanced Grid Techniques</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Grid areas for complex layouts</li>
                        <li>Auto-placement algorithms</li>
                        <li>Responsive grids with minmax()</li>
                        <li>Grid and flexbox integration</li>
                    </ul>
                    
                    <p class="mb-4">CSS Grid is incredibly powerful and can handle layouts that were previously impossible or required complex workarounds. Start experimenting with Grid in your next project!</p>
                `,
                date: "2024-07-05",
                readTime: "6 min read",
                category: "CSS",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["CSS", "Layout", "Grid"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            },
            {
                id: 3,
                title: "Node.js Performance Optimization",
                excerpt: "Practical tips and techniques to optimize your Node.js applications for better performance and scalability.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">Optimizing Node.js for Production</h3>
                    <p class="mb-4">Node.js performance optimization is crucial for building scalable backend applications. This guide covers essential techniques to improve your application's speed and efficiency.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Event Loop Optimization</h4>
                    <p class="mb-4">Understanding and optimizing the event loop is fundamental:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Avoid blocking the event loop with CPU-intensive tasks</li>
                        <li>Use worker threads for heavy computations</li>
                        <li>Implement proper error handling to prevent crashes</li>
                        <li>Monitor event loop lag with tools like clinic.js</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Memory Management</h4>
                    <p class="mb-4">Efficient memory usage prevents performance degradation:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Use streaming for large data processing</li>
                        <li>Implement proper garbage collection strategies</li>
                        <li>Monitor memory leaks with heap dumps</li>
                        <li>Use object pooling for frequently created objects</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Database Optimization</h4>
                    <p class="mb-4">Database interactions often become the bottleneck:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Use connection pooling</li>
                        <li>Implement query optimization</li>
                        <li>Cache frequently accessed data</li>
                        <li>Use database indexes effectively</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Caching Strategies</h4>
                    <p class="mb-4">Implement multiple layers of caching for optimal performance:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>In-memory caching with Redis</li>
                        <li>HTTP caching headers</li>
                        <li>CDN for static assets</li>
                        <li>Application-level caching</li>
                    </ul>
                `,
                date: "2024-06-28",
                readTime: "10 min read",
                category: "Node.js",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["Node.js", "Performance", "Backend"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            },
            {
                id: 4,
                title: "Database Design Best Practices",
                excerpt: "Essential principles for designing efficient and scalable database schemas that stand the test of time.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">Building Robust Database Schemas</h3>
                    <p class="mb-4">Good database design is the foundation of any successful application. This guide covers the essential principles for creating efficient, scalable, and maintainable database schemas.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Normalization Principles</h4>
                    <p class="mb-4">Understanding normalization helps eliminate data redundancy:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li><strong>First Normal Form (1NF):</strong> Eliminate repeating groups</li>
                        <li><strong>Second Normal Form (2NF):</strong> Remove partial dependencies</li>
                        <li><strong>Third Normal Form (3NF):</strong> Eliminate transitive dependencies</li>
                        <li><strong>BCNF:</strong> Every determinant is a candidate key</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Indexing Strategies</h4>
                    <p class="mb-4">Proper indexing dramatically improves query performance:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Primary keys and unique constraints</li>
                        <li>Composite indexes for multi-column queries</li>
                        <li>Partial indexes for filtered data</li>
                        <li>Index maintenance and monitoring</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Relationship Design</h4>
                    <p class="mb-4">Model relationships effectively:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>One-to-One relationships</li>
                        <li>One-to-Many relationships</li>
                        <li>Many-to-Many with junction tables</li>
                        <li>Foreign key constraints and cascading</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Performance Considerations</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Query optimization techniques</li>
                        <li>Partitioning strategies</li>
                        <li>Denormalization when appropriate</li>
                        <li>Connection pooling and caching</li>
                    </ul>
                `,
                date: "2024-06-20",
                readTime: "12 min read",
                category: "Database",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["Database", "SQL", "Architecture"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            },
            {
                id: 5,
                title: "The Future of Web Development",
                excerpt: "Exploring emerging trends and technologies that are shaping the future of web development.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">Web Development in 2024 and Beyond</h3>
                    <p class="mb-4">The web development landscape is constantly evolving. Let's explore the emerging trends and technologies that are shaping the future of how we build web applications.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">WebAssembly (WASM)</h4>
                    <p class="mb-4">WebAssembly is revolutionizing web performance:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Near-native performance in browsers</li>
                        <li>Support for multiple programming languages</li>
                        <li>Gaming and multimedia applications</li>
                        <li>Serverless computing integration</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Edge Computing</h4>
                    <p class="mb-4">Bringing computation closer to users:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Reduced latency and improved performance</li>
                        <li>Edge functions and middleware</li>
                        <li>Content delivery optimization</li>
                        <li>IoT and real-time applications</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">AI-Powered Development</h4>
                    <p class="mb-4">AI is transforming how we code:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Code generation and completion</li>
                        <li>Automated testing and debugging</li>
                        <li>Design-to-code conversion</li>
                        <li>Intelligent optimization suggestions</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Web3 and Decentralization</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Blockchain integration in web apps</li>
                        <li>Decentralized storage solutions</li>
                        <li>Smart contracts and DApps</li>
                        <li>New monetization models</li>
                    </ul>
                    
                    <p class="mb-4">The future of web development is exciting and full of possibilities. Stay curious, keep learning, and be ready to adapt to these emerging technologies!</p>
                `,
                date: "2024-06-15",
                readTime: "7 min read",
                category: "Trends",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["Trends", "Technology", "Future"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            },
            {
                id: 6,
                title: "Docker for Developers",
                excerpt: "A comprehensive guide to using Docker in your development workflow for consistent environments.",
                content: `
                    <h3 class="text-2xl font-bold mb-4">Mastering Docker for Development</h3>
                    <p class="mb-4">Docker has become an essential tool for modern development workflows. This comprehensive guide will help you understand and implement Docker effectively in your projects.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Docker Fundamentals</h4>
                    <p class="mb-4">Understanding the core concepts:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Images:</strong> Read-only templates for containers</li>
                        <li><strong>Containers:</strong> Running instances of images</li>
                        <li><strong>Dockerfile:</strong> Instructions for building images</li>
                        <li><strong>Volumes:</strong> Persistent data storage</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Development Workflow</h4>
                    <div class="bg-gray-100 p-4 rounded mb-4">
                        <code class="text-sm">
                            # Example Dockerfile<br>
                            FROM node:16-alpine<br>
                            WORKDIR /app<br>
                            COPY package*.json ./<br>
                            RUN npm install<br>
                            COPY . .<br>
                            EXPOSE 3000<br>
                            CMD ["npm", "start"]
                        </code>
                    </div>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Docker Compose</h4>
                    <p class="mb-4">Managing multi-container applications:</p>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Service definitions and dependencies</li>
                        <li>Environment variable management</li>
                        <li>Volume and network configuration</li>
                        <li>Development and production configs</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Best Practices</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Multi-stage builds for optimization</li>
                        <li>Security considerations and scanning</li>
                        <li>Image layer caching strategies</li>
                        <li>Container orchestration with Kubernetes</li>
                    </ul>
                    
                    <p class="mb-4">Docker streamlines development by ensuring consistency across environments. Start incorporating Docker into your workflow today!</p>
                `,
                date: "2024-06-10",
                readTime: "9 min read",
                category: "DevOps",
                image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=300&h=150&fit=crop&crop=entropy&auto=format&q=75",
                tags: ["Docker", "DevOps", "Containers"],
                author: "Your Name",
                authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75"
            }
        ];

        return blogPosts.map((post, index) => `
            <article class="blog-post bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 tilt-card"
                     style="animation-delay: ${index * 150}ms">
                <div class="image-hover-effect">
                    <img src="${post.image}" alt="${post.title}" 
                         class="w-full h-48 object-cover transition-transform duration-300"
                         loading="lazy"
                         decoding="async">
                </div>
                
                <div class="p-6">
                    <!-- Category and Date -->
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            ${post.category}
                        </span>
                        <span class="text-gray-500 text-sm">${utils.formatDate(post.date)}</span>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                        ${post.title}
                    </h3>
                    
                    <!-- Excerpt -->
                    <p class="text-gray-600 mb-4 line-clamp-3">${post.excerpt}</p>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${post.tags.slice(0, 3).map(tag => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">${tag}</span>
                        `).join('')}
                    </div>
                    
                    <!-- Read More -->
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 text-sm">
                            <i class="fas fa-clock mr-1"></i>
                            ${post.readTime}
                        </span>
                        <button class="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 read-more-btn"
                                data-post-id="${post.id}">
                            Read More <i class="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    filterProjects(filter) {
        const projectCards = document.querySelectorAll('.project-card');
        
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            projectCards.forEach(card => {
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
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 200);
                }
            });
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

    showArticleModal(articleId) {
        const blogPosts = this.getBlogPosts();
        const article = blogPosts.find(post => post.id === parseInt(articleId));
        if (article) {
            const modal = document.getElementById('article-modal');
            const modalContent = document.getElementById('article-modal-content');
            
            modalContent.innerHTML = this.renderArticleModal(article);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Setup close modal events
            const closeBtn = document.getElementById('close-article-modal');
            const backBtn = document.getElementById('close-article-btn');
            
            closeBtn.addEventListener('click', () => this.hideArticleModal());
            backBtn.addEventListener('click', () => this.hideArticleModal());
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideArticleModal();
                }
            });
        }
    }

    hideArticleModal() {
        const modal = document.getElementById('article-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    getBlogPosts() {
        // Return the blog posts array for reuse
        return [
            // ...blog posts data will be automatically included from renderBlogPosts
        ];
    }

    init() {
        // Optimized scroll animations with reduced complexity
        utils.observeElements('.project-card', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 50);
        });

        // Optimized blog post animations
        utils.observeElements('.blog-post', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            
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
                this.hideArticleModal();
            }
        });

        // Blog post read more buttons
        const readMoreBtns = document.querySelectorAll('.read-more-btn');
        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = btn.dataset.postId;
                this.showArticleModal(postId);
            });
        });
    }
}
