// About page module
class AboutPage {
    constructor() {
        this.name = 'about';
    }

    render() {
        return `
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h1 class="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get to know more about my journey, experience, and what drives me as a developer.
                        </p>
                    </div>

                    <!-- Main About Content -->
                    <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div class="animate-slide-up">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face&auto=format&q=75" 
                                 alt="Professional Photo" 
                                 class="w-full rounded-lg shadow-lg"
                                 loading="lazy"
                                 decoding="async">
                        </div>
                        <div class="animate-slide-up">
                            <h2 class="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                            <div class="space-y-4 text-gray-600 text-lg">
                                <p>
                                    I'm a passionate full-stack developer with over 3 years of experience 
                                    creating digital solutions that make a difference. My journey began 
                                    with curiosity about how websites work, and it has evolved into a 
                                    love for crafting exceptional user experiences.
                                </p>
                                <p>
                                    I specialize in modern web technologies including React, Node.js, 
                                    and cloud services. I believe in writing clean, maintainable code 
                                    and following best practices to deliver robust applications.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, 
                                    contributing to open source projects, or sharing knowledge with 
                                    the developer community through blog posts and mentoring.
                                </p>
                            </div>
                            
                            <div class="mt-8">
                                <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                                             hover:bg-blue-700 transition-colors duration-200 contact-btn">
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Experience Timeline -->
                    <div class="mb-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
                        <div class="relative">
                            <!-- Timeline line -->
                            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
                            
                            ${this.renderExperience()}
                        </div>
                    </div>

                    <!-- Education -->
                    <div class="mb-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
                        <div class="grid md:grid-cols-2 gap-8">
                            ${this.renderEducation()}
                        </div>
                    </div>

                    <!-- Interests & Hobbies -->
                    <div class="mb-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Interests & Hobbies</h2>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${this.renderInterests()}
                        </div>
                    </div>

                    <!-- Values -->
                    <div class="bg-gray-50 rounded-lg p-8 mb-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">My Values</h2>
                        <div class="grid md:grid-cols-3 gap-8">
                            ${this.renderValues()}
                        </div>
                    </div>

                    <!-- Testimonials -->
                    <div class="mb-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">What People Say</h2>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${this.renderTestimonials()}
                        </div>
                    </div>

                    <!-- Fun Facts -->
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Fun Facts</h2>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${this.renderFunFacts()}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderExperience() {
        const experiences = [
            {
                position: "Senior Full Stack Developer",
                company: "Tech Solutions Inc.",
                period: "2023 - Present",
                description: "Leading development of enterprise web applications using React, Node.js, and AWS. Managing a team of 5 developers and architecting scalable solutions.",
                achievements: ["Led migration to microservices", "Improved performance by 40%", "Mentored 3 junior developers"],
                fullDescription: "As a Senior Full Stack Developer, I lead the architecture and development of complex enterprise applications that serve thousands of users daily. My role involves making critical technical decisions, mentoring team members, and ensuring code quality through comprehensive reviews. I've successfully led the migration from a monolithic architecture to microservices, resulting in improved scalability and maintainability. Additionally, I've implemented modern DevOps practices including CI/CD pipelines, automated testing, and monitoring solutions.",
                technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
                responsibilities: [
                    "Lead technical architecture decisions for enterprise applications",
                    "Mentor and guide a team of 5 junior and mid-level developers",
                    "Conduct code reviews and establish coding standards",
                    "Collaborate with product managers and stakeholders",
                    "Implement and maintain CI/CD pipelines",
                    "Optimize application performance and scalability"
                ],
                side: "right"
            },
            {
                position: "Full Stack Developer",
                company: "Digital Innovations Ltd.",
                period: "2022 - 2023",
                description: "Developed and maintained multiple client projects using modern web technologies.",
                achievements: ["Built 15+ client projects", "Implemented CI/CD pipelines", "Reduced deployment time by 60%"],
                fullDescription: "During my time at Digital Innovations, I was responsible for the full development lifecycle of client projects, from initial consultation to deployment and maintenance. I worked closely with clients to understand their requirements and translate them into technical solutions. My expertise in both frontend and backend technologies allowed me to deliver complete solutions efficiently.",
                technologies: ["Vue.js", "Express.js", "MongoDB", "MySQL", "Git", "Webpack"],
                responsibilities: [
                    "Develop full-stack web applications for various clients",
                    "Collaborate directly with clients to gather requirements",
                    "Implement responsive designs across multiple devices",
                    "Set up and maintain deployment pipelines",
                    "Provide ongoing maintenance and support",
                    "Optimize applications for performance and SEO"
                ],
                side: "left"
            },
            {
                position: "Frontend Developer",
                company: "StartUp Hub",
                period: "2021 - 2022",
                description: "Created responsive web applications and collaborated with design teams.",
                achievements: ["Improved mobile performance by 50%", "Established design system", "Led UI/UX optimization"],
                fullDescription: "At StartUp Hub, I focused primarily on frontend development while working in a fast-paced startup environment. I collaborated closely with UX/UI designers to create pixel-perfect implementations of designs. My work significantly improved the mobile user experience and established reusable component libraries that accelerated development across the team.",
                technologies: ["React", "SASS", "JavaScript ES6+", "Webpack", "Figma", "Adobe XD"],
                responsibilities: [
                    "Develop responsive user interfaces using React",
                    "Collaborate with designers to implement pixel-perfect designs",
                    "Optimize applications for mobile devices",
                    "Create and maintain component libraries",
                    "Conduct user testing and implement feedback",
                    "Ensure cross-browser compatibility"
                ],
                side: "right"
            },
            {
                position: "Junior Developer",
                company: "Code Academy",
                period: "2020 - 2021",
                description: "Started my professional journey learning best practices and contributing to team projects.",
                achievements: ["Completed 20+ coding challenges", "Contributed to open source", "Learned 5+ technologies"],
                fullDescription: "My first professional role where I gained hands-on experience in software development. I was eager to learn and quickly adapted to professional development practices. During this time, I contributed to several team projects and actively participated in code reviews to improve my skills.",
                technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git"],
                responsibilities: [
                    "Assist in developing web applications",
                    "Write clean, maintainable code following best practices",
                    "Participate in daily stand-ups and team meetings",
                    "Learn new technologies and frameworks",
                    "Contribute to open source projects",
                    "Document code and create technical documentation"
                ],
                side: "left"
            }
        ];

        return experiences.map((exp, index) => `
            <div class="relative mb-12 experience-item" data-side="${exp.side}">
                <div class="flex items-center ${exp.side === 'right' ? 'justify-end' : 'justify-start'}">
                    <div class="${exp.side === 'right' ? 'mr-8 text-right' : 'ml-8'} max-w-md">
                        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                            <h3 class="text-xl font-semibold text-gray-900 mb-1">${exp.position}</h3>
                            <p class="text-blue-600 font-medium mb-2">${exp.company}</p>
                            <p class="text-gray-500 text-sm mb-3">${exp.period}</p>
                            <p class="text-gray-600 mb-4">${exp.description}</p>
                            
                            <!-- Collapsible detailed content -->
                            <div class="experience-details hidden" id="exp-details-${index}">
                                <div class="border-t border-gray-200 pt-4 mt-4">
                                    <p class="text-gray-600 mb-4">${exp.fullDescription}</p>
                                    
                                    <div class="mb-4">
                                        <h5 class="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
                                        <div class="flex flex-wrap gap-2">
                                            ${exp.technologies.map(tech => `
                                                <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">${tech}</span>
                                            `).join('')}
                                        </div>
                                    </div>
                                    
                                    <div class="mb-4">
                                        <h5 class="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities:</h5>
                                        <ul class="text-sm text-gray-600 space-y-1">
                                            ${exp.responsibilities.map(resp => `
                                                <li class="flex items-start">
                                                    <i class="fas fa-dot-circle text-blue-500 mr-2 mt-1.5 text-xs"></i>
                                                    ${resp}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-700">Key Achievements:</h4>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    ${exp.achievements.map(achievement => `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>${achievement}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <!-- Read More button -->
                            <button class="experience-toggle text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200" 
                                    data-target="exp-details-${index}">
                                <span class="toggle-text">Read More</span>
                                <i class="fas fa-chevron-down ml-1 toggle-icon transition-transform duration-200"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Timeline dot -->
                <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                          w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-200"></div>
            </div>
        `).join('');
    }

    renderEducation() {
        const education = [
            {
                degree: "Bachelor of Computer Science",
                institution: "University of Technology",
                period: "2016 - 2020",
                description: "Focused on software engineering, algorithms, and web development.",
                gpa: "3.8/4.0",
                fullDescription: "Comprehensive four-year program that provided a strong foundation in computer science principles, software engineering practices, and modern web development technologies. The curriculum included advanced coursework in algorithms, data structures, software architecture, and database design.",
                coursework: [
                    "Data Structures and Algorithms",
                    "Software Engineering Principles",
                    "Database Design and Management",
                    "Web Application Development",
                    "Computer Networks and Security",
                    "Operating Systems",
                    "Human-Computer Interaction",
                    "Mobile Application Development"
                ],
                projects: [
                    "Capstone Project: E-learning Platform with React and Node.js",
                    "Group Project: Task Management System with real-time collaboration",
                    "Individual Project: Weather App with geolocation and API integration"
                ],
                activities: [
                    "President of Computer Science Club (2019-2020)",
                    "Teaching Assistant for Introduction to Programming (2018-2019)",
                    "Participant in ACM Programming Contest (2017-2019)"
                ]
            },
            {
                degree: "Full Stack Web Development",
                institution: "Coding Bootcamp",
                period: "2020",
                description: "Intensive 6-month program covering modern web development stack.",
                achievement: "Top 5% of class",
                fullDescription: "An intensive, hands-on program designed to bridge the gap between academic knowledge and industry requirements. The bootcamp focused on practical, real-world projects using the latest technologies and industry best practices.",
                curriculum: [
                    "Frontend: HTML5, CSS3, JavaScript ES6+, React",
                    "Backend: Node.js, Express.js, RESTful APIs",
                    "Databases: MongoDB, MySQL, PostgreSQL",
                    "Tools: Git, Webpack, Docker, AWS basics",
                    "Testing: Jest, Cypress, TDD practices",
                    "Agile methodologies and team collaboration"
                ],
                projects: [
                    "Final Project: Full-stack social media platform",
                    "Team Project: E-commerce application with payment integration",
                    "Individual Project: Personal portfolio with CMS"
                ],
                mentorship: "Received one-on-one mentorship from senior developers at top tech companies"
            }
        ];

        return education.map((edu, index) => `
            <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 education-item">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${edu.degree}</h3>
                <p class="text-blue-600 font-medium mb-2">${edu.institution}</p>
                <p class="text-gray-500 text-sm mb-3">${edu.period}</p>
                <p class="text-gray-600 mb-3">${edu.description}</p>
                ${edu.gpa ? `<p class="text-green-600 font-medium mb-3">GPA: ${edu.gpa}</p>` : ''}
                ${edu.achievement ? `<p class="text-green-600 font-medium mb-3">${edu.achievement}</p>` : ''}
                
                <!-- Collapsible detailed content -->
                <div class="education-details hidden" id="edu-details-${index}">
                    <div class="border-t border-gray-200 pt-4 mt-4">
                        <p class="text-gray-600 mb-4">${edu.fullDescription}</p>
                        
                        ${edu.coursework ? `
                            <div class="mb-4">
                                <h5 class="text-sm font-semibold text-gray-700 mb-2">Key Coursework:</h5>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    ${edu.coursework.map(course => `
                                        <div class="flex items-center text-sm text-gray-600">
                                            <i class="fas fa-graduation-cap text-blue-500 mr-2"></i>
                                            ${course}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${edu.curriculum ? `
                            <div class="mb-4">
                                <h5 class="text-sm font-semibold text-gray-700 mb-2">Curriculum Highlights:</h5>
                                <div class="space-y-1">
                                    ${edu.curriculum.map(item => `
                                        <div class="flex items-start text-sm text-gray-600">
                                            <i class="fas fa-code text-blue-500 mr-2 mt-1"></i>
                                            ${item}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${edu.projects ? `
                            <div class="mb-4">
                                <h5 class="text-sm font-semibold text-gray-700 mb-2">Notable Projects:</h5>
                                <div class="space-y-1">
                                    ${edu.projects.map(project => `
                                        <div class="flex items-start text-sm text-gray-600">
                                            <i class="fas fa-laptop-code text-green-500 mr-2 mt-1"></i>
                                            ${project}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${edu.activities ? `
                            <div class="mb-4">
                                <h5 class="text-sm font-semibold text-gray-700 mb-2">Extracurricular Activities:</h5>
                                <div class="space-y-1">
                                    ${edu.activities.map(activity => `
                                        <div class="flex items-start text-sm text-gray-600">
                                            <i class="fas fa-star text-yellow-500 mr-2 mt-1"></i>
                                            ${activity}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${edu.mentorship ? `
                            <div class="mb-4">
                                <h5 class="text-sm font-semibold text-gray-700 mb-2">Special Programs:</h5>
                                <div class="flex items-start text-sm text-gray-600">
                                    <i class="fas fa-handshake text-purple-500 mr-2 mt-1"></i>
                                    ${edu.mentorship}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Read More button -->
                <button class="education-toggle text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 mt-3" 
                        data-target="edu-details-${index}">
                    <span class="toggle-text">Learn More</span>
                    <i class="fas fa-chevron-down ml-1 toggle-icon transition-transform duration-200"></i>
                </button>
            </div>
        `).join('');
    }

    renderInterests() {
        const interests = [
            {
                icon: "fas fa-code",
                title: "Open Source",
                description: "Contributing to projects and sharing knowledge"
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                description: "Capturing moments and exploring creativity"
            },
            {
                icon: "fas fa-plane",
                title: "Travel",
                description: "Exploring new cultures and gaining perspectives"
            },
            {
                icon: "fas fa-book",
                title: "Reading",
                description: "Continuous learning and personal development"
            }
        ];

        return interests.map(interest => `
            <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl 
                      transition-shadow duration-300 interest-item">
                <i class="${interest.icon} text-3xl text-blue-600 mb-4"></i>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${interest.title}</h3>
                <p class="text-gray-600 text-sm">${interest.description}</p>
            </div>
        `).join('');
    }

    renderValues() {
        const values = [
            {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                description: "Always seeking creative solutions and embracing new technologies."
            },
            {
                icon: "fas fa-users",
                title: "Collaboration",
                description: "Believing in the power of teamwork and open communication."
            },
            {
                icon: "fas fa-award",
                title: "Excellence",
                description: "Committed to delivering high-quality work and continuous improvement."
            }
        ];

        return values.map(value => `
            <div class="text-center value-item">
                <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="${value.icon} text-2xl text-blue-600"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">${value.title}</h3>
                <p class="text-gray-600">${value.description}</p>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const testimonials = [
            {
                name: "Sarah Johnson",
                position: "Project Manager",
                company: "Tech Solutions Inc.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "Working with this developer was an absolute pleasure. Their attention to detail and ability to deliver high-quality code on time made our project a huge success.",
                rating: 5
            },
            {
                name: "Michael Chen",
                position: "CTO",
                company: "StartUp Hub",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "Exceptional technical skills combined with great communication. They transformed our complex requirements into an elegant, scalable solution.",
                rating: 5
            },
            {
                name: "Emily Rodriguez",
                position: "Design Lead",
                company: "Digital Innovations",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "Not only did they deliver outstanding code, but they also provided valuable insights that improved our overall user experience. Highly recommended!",
                rating: 5
            },
            {
                name: "David Park",
                position: "Senior Developer",
                company: "Code Academy",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "A true professional who goes above and beyond. Their code is clean, well-documented, and maintainable. Great mentor and team player.",
                rating: 5
            },
            {
                name: "Lisa Thompson",
                position: "Product Owner",
                company: "Innovation Labs",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "Delivered a complex full-stack application that exceeded our expectations. Their problem-solving skills and technical expertise are top-notch.",
                rating: 5
            },
            {
                name: "James Wilson",
                position: "Founder",
                company: "WebFlow Agency",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face&auto=format&q=75",
                quote: "Outstanding work ethic and technical abilities. They took our vision and turned it into reality with precision and creativity.",
                rating: 5
            }
        ];

        return testimonials.map((testimonial, index) => `
            <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 tilt-card" 
                 style="animation-delay: ${index * 150}ms">
                <!-- Star Rating -->
                <div class="flex mb-4">
                    ${Array.from({length: 5}, (_, i) => `
                        <i class="fas fa-star text-yellow-400 ${i < testimonial.rating ? '' : 'opacity-30'}"></i>
                    `).join('')}
                </div>
                
                <!-- Quote -->
                <blockquote class="text-gray-600 mb-6 italic">
                    "${testimonial.quote}"
                </blockquote>
                
                <!-- Author Info -->
                <div class="flex items-center">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" 
                         class="w-12 h-12 rounded-full mr-4 image-hover-effect">
                    <div>
                        <div class="font-semibold text-gray-900">${testimonial.name}</div>
                        <div class="text-sm text-gray-500">${testimonial.position}</div>
                        <div class="text-sm text-blue-600 font-medium">${testimonial.company}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderFunFacts() {
        const facts = [
            {
                icon: "fas fa-coffee",
                number: "1,247",
                label: "Cups of Coffee",
                color: "text-amber-600"
            },
            {
                icon: "fas fa-code",
                number: "100K+",
                label: "Lines of Code",
                color: "text-blue-600"
            },
            {
                icon: "fas fa-bug",
                number: "2,156",
                label: "Bugs Fixed",
                color: "text-red-600"
            },
            {
                icon: "fas fa-lightbulb",
                number: "89",
                label: "Ideas Implemented",
                color: "text-yellow-500"
            },
            {
                icon: "fas fa-clock",
                number: "24/7",
                label: "Dedication",
                color: "text-green-600"
            },
            {
                icon: "fas fa-heart",
                number: "∞",
                label: "Passion for Code",
                color: "text-pink-600"
            },
            {
                icon: "fas fa-graduation-cap",
                number: "50+",
                label: "Technologies Learned",
                color: "text-indigo-600"
            },
            {
                icon: "fas fa-users",
                number: "15+",
                label: "Team Collaborations",
                color: "text-purple-600"
            }
        ];

        return facts.map((fact, index) => `
            <div class="fun-fact text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
                 style="animation-delay: ${index * 100}ms">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                    <i class="${fact.icon} text-2xl ${fact.color}"></i>
                </div>
                <div class="text-2xl font-bold text-gray-900 mb-1 counter" data-target="${fact.number.replace(/[^\d]/g, '')}">
                    ${fact.number}
                </div>
                <div class="text-sm text-gray-600">${fact.label}</div>
            </div>
        `).join('');
    }

    init() {
        // Add scroll animations
        utils.observeElements('.animate-slide-up', (element) => {
            element.classList.add('animate-slide-up');
        });

        utils.observeElements('.experience-item', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });

        utils.observeElements('.education-item, .interest-item, .value-item', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });

        // Animate testimonials
        utils.observeElements('.testimonial-card', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px) scale(0.95)';
            element.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, 200);
        });

        // Animate fun facts with counters
        utils.observeElements('.fun-fact', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Animate counter
                const counter = element.querySelector('.counter');
                if (counter) {
                    this.animateCounter(counter);
                }
            }, 150);
        });

        // Setup event listeners
        this.setupEventListeners();
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target) || 0;
        const originalText = element.textContent;
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.textContent = originalText;
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 30);
    }

    setupEventListeners() {
        const contactBtn = document.querySelector('.contact-btn');
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
            });
        }

        // Experience toggle functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('experience-toggle') || e.target.closest('.experience-toggle')) {
                const button = e.target.classList.contains('experience-toggle') ? e.target : e.target.closest('.experience-toggle');
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
                        detailsElement.style.maxHeight = '1000px';
                    });
                    
                    toggleText.textContent = 'Read Less';
                    toggleIcon.style.transform = 'rotate(180deg)';
                } else {
                    // Hide details
                    detailsElement.style.opacity = '0';
                    detailsElement.style.maxHeight = '0';
                    
                    setTimeout(() => {
                        detailsElement.classList.add('hidden');
                    }, 300);
                    
                    toggleText.textContent = 'Read More';
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Education toggle functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('education-toggle') || e.target.closest('.education-toggle')) {
                const button = e.target.classList.contains('education-toggle') ? e.target : e.target.closest('.education-toggle');
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
                        detailsElement.style.maxHeight = '1000px';
                    });
                    
                    toggleText.textContent = 'Show Less';
                    toggleIcon.style.transform = 'rotate(180deg)';
                } else {
                    // Hide details
                    detailsElement.style.opacity = '0';
                    detailsElement.style.maxHeight = '0';
                    
                    setTimeout(() => {
                        detailsElement.classList.add('hidden');
                    }, 300);
                    
                    toggleText.textContent = 'Learn More';
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }
}
