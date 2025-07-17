// Skills page module
class SkillsPage {
    constructor() {
        this.name = 'skills';
        this.skills = {
            frontend: [
                { 
                    name: "HTML5", 
                    level: 95, 
                    icon: "fab fa-html5", 
                    color: "text-orange-500",
                    description: "Semantic markup and modern HTML5 features",
                    experience: "5+ years of experience creating semantic, accessible web structures",
                    projects: ["Portfolio Website", "E-commerce Platform", "Task Management App"],
                    relatedSkills: ["CSS3", "JavaScript", "Web Accessibility"],
                    certifications: ["W3C HTML5 Certification"]
                },
                { 
                    name: "CSS3", 
                    level: 90, 
                    icon: "fab fa-css3-alt", 
                    color: "text-blue-500",
                    description: "Modern CSS with animations, grid, flexbox, and responsive design",
                    experience: "5+ years creating responsive, animated interfaces",
                    projects: ["All Frontend Projects", "Component Libraries", "Animation Showcases"],
                    relatedSkills: ["SASS", "Tailwind CSS", "CSS Grid", "Flexbox"],
                    certifications: ["CSS Developer Certification"]
                },
                { 
                    name: "JavaScript", 
                    level: 92, 
                    icon: "fab fa-js-square", 
                    color: "text-yellow-500",
                    description: "ES6+ features, async programming, and modern JavaScript patterns",
                    experience: "4+ years of full-stack JavaScript development",
                    projects: ["SPA Applications", "Node.js APIs", "Interactive Web Apps"],
                    relatedSkills: ["TypeScript", "Node.js", "React", "Vue.js"],
                    certifications: ["JavaScript Developer Certification", "ES6 Certification"]
                },
                { 
                    name: "React", 
                    level: 88, 
                    icon: "fab fa-react", 
                    color: "text-blue-400",
                    description: "Component-based UI development with hooks and context",
                    experience: "3+ years building scalable React applications",
                    projects: ["E-commerce Platform", "Dashboard Applications", "Portfolio Sites"],
                    relatedSkills: ["Redux", "React Router", "Next.js", "Styled Components"],
                    certifications: ["React Developer Certification"]
                },
                { 
                    name: "Vue.js", 
                    level: 85, 
                    icon: "fab fa-vuejs", 
                    color: "text-green-500",
                    description: "Progressive framework for building user interfaces",
                    experience: "2+ years developing Vue.js applications",
                    projects: ["Task Management System", "Content Management System"],
                    relatedSkills: ["Vuex", "Vue Router", "Nuxt.js", "Vue CLI"],
                    certifications: ["Vue.js Developer Certification"]
                },
                { 
                    name: "TypeScript", 
                    level: 80, 
                    icon: "fas fa-code", 
                    color: "text-blue-600",
                    description: "Strongly typed JavaScript for large-scale applications",
                    experience: "2+ years using TypeScript in enterprise projects",
                    projects: ["Enterprise Applications", "API Development", "Large-scale SPAs"],
                    relatedSkills: ["JavaScript", "Node.js", "React", "Angular"],
                    certifications: ["TypeScript Developer Certification"]
                },
                { 
                    name: "Tailwind CSS", 
                    level: 90, 
                    icon: "fas fa-palette", 
                    color: "text-teal-500",
                    description: "Utility-first CSS framework for rapid UI development",
                    experience: "2+ years using Tailwind for production applications",
                    projects: ["Portfolio Website", "Dashboard UIs", "Marketing Pages"],
                    relatedSkills: ["CSS3", "PostCSS", "JIT Compilation", "Custom Components"],
                    certifications: ["Tailwind CSS Expert"]
                },
                { 
                    name: "SASS/SCSS", 
                    level: 85, 
                    icon: "fab fa-sass", 
                    color: "text-pink-500",
                    description: "CSS preprocessor with variables, mixins, and functions",
                    experience: "3+ years using SASS for maintainable stylesheets",
                    projects: ["Component Libraries", "Design Systems", "Legacy Codebases"],
                    relatedSkills: ["CSS3", "PostCSS", "BEM Methodology", "CSS Architecture"],
                    certifications: ["SASS Developer Certification"]
                }
            ],
            backend: [
                { 
                    name: "Node.js", 
                    level: 90, 
                    icon: "fab fa-node-js", 
                    color: "text-green-500",
                    description: "Server-side JavaScript runtime for scalable applications",
                    experience: "4+ years building APIs and backend services",
                    projects: ["E-commerce APIs", "Real-time Chat Apps", "Microservices"],
                    relatedSkills: ["Express.js", "JavaScript", "NPM", "Event Loop"],
                    certifications: ["Node.js Developer Certification"]
                },
                { 
                    name: "Python", 
                    level: 85, 
                    icon: "fab fa-python", 
                    color: "text-blue-600",
                    description: "Versatile programming language for web development and automation",
                    experience: "3+ years using Python for web development and scripting",
                    projects: ["Django Web Apps", "Data Processing Scripts", "API Development"],
                    relatedSkills: ["Django", "Flask", "Pandas", "NumPy"],
                    certifications: ["Python Developer Certification"]
                },
                { 
                    name: "Express.js", 
                    level: 88, 
                    icon: "fas fa-server", 
                    color: "text-gray-700",
                    description: "Fast, minimalist web framework for Node.js",
                    experience: "3+ years building RESTful APIs and web applications",
                    projects: ["REST APIs", "Authentication Systems", "Middleware Development"],
                    relatedSkills: ["Node.js", "Middleware", "Routing", "Error Handling"],
                    certifications: ["Express.js Expert Certification"]
                },
                { 
                    name: "Django", 
                    level: 75, 
                    icon: "fas fa-code", 
                    color: "text-green-700",
                    description: "High-level Python web framework for rapid development",
                    experience: "2+ years developing Django applications",
                    projects: ["Content Management Systems", "User Authentication", "Admin Panels"],
                    relatedSkills: ["Python", "Django REST", "ORM", "Templates"],
                    certifications: ["Django Developer Certification"]
                },
                { 
                    name: "RESTful APIs", 
                    level: 90, 
                    icon: "fas fa-exchange-alt", 
                    color: "text-blue-500",
                    description: "Design and implementation of REST architectural principles",
                    experience: "4+ years designing and building RESTful services",
                    projects: ["E-commerce APIs", "Social Media APIs", "Data Services"],
                    relatedSkills: ["HTTP Methods", "Status Codes", "API Documentation", "Postman"],
                    certifications: ["API Design Certification"]
                },
                { 
                    name: "GraphQL", 
                    level: 70, 
                    icon: "fas fa-project-diagram", 
                    color: "text-pink-500",
                    description: "Query language for APIs with flexible data fetching",
                    experience: "1+ year implementing GraphQL endpoints",
                    projects: ["Modern Web APIs", "Real-time Applications"],
                    relatedSkills: ["Apollo", "Schema Design", "Resolvers", "Subscriptions"],
                    certifications: ["GraphQL Developer Certification"]
                },
                { 
                    name: "JWT", 
                    level: 85, 
                    icon: "fas fa-key", 
                    color: "text-yellow-600",
                    description: "JSON Web Tokens for secure authentication and authorization",
                    experience: "3+ years implementing JWT-based authentication",
                    projects: ["User Authentication Systems", "API Security", "SSO Solutions"],
                    relatedSkills: ["Authentication", "Authorization", "Security", "Sessions"],
                    certifications: ["Web Security Certification"]
                },
                { 
                    name: "Microservices", 
                    level: 75, 
                    icon: "fas fa-cubes", 
                    color: "text-purple-500",
                    description: "Architectural pattern for building distributed systems",
                    experience: "2+ years designing microservice architectures",
                    projects: ["Enterprise Applications", "Scalable Systems", "Service Orchestration"],
                    relatedSkills: ["Docker", "Kubernetes", "API Gateway", "Service Mesh"],
                    certifications: ["Microservices Architecture Certification"]
                }
            ],
            database: [
                { 
                    name: "MongoDB", 
                    level: 85, 
                    icon: "fas fa-leaf", 
                    color: "text-green-600",
                    description: "NoSQL document database for flexible data storage",
                    experience: "3+ years using MongoDB for web applications",
                    projects: ["E-commerce Platforms", "Content Management", "Real-time Apps"],
                    relatedSkills: ["Mongoose", "Aggregation", "Indexing", "Sharding"],
                    certifications: ["MongoDB Developer Certification"]
                },
                { 
                    name: "PostgreSQL", 
                    level: 80, 
                    icon: "fas fa-database", 
                    color: "text-blue-700",
                    description: "Advanced open-source relational database system",
                    experience: "2+ years using PostgreSQL for complex applications",
                    projects: ["Enterprise Applications", "Data Analytics", "Financial Systems"],
                    relatedSkills: ["SQL", "Joins", "Indexes", "Stored Procedures"],
                    certifications: ["PostgreSQL Administrator Certification"]
                },
                { 
                    name: "MySQL", 
                    level: 82, 
                    icon: "fas fa-database", 
                    color: "text-orange-600",
                    description: "Popular relational database management system",
                    experience: "3+ years using MySQL for web applications",
                    projects: ["Web Applications", "Content Management", "User Systems"],
                    relatedSkills: ["SQL", "Database Design", "Performance Tuning", "Replication"],
                    certifications: ["MySQL Developer Certification"]
                },
                { 
                    name: "Redis", 
                    level: 75, 
                    icon: "fas fa-memory", 
                    color: "text-red-500",
                    description: "In-memory data structure store for caching and real-time apps",
                    experience: "2+ years using Redis for caching and sessions",
                    projects: ["Session Management", "Caching Layer", "Real-time Features"],
                    relatedSkills: ["Caching", "Session Storage", "Pub/Sub", "Data Structures"],
                    certifications: ["Redis Developer Certification"]
                },
                { 
                    name: "Firebase", 
                    level: 78, 
                    icon: "fas fa-fire", 
                    color: "text-yellow-500",
                    description: "Google's platform for mobile and web app development",
                    experience: "2+ years using Firebase for rapid prototyping",
                    projects: ["Mobile Apps", "Real-time Apps", "Authentication Systems"],
                    relatedSkills: ["Firestore", "Authentication", "Cloud Functions", "Hosting"],
                    certifications: ["Firebase Developer Certification"]
                },
                { 
                    name: "Elasticsearch", 
                    level: 65, 
                    icon: "fas fa-search", 
                    color: "text-blue-500",
                    description: "Distributed search and analytics engine",
                    experience: "1+ year implementing search functionality",
                    projects: ["Search Features", "Log Analysis", "Data Analytics"],
                    relatedSkills: ["Search Queries", "Indexing", "Kibana", "Logstash"],
                    certifications: ["Elasticsearch Developer Certification"]
                }
            ],
            tools: [
                { 
                    name: "Git", 
                    level: 92, 
                    icon: "fab fa-git-alt", 
                    color: "text-orange-600",
                    description: "Distributed version control system for code management",
                    experience: "5+ years using Git for version control and collaboration",
                    projects: ["All Development Projects", "Open Source Contributions"],
                    relatedSkills: ["GitHub", "GitLab", "Branching", "Merging"],
                    certifications: ["Git Expert Certification"]
                },
                { 
                    name: "Docker", 
                    level: 80, 
                    icon: "fab fa-docker", 
                    color: "text-blue-600",
                    description: "Containerization platform for application deployment",
                    experience: "2+ years containerizing applications",
                    projects: ["Microservices", "Development Environments", "CI/CD Pipelines"],
                    relatedSkills: ["Containers", "Images", "Compose", "Kubernetes"],
                    certifications: ["Docker Certified Associate"]
                },
                { 
                    name: "AWS", 
                    level: 75, 
                    icon: "fab fa-aws", 
                    color: "text-orange-500",
                    description: "Amazon Web Services cloud computing platform",
                    experience: "2+ years deploying applications on AWS",
                    projects: ["Cloud Deployments", "Serverless Functions", "Storage Solutions"],
                    relatedSkills: ["EC2", "S3", "Lambda", "RDS"],
                    certifications: ["AWS Certified Developer"]
                },
                { 
                    name: "VS Code", 
                    level: 95, 
                    icon: "fas fa-code", 
                    color: "text-blue-500",
                    description: "Primary code editor with extensions and customizations",
                    experience: "4+ years as primary development environment",
                    projects: ["All Development Work", "Custom Configurations"],
                    relatedSkills: ["Extensions", "Debugging", "IntelliSense", "Git Integration"],
                    certifications: ["VS Code Power User"]
                },
                { 
                    name: "Webpack", 
                    level: 78, 
                    icon: "fas fa-box", 
                    color: "text-blue-400",
                    description: "Module bundler for modern JavaScript applications",
                    experience: "2+ years configuring build processes",
                    projects: ["SPA Bundling", "Asset Optimization", "Development Tools"],
                    relatedSkills: ["Module Bundling", "Loaders", "Plugins", "Optimization"],
                    certifications: ["Webpack Configuration Expert"]
                },
                { 
                    name: "Jest", 
                    level: 82, 
                    icon: "fas fa-vial", 
                    color: "text-green-500",
                    description: "JavaScript testing framework with mocking and coverage",
                    experience: "2+ years writing comprehensive test suites",
                    projects: ["Unit Testing", "Integration Testing", "TDD Projects"],
                    relatedSkills: ["Unit Testing", "Mocking", "Coverage", "TDD"],
                    certifications: ["JavaScript Testing Certification"]
                },
                { 
                    name: "Postman", 
                    level: 88, 
                    icon: "fas fa-mail-bulk", 
                    color: "text-orange-500",
                    description: "API development and testing platform",
                    experience: "3+ years testing and documenting APIs",
                    projects: ["API Testing", "Documentation", "Automation"],
                    relatedSkills: ["API Testing", "Collections", "Automation", "Documentation"],
                    certifications: ["Postman API Expert"]
                },
                { 
                    name: "Figma", 
                    level: 70, 
                    icon: "fab fa-figma", 
                    color: "text-purple-500",
                    description: "Collaborative design tool for UI/UX development",
                    experience: "1+ year creating and implementing designs",
                    projects: ["UI Design", "Prototyping", "Design Systems"],
                    relatedSkills: ["UI Design", "Prototyping", "Components", "Collaboration"],
                    certifications: ["Figma Design Certification"]
                }
            ]
        };
    }

