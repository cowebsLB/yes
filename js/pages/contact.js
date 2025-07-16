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
                color: "text-blue-600"
            },
            {
                icon: "fas fa-phone",
                title: "Phone",
                value: "+1 (555) 123-4567",
                description: "Available Mon-Fri, 9AM-6PM EST",
                color: "text-green-600"
            },
            {
                icon: "fab fa-linkedin",
                title: "LinkedIn",
                value: "linkedin.com/in/yourprofile",
                description: "Professional networking and connections",
                color: "text-blue-700"
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                value: "New York, NY",
                description: "Open to remote and local opportunities",
                color: "text-red-600"
            }
        ];

        return methods.map(method => `
            <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 
                      transition-colors duration-200">
                <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <i class="${method.icon} text-xl ${method.color}"></i>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-gray-900">${method.title}</h3>
                    <p class="text-blue-600 font-medium">${method.value}</p>
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
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I'll provide a detailed timeline during our initial consultation."
            },
            {
                question: "Do you work with clients internationally?",
                answer: "Yes! I work with clients worldwide. I'm comfortable with remote collaboration and have experience working across different time zones. Clear communication and project management tools ensure smooth collaboration."
            },
            {
                question: "What's included in your development services?",
                answer: "My services include full-stack development, UI/UX consultation, code review, testing, deployment, and post-launch support. I also provide documentation and can train your team on the delivered solution."
            },
            {
                question: "How do you handle project pricing?",
                answer: "I offer both fixed-price projects and hourly rates depending on the project scope. After our initial discussion, I'll provide a detailed proposal with transparent pricing and payment milestones."
            },
            {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, Node.js, Python, and various databases. I'm always learning new technologies and can adapt to your specific tech stack requirements."
            }
        ];

        return faqs.map((faq, index) => `
            <div class="faq-item border-b border-gray-200 py-6">
                <button class="faq-question w-full text-left flex justify-between items-center focus:outline-none"
                        data-faq-index="${index}">
                    <h3 class="text-lg font-semibold text-gray-900 pr-4">${faq.question}</h3>
                    <i class="fas fa-chevron-down text-gray-500 transform transition-transform duration-200"></i>
                </button>
                <div class="faq-answer mt-4 text-gray-600 hidden">
                    <p>${faq.answer}</p>
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
        const icon = question.querySelector('i');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach((faqAnswer, faqIndex) => {
            if (faqIndex !== index && !faqAnswer.classList.contains('hidden')) {
                faqAnswer.classList.add('hidden');
                const faqIcon = document.querySelector(`[data-faq-index="${faqIndex}"] i`);
                faqIcon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current FAQ
        answer.classList.toggle('hidden');
        icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
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
