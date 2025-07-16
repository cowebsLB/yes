// Skills page module
class SkillsPage {
    constructor() {
        this.name = 'skills';
        this.skills = {
            frontend: [
                { name: "HTML5", level: 95, icon: "fab fa-html5", color: "text-orange-500" },
                { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "text-blue-500" },
                { name: "JavaScript", level: 92, icon: "fab fa-js-square", color: "text-yellow-500" },
                { name: "React", level: 88, icon: "fab fa-react", color: "text-blue-400" },
                { name: "Vue.js", level: 85, icon: "fab fa-vuejs", color: "text-green-500" },
                { name: "TypeScript", level: 80, icon: "fas fa-code", color: "text-blue-600" },
                { name: "Tailwind CSS", level: 90, icon: "fas fa-palette", color: "text-teal-500" },
                { name: "SASS/SCSS", level: 85, icon: "fab fa-sass", color: "text-pink-500" }
            ],
            backend: [
                { name: "Node.js", level: 90, icon: "fab fa-node-js", color: "text-green-500" },
                { name: "Python", level: 85, icon: "fab fa-python", color: "text-blue-600" },
                { name: "Express.js", level: 88, icon: "fas fa-server", color: "text-gray-700" },
                { name: "Django", level: 75, icon: "fas fa-code", color: "text-green-700" },
                { name: "RESTful APIs", level: 90, icon: "fas fa-exchange-alt", color: "text-blue-500" },
                { name: "GraphQL", level: 70, icon: "fas fa-project-diagram", color: "text-pink-500" },
                { name: "JWT", level: 85, icon: "fas fa-key", color: "text-yellow-600" },
                { name: "Microservices", level: 75, icon: "fas fa-cubes", color: "text-purple-500" }
            ],
            database: [
                { name: "MongoDB", level: 85, icon: "fas fa-leaf", color: "text-green-600" },
                { name: "PostgreSQL", level: 80, icon: "fas fa-database", color: "text-blue-700" },
                { name: "MySQL", level: 82, icon: "fas fa-database", color: "text-orange-600" },
                { name: "Redis", level: 75, icon: "fas fa-memory", color: "text-red-500" },
                { name: "Firebase", level: 78, icon: "fas fa-fire", color: "text-yellow-500" },
                { name: "Elasticsearch", level: 65, icon: "fas fa-search", color: "text-blue-500" }
            ],
            tools: [
                { name: "Git", level: 92, icon: "fab fa-git-alt", color: "text-orange-600" },
                { name: "Docker", level: 80, icon: "fab fa-docker", color: "text-blue-600" },
                { name: "AWS", level: 75, icon: "fab fa-aws", color: "text-orange-500" },
                { name: "VS Code", level: 95, icon: "fas fa-code", color: "text-blue-500" },
                { name: "Webpack", level: 78, icon: "fas fa-box", color: "text-blue-400" },
                { name: "Jest", level: 82, icon: "fas fa-vial", color: "text-green-500" },
                { name: "Postman", level: 88, icon: "fas fa-mail-bulk", color: "text-orange-500" },
                { name: "Figma", level: 70, icon: "fab fa-figma", color: "text-purple-500" }
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
                
                <!-- Skill Level Text -->
                <div class="text-center">
                    <span class="skill-level-text px-3 py-1 rounded-full text-sm font-medium
                           ${this.getSkillLevelClass(skill.level)}">
                        ${this.getSkillLevelText(skill.level)}
                    </span>
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

    init() {
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