    render() {
        return `
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h1 class="text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive overview of my technical skills and proficiency levels across various technologies.
                        </p>
                    </div>

                    <!-- Skills Categories -->
                    <div class="space-y-16">
                        <!-- Frontend Skills -->
                        <div class="skills-category" data-category="frontend">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                                <i class="fas fa-laptop-code text-blue-600 mr-3"></i>
                                Frontend Development
                            </h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                ${this.renderSkillCards('frontend')}
                            </div>
                        </div>

                        <!-- Backend Skills -->
                        <div class="skills-category" data-category="backend">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                                <i class="fas fa-server text-green-600 mr-3"></i>
                                Backend Development
                            </h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                ${this.renderSkillCards('backend')}
                            </div>
                        </div>

                        <!-- Database Skills -->
                        <div class="skills-category" data-category="database">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                                <i class="fas fa-database text-purple-600 mr-3"></i>
                                Database & Storage
                            </h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                ${this.renderSkillCards('database')}
                            </div>
                        </div>

                        <!-- Tools & Technologies -->
                        <div class="skills-category" data-category="tools">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                                <i class="fas fa-tools text-orange-600 mr-3"></i>
                                Tools & Technologies
                            </h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                ${this.renderSkillCards('tools')}
                            </div>
                        </div>
                    </div>

                    <!-- Skills Summary -->
                    <div class="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Skills Overview</h2>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            ${this.renderSkillsSummary()}
                        </div>
                    </div>

                    <!-- Certifications -->
                    <div class="mt-20">
                        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Learning</h2>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${this.renderCertifications()}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSkillCards(category) {
        return this.skills[category].map((skill, index) => `
            <div class="skill-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl 
                      transition-all duration-300 transform hover:scale-105" 
                 data-skill-index="${index}">
                <div class="text-center mb-4">
                    <i class="${skill.icon} text-4xl ${skill.color} mb-3"></i>
                    <h3 class="text-lg font-semibold text-gray-900">${skill.name}</h3>
                </div>
                
                <!-- Skill Level Progress -->
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-gray-600">Proficiency</span>
                        <span class="text-sm font-semibold text-gray-900">${skill.level}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="skill-progress h-2 rounded-full transition-all duration-1000 ease-out" 
                             style="width: 0%; background: linear-gradient(90deg, #3B82F6, #8B5CF6);"
                             data-width="${skill.level}%">
                        </div>
                    </div>
                </div>
                
                <!-- Basic info visible by default -->
                <div class="text-center mb-3">
                    <span class="skill-level-text px-3 py-1 rounded-full text-sm font-medium
                           ${this.getSkillLevelClass(skill.level)}">
                        ${this.getSkillLevelText(skill.level)}
                    </span>
                </div>
                
                ${skill.description ? `<p class="text-gray-600 text-sm mb-3">${skill.description}</p>` : ''}
                
                <!-- Collapsible detailed content -->
                <div class="skill-details hidden" id="skill-details-${category}-${index}">
                    <div class="border-t border-gray-200 pt-3 mt-3">
                        ${skill.experience ? `
                            <div class="mb-3">
                                <h5 class="text-xs font-semibold text-gray-700 mb-1">Experience:</h5>
                                <p class="text-gray-600 text-sm">${skill.experience}</p>
                            </div>
                        ` : ''}
                        
                        ${skill.projects && skill.projects.length > 0 ? `
                            <div class="mb-3">
                                <h5 class="text-xs font-semibold text-gray-700 mb-1">Used In:</h5>
                                <div class="flex flex-wrap gap-1">
                                    ${skill.projects.map(project => `
                                        <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">${project}</span>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${skill.relatedSkills && skill.relatedSkills.length > 0 ? `
                            <div class="mb-3">
                                <h5 class="text-xs font-semibold text-gray-700 mb-1">Related Skills:</h5>
                                <div class="flex flex-wrap gap-1">
                                    ${skill.relatedSkills.map(related => `
                                        <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">${related}</span>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${skill.certifications && skill.certifications.length > 0 ? `
                            <div class="mb-3">
                                <h5 class="text-xs font-semibold text-gray-700 mb-1">Certifications:</h5>
                                <ul class="text-xs text-gray-600 space-y-1">
                                    ${skill.certifications.map(cert => `
                                        <li class="flex items-center">
                                            <i class="fas fa-certificate text-yellow-500 mr-1"></i>
                                            ${cert}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Details toggle button -->
                <div class="text-center mt-3">
                    <button class="skill-toggle text-blue-600 hover:text-blue-700 font-medium text-xs transition-colors duration-200" 
                            data-target="skill-details-${category}-${index}">
                        <span class="toggle-text">View Details</span>
                        <i class="fas fa-chevron-down ml-1 toggle-icon transition-transform duration-200"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderSkillsSummary() {
        const categories = Object.keys(this.skills);
        return categories.map(category => {
            const skills = this.skills[category];
            const avgLevel = Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length);
            const icons = {
                frontend: 'fas fa-laptop-code',
                backend: 'fas fa-server',
                database: 'fas fa-database',
                tools: 'fas fa-tools'
            };
            const colors = {
                frontend: 'text-blue-600',
                backend: 'text-green-600',
                database: 'text-purple-600',
                tools: 'text-orange-600'
            };

            return `
                <div class="summary-card text-center p-6 bg-white rounded-lg shadow-lg">
                    <i class="${icons[category]} text-4xl ${colors[category]} mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2 capitalize">${category}</h3>
                    <div class="text-3xl font-bold ${colors[category]} mb-2">${avgLevel}%</div>
                    <div class="text-gray-600">${skills.length} Technologies</div>
                </div>
            `;
        }).join('');
    }

    renderCertifications() {
        const certifications = [
            {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                date: "2023",
                icon: "fab fa-aws",
                color: "text-orange-500"
            },
            {
                title: "React Developer Certification",
                issuer: "Meta",
                date: "2022",
                icon: "fab fa-react",
                color: "text-blue-400"
            },
            {
                title: "Node.js Certification",
                issuer: "OpenJS Foundation",
                date: "2022",
                icon: "fab fa-node-js",
                color: "text-green-500"
            },
            {
                title: "Google Analytics Certified",
                issuer: "Google",
                date: "2023",
                icon: "fab fa-google",
                color: "text-blue-600"
            },
            {
                title: "MongoDB Developer",
                issuer: "MongoDB University",
                date: "2021",
                icon: "fas fa-leaf",
                color: "text-green-600"
            },
            {
                title: "Docker Certified Associate",
                issuer: "Docker",
                date: "2023",
                icon: "fab fa-docker",
                color: "text-blue-600"
            }
        ];

        return certifications.map(cert => `
            <div class="certification-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl 
                      transition-all duration-300 border-l-4 border-blue-500">
                <div class="flex items-center mb-4">
                    <i class="${cert.icon} text-3xl ${cert.color} mr-4"></i>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">${cert.title}</h3>
                        <p class="text-gray-600">${cert.issuer}</p>
                    </div>
                </div>
                <div class="text-sm text-gray-500">Earned: ${cert.date}</div>
            </div>
        `).join('');
    }

    getSkillLevelClass(level) {
        if (level >= 90) return 'bg-green-100 text-green-800';
        if (level >= 80) return 'bg-blue-100 text-blue-800';
        if (level >= 70) return 'bg-yellow-100 text-yellow-800';
        return 'bg-gray-100 text-gray-800';
    }

    getSkillLevelText(level) {
        if (level >= 90) return 'Expert';
        if (level >= 80) return 'Advanced';
        if (level >= 70) return 'Intermediate';
        return 'Beginner';
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const targetWidth = bar.dataset.width;
                bar.style.width = targetWidth;
            }, index * 100);
        });
    }

    setupEventListeners() {
        // Skill details toggle functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('skill-toggle') || e.target.closest('.skill-toggle')) {
                const button = e.target.classList.contains('skill-toggle') ? e.target : e.target.closest('.skill-toggle');
                const targetId = button.getAttribute('data-target');
                const detailsElement = document.getElementById(targetId);
                const toggleText = button.querySelector('.toggle-text');
                const toggleIcon = button.querySelector('.toggle-icon');
                
                if (detailsElement.classList.contains('hidden')) {
                    // Show details
                    detailsElement.classList.remove('hidden');
                    detailsElement.style.opacity = '0';
                    detailsElement.style.maxHeight = '0';
                    detailsElement.style.transition = 'all 0.3s ease-out';
                    
                    requestAnimationFrame(() => {
                        detailsElement.style.opacity = '1';
                        detailsElement.style.maxHeight = '500px';
                    });
                    
                    toggleText.textContent = 'Hide Details';
                    toggleIcon.style.transform = 'rotate(180deg)';
                } else {
                    // Hide details
                    detailsElement.style.opacity = '0';
                    detailsElement.style.maxHeight = '0';
                    
                    setTimeout(() => {
                        detailsElement.classList.add('hidden');
                    }, 300);
                    
                    toggleText.textContent = 'View Details';
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }

    init() {
        this.setupEventListeners();

        // Add scroll animations for skill categories
        utils.observeElements('.skills-category', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });

        // Add staggered animation for skill cards
        utils.observeElements('.skill-card', (element) => {
            const index = element.dataset.skillIndex;
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, parseInt(index) * 50);
        });

        // Animate progress bars when they come into view
        utils.observeElements('.skill-progress', (element) => {
            const targetWidth = element.dataset.width;
            setTimeout(() => {
                element.style.width = targetWidth;
            }, 500);
        });

        // Animate summary cards
        utils.observeElements('.summary-card', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.9)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }, 200);
        });

        // Animate certification cards
        utils.observeElements('.certification-card', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 300);
        });
    }
}
