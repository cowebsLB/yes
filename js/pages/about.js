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
                            <img src="https://via.placeholder.com/500x600/3B82F6/FFFFFF?text=Professional+Photo" 
                                 alt="Professional Photo" 
                                 class="w-full rounded-lg shadow-lg">
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
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">My Values</h2>
                        <div class="grid md:grid-cols-3 gap-8">
                            ${this.renderValues()}
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
                description: "Leading development of enterprise web applications using React, Node.js, and AWS.",
                side: "right"
            },
            {
                position: "Full Stack Developer",
                company: "Digital Innovations Ltd.",
                period: "2022 - 2023",
                description: "Developed and maintained multiple client projects using modern web technologies.",
                side: "left"
            },
            {
                position: "Frontend Developer",
                company: "StartUp Hub",
                period: "2021 - 2022",
                description: "Created responsive web applications and collaborated with design teams.",
                side: "right"
            },
            {
                position: "Junior Developer",
                company: "Code Academy",
                period: "2020 - 2021",
                description: "Started my professional journey learning best practices and contributing to team projects.",
                side: "left"
            }
        ];

        return experiences.map((exp, index) => `
            <div class="relative mb-12 experience-item" data-side="${exp.side}">
                <div class="flex items-center ${exp.side === 'right' ? 'justify-end' : 'justify-start'}">
                    <div class="${exp.side === 'right' ? 'mr-8 text-right' : 'ml-8'} max-w-md">
                        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                            <h3 class="text-xl font-semibold text-gray-900 mb-1">${exp.position}</h3>
                            <p class="text-blue-600 font-medium mb-2">${exp.company}</p>
                            <p class="text-gray-500 text-sm mb-3">${exp.period}</p>
                            <p class="text-gray-600">${exp.description}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Timeline dot -->
                <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                          w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
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
                gpa: "3.8/4.0"
            },
            {
                degree: "Full Stack Web Development",
                institution: "Coding Bootcamp",
                period: "2020",
                description: "Intensive 6-month program covering modern web development stack.",
                achievement: "Top 5% of class"
            }
        ];

        return education.map(edu => `
            <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 education-item">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${edu.degree}</h3>
                <p class="text-blue-600 font-medium mb-2">${edu.institution}</p>
                <p class="text-gray-500 text-sm mb-3">${edu.period}</p>
                <p class="text-gray-600 mb-3">${edu.description}</p>
                ${edu.gpa ? `<p class="text-green-600 font-medium">GPA: ${edu.gpa}</p>` : ''}
                ${edu.achievement ? `<p class="text-green-600 font-medium">${edu.achievement}</p>` : ''}
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

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        const contactBtn = document.querySelector('.contact-btn');
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
            });
        }
    }
}
