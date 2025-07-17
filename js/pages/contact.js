// Contact page module
class ContactPage {
    constructor() {
        this.name = 'contact';
    }

    render() {
        return `
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <h1 class="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities, interesting projects, 
                            or just having a chat about technology. Let's connect!
                        </p>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-16">
                        <!-- Contact Information -->
                        <div class="animate-slide-up">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
                            
                            <!-- Contact Methods -->
                            <div class="space-y-6 mb-8">
                                ${this.renderContactMethods()}
                            </div>

                            <!-- Social Links -->
                            <div class="mb-8">
                                <h3 class="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                                <div class="flex space-x-4">
                                    ${this.renderSocialLinks()}
                                </div>
                            </div>

                            <!-- Availability -->
                            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-clock text-blue-600 mr-2"></i>
                                    Availability
                                </h3>
                                <p class="text-gray-600 mb-2">
                                    <strong>Status:</strong> 
                                    <span class="text-green-600 font-semibold">Available for freelance projects</span>
                                </p>
                                <p class="text-gray-600 mb-2">
                                    <strong>Response Time:</strong> Usually within 24 hours
                                </p>
                                <p class="text-gray-600">
                                    <strong>Time Zone:</strong> GMT-5 (EST)
                                </p>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="animate-slide-up">
                            <div class="bg-white p-8 rounded-lg shadow-lg">
                                <h2 class="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
                                
                                <form id="contact-form" class="space-y-6">
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                                                First Name *
                                            </label>
                                            <input type="text" id="firstName" name="firstName" required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                          focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                        </div>
                                        <div>
                                            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input type="text" id="lastName" name="lastName" required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                          focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input type="email" id="email" name="email" required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                      focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                    </div>

                                    <div>
                                        <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                                            Company (Optional)
                                        </label>
                                        <input type="text" id="company" name="company"
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                      focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                    </div>

                                    <div>
                                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select id="subject" name="subject" required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                       focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                            <option value="">Select a subject</option>
                                            <option value="project">Project Inquiry</option>
                                            <option value="freelance">Freelance Opportunity</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="consultation">Consultation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                                            Project Budget (Optional)
                                        </label>
                                        <select id="budget" name="budget"
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                       focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                            <option value="">Select budget range</option>
                                            <option value="under-5k">Under $5,000</option>
                                            <option value="5k-10k">$5,000 - $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k-50k">$25,000 - $50,000</option>
                                            <option value="over-50k">Over $50,000</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea id="message" name="message" rows="6" required
                                                  placeholder="Tell me about your project, goals, timeline, or any questions you have..."
                                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                                         focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                                                         resize-vertical"></textarea>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="newsletter" name="newsletter"
                                               class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                        <label for="newsletter" class="ml-2 block text-sm text-gray-700">
                                            I'd like to receive updates about your latest projects and blog posts
                                        </label>
                                    </div>

                                    <button type="submit" 
                                            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                                                   hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                                   transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                                        <span class="submit-text">Send Message</span>
                                        <i class="fas fa-paper-plane ml-2"></i>
                                    </button>
                                </form>

                                <!-- Success/Error Messages -->
                                <div id="form-message" class="mt-4 hidden">
                                    <!-- Messages will be displayed here -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Section -->
                    <div class="mt-20">
                        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
                        <div class="max-w-4xl mx-auto">
                            ${this.renderFAQ()}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderContactMethods() {
        const methods = [
            {
                icon: "fas fa-envelope",
                title: "Email",
                value: "your.email@example.com",
                description: "Best for detailed project discussions",
                color: "text-blue-600",
                copyable: true
            },
            {
                icon: "fas fa-phone",
                title: "Phone",
                value: "+1 (555) 123-4567",
                description: "Available Mon-Fri, 9AM-6PM EST",
                color: "text-green-600",
                copyable: true
            },
            {
                icon: "fab fa-linkedin",
                title: "LinkedIn",
                value: "linkedin.com/in/yourprofile",
                description: "Professional networking and connections",
                color: "text-blue-700",
                copyable: false,
                url: "https://linkedin.com/in/yourprofile"
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                value: "New York, NY",
                description: "Open to remote and local opportunities",
                color: "text-red-600",
                copyable: false
            }
        ];

        return methods.map(method => `
            <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 
                      transition-colors duration-200 contact-method group">
                <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md 
                              group-hover:shadow-lg transition-shadow duration-200">
                        <i class="${method.icon} text-xl ${method.color}"></i>
                    </div>
                </div>
                <div class="flex-grow">
                    <h3 class="text-lg font-semibold text-gray-900">${method.title}</h3>
                    <p class="text-blue-600 font-medium ${method.copyable ? 'cursor-pointer hover:text-blue-700' : ''}" 
                       ${method.copyable ? `onclick="utils.copyToClipboard('${method.value}')"` : ''}
                       ${method.url ? `onclick="window.open('${method.url}', '_blank')"` : ''}>
                        ${method.value}
                        ${method.copyable ? '<i class="fas fa-copy ml-2 text-sm opacity-60"></i>' : ''}
                        ${method.url ? '<i class="fas fa-external-link-alt ml-2 text-sm opacity-60"></i>' : ''}
                    </p>
                    <p class="text-gray-600 text-sm">${method.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderSocialLinks() {
        const socials = [
            { icon: "fab fa-github", url: "#", color: "hover:text-gray-700" },
            { icon: "fab fa-linkedin", url: "#", color: "hover:text-blue-700" },
            { icon: "fab fa-twitter", url: "#", color: "hover:text-blue-400" },
            { icon: "fab fa-instagram", url: "#", color: "hover:text-pink-500" },
            { icon: "fab fa-youtube", url: "#", color: "hover:text-red-600" }
        ];

        return socials.map(social => `
            <a href="${social.url}" target="_blank" rel="noopener noreferrer"
               class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center 
                      text-gray-600 ${social.color} transition-all duration-200 transform hover:scale-110">
                <i class="${social.icon} text-xl"></i>
            </a>
        `).join('');
    }

    renderFAQ() {
        const faqs = [
            {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months.",
                fullAnswer: "Project timelines vary depending on scope and complexity. Here's a general breakdown: Simple websites (landing pages, portfolios) typically take 2-4 weeks. Business websites with custom features require 4-8 weeks. Complex web applications (e-commerce, SaaS platforms) can take 2-6 months. I provide detailed timelines during our initial consultation, including milestone breakdowns and regular progress updates. Rush projects are possible with adjusted timelines and pricing."
            },
            {
                question: "Do you work with clients internationally?",
                answer: "Yes! I work with clients worldwide. I'm comfortable with remote collaboration and have experience working across different time zones.",
                fullAnswer: "Absolutely! I work with clients across the globe and have experience collaborating across different time zones. I use modern communication tools like Slack, Zoom, and project management platforms to ensure smooth collaboration. I'm flexible with meeting times and provide regular updates via email and video calls. I've successfully completed projects for clients in North America, Europe, Asia, and Australia. Cultural sensitivity and clear communication are priorities in all my international partnerships."
            },
            {
                question: "What's included in your development services?",
                answer: "My services include full-stack development, UI/UX consultation, code review, testing, deployment, and post-launch support.",
                fullAnswer: "My comprehensive development services include: Full-stack web development (frontend and backend), UI/UX design consultation and implementation, responsive design ensuring mobile compatibility, API development and integration, database design and optimization, code review and quality assurance, comprehensive testing (unit, integration, user acceptance), deployment and hosting setup, SSL certificates and security implementation, SEO optimization, performance optimization, post-launch support and maintenance, documentation and training, and ongoing consultation for future enhancements."
            },
            {
                question: "How do you handle project pricing?",
                answer: "I offer both fixed-price projects and hourly rates depending on the project scope. After our initial discussion, I'll provide a detailed proposal with transparent pricing.",
                fullAnswer: "I offer flexible pricing models to suit different project needs: Fixed-price projects for well-defined scopes with clear deliverables, hourly rates for ongoing development or evolving requirements, retainer arrangements for long-term partnerships, and milestone-based payments for larger projects. All proposals include detailed breakdowns of costs, timeline estimates, and payment schedules. I provide transparent pricing with no hidden fees. Initial consultations are always free, and I'm happy to work within your budget to find the best solution."
            },
            {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, Node.js, Python, and various databases. I'm always learning new technologies and can adapt to your specific tech stack.",
                fullAnswer: "My core expertise spans the full web development stack: Frontend technologies including HTML5, CSS3, JavaScript (ES6+), React, Vue.js, TypeScript, and modern CSS frameworks like Tailwind CSS. Backend development with Node.js, Express.js, Python, Django, and RESTful API design. Database management with MongoDB, PostgreSQL, MySQL, and Redis. Cloud services including AWS, deployment with Docker, and CI/CD pipelines. Development tools like Git, Webpack, Jest for testing, and modern development workflows. I stay current with industry trends and continuously learn new technologies to provide the best solutions for your projects."
            },
            {
                question: "Do you provide ongoing maintenance and support?",
                answer: "Yes, I offer comprehensive post-launch support including bug fixes, updates, and feature enhancements to keep your project running smoothly.",
                fullAnswer: "I provide comprehensive ongoing support to ensure your project continues to perform optimally: Regular maintenance including security updates, performance monitoring, backup management, and bug fixes. Feature enhancements and new functionality as your business grows. Technical support via email, phone, or video calls. Monthly reports on website performance, analytics, and recommendations. Emergency support for critical issues. Training for your team on content management and basic maintenance. I offer flexible support packages ranging from basic monthly maintenance to comprehensive managed services."
            }
        ];

        return faqs.map((faq, index) => `
            <div class="faq-item border-b border-gray-200 py-6">
                <button class="faq-question w-full text-left flex justify-between items-center focus:outline-none"
                        data-faq-index="${index}">
                    <h3 class="text-lg font-semibold text-gray-900 pr-4">${faq.question}</h3>
                    <i class="fas fa-chevron-down text-gray-500 transform transition-transform duration-200 faq-icon"></i>
                </button>
                <div class="faq-answer mt-4 text-gray-600 hidden">
                    <p class="mb-3">${faq.answer}</p>
                    <div class="faq-full-answer hidden" id="faq-full-${index}">
                        <p class="text-gray-600">${faq.fullAnswer}</p>
                    </div>
                    <button class="faq-read-more text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                            data-target="faq-full-${index}">
                        <span class="read-more-text">Read More</span>
                        <i class="fas fa-chevron-down ml-1 read-more-icon transition-transform duration-200"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    validateForm() {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);
        const errors = [];

        // Required field validation
        const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
        requiredFields.forEach(field => {
            if (!formData.get(field) || formData.get(field).trim() === '') {
                errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        });

        // Email validation
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }

        return errors;
    }

    showFormMessage(message, type = 'success') {
        const messageDiv = document.getElementById('form-message');
        const bgColor = type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 
                       'bg-red-100 border-red-500 text-red-700';
        
        messageDiv.innerHTML = `
            <div class="border-l-4 ${bgColor} p-4 rounded">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} text-xl"></i>
                    </div>
                    <div class="ml-3">
                        <p class="font-medium">${message}</p>
                    </div>
                </div>
            </div>
        `;
        
        messageDiv.classList.remove('hidden');
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    submitForm(formData) {
        // Simulate form submission (replace with actual form handling)
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate successful submission
                resolve({
                    success: true,
                    message: "Thank you for your message! I'll get back to you within 24 hours."
                });
            }, 2000);
        });
    }

    toggleFAQ(index) {
        const question = document.querySelector(`[data-faq-index="${index}"]`);
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach((faqAnswer, faqIndex) => {
            if (faqIndex !== index && !faqAnswer.classList.contains('hidden')) {
                faqAnswer.classList.add('hidden');
                const faqIcon = document.querySelector(`[data-faq-index="${faqIndex}"] .faq-icon`);
                if (faqIcon) {
                    faqIcon.style.transform = 'rotate(0deg)';
                }
                
                // Also hide any expanded "read more" sections
                const readMoreBtn = faqAnswer.querySelector('.faq-read-more');
                const fullAnswer = faqAnswer.querySelector('.faq-full-answer');
                if (readMoreBtn && fullAnswer && !fullAnswer.classList.contains('hidden')) {
                    fullAnswer.classList.add('hidden');
                    readMoreBtn.querySelector('.read-more-text').textContent = 'Read More';
                    readMoreBtn.querySelector('.read-more-icon').style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // Toggle current FAQ
        answer.classList.toggle('hidden');
        if (icon) {
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    }

    init() {
        // Add scroll animations
        utils.observeElements('.animate-slide-up', (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });

        // Setup form submission
        const form = document.getElementById('contact-form');
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form
            const errors = this.validateForm();
            if (errors.length > 0) {
                this.showFormMessage(errors.join('<br>'), 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            submitBtn.classList.add('opacity-75');

            try {
                const formData = new FormData(form);
                const result = await this.submitForm(formData);
                
                if (result.success) {
                    this.showFormMessage(result.message, 'success');
                    form.reset();
                } else {
                    this.showFormMessage(result.message || 'Something went wrong. Please try again.', 'error');
                }
            } catch (error) {
                this.showFormMessage('Network error. Please check your connection and try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitText.textContent = 'Send Message';
                submitBtn.classList.remove('opacity-75');
            }
        });

        // Setup FAQ toggles
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const index = parseInt(question.dataset.faqIndex);
                this.toggleFAQ(index);
            });
        });

        // Setup FAQ "Read More" functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('faq-read-more') || e.target.closest('.faq-read-more')) {
                const button = e.target.classList.contains('faq-read-more') ? e.target : e.target.closest('.faq-read-more');
                const targetId = button.getAttribute('data-target');
                const fullAnswerElement = document.getElementById(targetId);
                const readMoreText = button.querySelector('.read-more-text');
                const readMoreIcon = button.querySelector('.read-more-icon');
                
                if (fullAnswerElement.classList.contains('hidden')) {
                    // Show full answer
                    fullAnswerElement.classList.remove('hidden');
                    fullAnswerElement.style.opacity = '0';
                    fullAnswerElement.style.maxHeight = '0';
                    fullAnswerElement.style.transition = 'all 0.3s ease-out';
                    
                    requestAnimationFrame(() => {
                        fullAnswerElement.style.opacity = '1';
                        fullAnswerElement.style.maxHeight = '500px';
                    });
                    
                    readMoreText.textContent = 'Read Less';
                    readMoreIcon.style.transform = 'rotate(180deg)';
                } else {
                    // Hide full answer
                    fullAnswerElement.style.opacity = '0';
                    fullAnswerElement.style.maxHeight = '0';
                    
                    setTimeout(() => {
                        fullAnswerElement.classList.add('hidden');
                    }, 300);
                    
                    readMoreText.textContent = 'Read More';
                    readMoreIcon.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Add focus effects to form inputs
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('transform', 'scale-105');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('transform', 'scale-105');
            });
        });
    }
}
