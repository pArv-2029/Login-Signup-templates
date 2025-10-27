/**
 * Modern Authentication Template
 * Handles form switching, validation, password strength, and interactive features
 */

class AuthTemplate {
    constructor() {
        this.currentForm = 'login';
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupAccessibility();
        this.initializePasswordStrength();
    }

    bindEvents() {
        // Tab switching
        document.getElementById('login-tab').addEventListener('click', () => this.switchForm('login'));
        document.getElementById('signup-tab').addEventListener('click', () => this.switchForm('signup'));

        // Form submissions
        document.getElementById('login-form').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('signup-form').addEventListener('submit', (e) => this.handleSignup(e));

        // Password toggles
        this.setupPasswordToggles();

        // Real-time validation
        this.setupRealTimeValidation();

        // Social login buttons
        this.setupSocialButtons();

        // Forgot password modal
        this.setupForgotPasswordModal();

        // Keyboard navigation
        this.setupKeyboardNavigation();
    }

    setupAccessibility() {
        // Ensure proper ARIA attributes are maintained
        const tabs = document.querySelectorAll('.tab-button');
        tabs.forEach(tab => {
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tab.click();
                }
            });
        });
    }

    switchForm(formType) {
        if (this.currentForm === formType) return;

        // Update tab states
        const loginTab = document.getElementById('login-tab');
        const signupTab = document.getElementById('signup-tab');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');

        if (formType === 'login') {
            loginTab.classList.add('active');
            loginTab.setAttribute('aria-selected', 'true');
            loginTab.setAttribute('tabindex', '0');
            loginForm.classList.add('active');
            loginForm.setAttribute('aria-hidden', 'false');

            signupTab.classList.remove('active');
            signupTab.setAttribute('aria-selected', 'false');
            signupTab.setAttribute('tabindex', '-1');
            signupForm.classList.remove('active');
            signupForm.setAttribute('aria-hidden', 'true');
        } else {
            signupTab.classList.add('active');
            signupTab.setAttribute('aria-selected', 'true');
            signupTab.setAttribute('tabindex', '0');
            signupForm.classList.add('active');
            signupForm.setAttribute('aria-hidden', 'false');

            loginTab.classList.remove('active');
            loginTab.setAttribute('aria-selected', 'false');
            loginTab.setAttribute('tabindex', '-1');
            loginForm.classList.remove('active');
            loginForm.setAttribute('aria-hidden', 'true');
        }

        this.currentForm = formType;
        this.clearAllErrors();
        
        // Focus first input of the new form
        setTimeout(() => {
            const firstInput = document.querySelector(`#${formType}-form .form-input`);
            if (firstInput) firstInput.focus();
        }, 100);
    }

    setupPasswordToggles() {
        const toggles = [
            { toggle: 'login-password-toggle', input: 'login-password' },
            { toggle: 'signup-password-toggle', input: 'signup-password' },
            { toggle: 'signup-confirm-password-toggle', input: 'signup-confirm-password' }
        ];

        toggles.forEach(({ toggle, input }) => {
            const toggleBtn = document.getElementById(toggle);
            const inputField = document.getElementById(input);
            
            if (toggleBtn && inputField) {
                toggleBtn.addEventListener('click', () => {
                    const isPassword = inputField.type === 'password';
                    inputField.type = isPassword ? 'text' : 'password';
                    
                    // Update aria-label
                    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
                    
                    // Update icon (you could add different icons for show/hide)
                    const icon = toggleBtn.querySelector('.eye-icon');
                    if (icon) {
                        icon.style.opacity = isPassword ? '0.5' : '1';
                    }
                });
            }
        });
    }

    setupRealTimeValidation() {
        // Email validation
        const emailInputs = ['login-email', 'signup-email'];
        emailInputs.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('blur', () => this.validateEmail(input));
                input.addEventListener('input', () => this.clearError(input));
            }
        });

        // Password validation
        const passwordInput = document.getElementById('signup-password');
        if (passwordInput) {
            passwordInput.addEventListener('input', () => {
                this.updatePasswordStrength(passwordInput.value);
                this.clearError(passwordInput);
            });
        }

        // Confirm password validation
        const confirmPasswordInput = document.getElementById('signup-confirm-password');
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('blur', () => this.validatePasswordMatch());
            confirmPasswordInput.addEventListener('input', () => this.clearError(confirmPasswordInput));
        }

        // Name validation
        const nameInput = document.getElementById('signup-name');
        if (nameInput) {
            nameInput.addEventListener('blur', () => this.validateName(nameInput));
            nameInput.addEventListener('input', () => this.clearError(nameInput));
        }
    }

    initializePasswordStrength() {
        const strengthFill = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        
        if (strengthFill && strengthText) {
            strengthFill.style.width = '0%';
            strengthText.textContent = 'Password strength';
        }
    }

    updatePasswordStrength(password) {
        const strengthFill = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        
        if (!strengthFill || !strengthText) return;

        const strength = this.calculatePasswordStrength(password);
        
        strengthFill.className = 'strength-fill';
        strengthFill.style.width = '0%';
        strengthText.textContent = 'Password strength';

        if (password.length === 0) return;

        if (strength.score < 2) {
            strengthFill.classList.add('weak');
            strengthFill.style.width = '33%';
            strengthText.textContent = 'Weak password';
        } else if (strength.score < 4) {
            strengthFill.classList.add('medium');
            strengthFill.style.width = '66%';
            strengthText.textContent = 'Medium strength';
        } else {
            strengthFill.classList.add('strong');
            strengthFill.style.width = '100%';
            strengthText.textContent = 'Strong password';
        }
    }

    calculatePasswordStrength(password) {
        let score = 0;
        const feedback = [];

        if (password.length >= 8) score++;
        else feedback.push('Use at least 8 characters');

        if (/[a-z]/.test(password)) score++;
        else feedback.push('Add lowercase letters');

        if (/[A-Z]/.test(password)) score++;
        else feedback.push('Add uppercase letters');

        if (/[0-9]/.test(password)) score++;
        else feedback.push('Add numbers');

        if (/[^A-Za-z0-9]/.test(password)) score++;
        else feedback.push('Add special characters');

        return { score, feedback };
    }

    validateEmail(input) {
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            this.showError(input, 'Email is required');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            this.showError(input, 'Please enter a valid email address');
            return false;
        }
        
        this.clearError(input);
        return true;
    }

    validateName(input) {
        const name = input.value.trim();
        
        if (!name) {
            this.showError(input, 'Name is required');
            return false;
        }
        
        if (name.length < 2) {
            this.showError(input, 'Name must be at least 2 characters');
            return false;
        }
        
        this.clearError(input);
        return true;
    }

    validatePasswordMatch() {
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const confirmInput = document.getElementById('signup-confirm-password');
        
        if (confirmPassword && password !== confirmPassword) {
            this.showError(confirmInput, 'Passwords do not match');
            return false;
        }
        
        this.clearError(confirmInput);
        return true;
    }

    showError(input, message) {
        const errorId = input.getAttribute('aria-describedby');
        const errorElement = document.getElementById(errorId);
        
        if (errorElement) {
            errorElement.textContent = message;
            input.setAttribute('aria-invalid', 'true');
        }
    }

    clearError(input) {
        const errorId = input.getAttribute('aria-describedby');
        const errorElement = document.getElementById(errorId);
        
        if (errorElement) {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
        }
    }

    clearAllErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
        });
        
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.removeAttribute('aria-invalid');
        });
    }

    async handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        
        // Validate form
        const isEmailValid = this.validateEmail(document.getElementById('login-email'));
        const isPasswordValid = this.validatePassword(document.getElementById('login-password'), 'login');
        
        if (!isEmailValid || !isPasswordValid) {
            return;
        }
        
        // Show loading state
        this.setButtonLoading('login-form', true);
        
        try {
            // Simulate API call
            await this.simulateApiCall();
            
            // Success - in a real app, you'd redirect or handle the response
            this.showSuccessMessage('Login successful!');
            
            // Reset form
            document.getElementById('login-form').reset();
            
        } catch (error) {
            this.showError(document.getElementById('login-email'), 'Invalid email or password');
        } finally {
            this.setButtonLoading('login-form', false);
        }
    }

    async handleSignup(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const terms = document.getElementById('terms-agreement').checked;
        
        // Validate form
        const isNameValid = this.validateName(document.getElementById('signup-name'));
        const isEmailValid = this.validateEmail(document.getElementById('signup-email'));
        const isPasswordValid = this.validatePassword(document.getElementById('signup-password'), 'signup');
        const isConfirmValid = this.validatePasswordMatch();
        const isTermsValid = this.validateTerms(terms);
        
        if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmValid || !isTermsValid) {
            return;
        }
        
        // Show loading state
        this.setButtonLoading('signup-form', true);
        
        try {
            // Simulate API call
            await this.simulateApiCall();
            
            // Success - in a real app, you'd redirect or handle the response
            this.showSuccessMessage('Account created successfully!');
            
            // Reset form and switch to login
            document.getElementById('signup-form').reset();
            this.switchForm('login');
            
        } catch (error) {
            this.showError(document.getElementById('signup-email'), 'Email already exists');
        } finally {
            this.setButtonLoading('signup-form', false);
        }
    }

    validatePassword(input, formType) {
        const password = input.value;
        
        if (!password) {
            this.showError(input, 'Password is required');
            return false;
        }
        
        if (formType === 'signup' && password.length < 8) {
            this.showError(input, 'Password must be at least 8 characters');
            return false;
        }
        
        this.clearError(input);
        return true;
    }

    validateTerms(checked) {
        if (!checked) {
            const termsInput = document.getElementById('terms-agreement');
            this.showError(termsInput, 'You must agree to the terms');
            return false;
        }
        return true;
    }

    setButtonLoading(formId, loading) {
        const form = document.getElementById(formId);
        const button = form.querySelector('.auth-button');
        const buttonText = button.querySelector('.button-text');
        const buttonLoader = button.querySelector('.button-loader');
        
        if (loading) {
            button.disabled = true;
            buttonText.style.display = 'none';
            buttonLoader.style.display = 'block';
        } else {
            button.disabled = false;
            buttonText.style.display = 'block';
            buttonLoader.style.display = 'none';
        }
    }

    async simulateApiCall() {
        // Simulate network delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 10% failure rate
                if (Math.random() < 0.1) {
                    reject(new Error('API Error'));
                } else {
                    resolve({ success: true });
                }
            }, 1500);
        });
    }

    showSuccessMessage(message) {
        // Create a temporary success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1001;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(successDiv);
            }, 300);
        }, 3000);
    }

    setupSocialButtons() {
        const socialButtons = document.querySelectorAll('.social-button');
        
        socialButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
                
                // Simulate social login
                this.showSuccessMessage(`${provider} login clicked - integrate with your OAuth provider`);
                
                // In a real app, you'd redirect to OAuth provider
                // window.location.href = `/auth/${provider.toLowerCase()}`;
            });
        });
    }

    setupForgotPasswordModal() {
        const forgotLink = document.getElementById('forgot-password-link');
        const modal = document.getElementById('forgot-password-modal');
        const closeBtn = document.getElementById('modal-close');
        const form = document.getElementById('forgot-password-form');
        
        // Open modal
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal(modal);
        });
        
        // Close modal
        closeBtn.addEventListener('click', () => {
            this.closeModal(modal);
        });
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
        
        // Handle form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('reset-email').value.trim();
            const emailInput = document.getElementById('reset-email');
            
            if (!this.validateEmail(emailInput)) {
                return;
            }
            
            this.setButtonLoading('forgot-password-form', true);
            
            try {
                await this.simulateApiCall();
                this.showSuccessMessage('Password reset link sent to your email');
                this.closeModal(modal);
                form.reset();
            } catch (error) {
                this.showError(emailInput, 'Failed to send reset link');
            } finally {
                this.setButtonLoading('forgot-password-form', false);
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal(modal);
            }
        });
    }

    openModal(modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('.form-input');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    closeModal(modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Return focus to trigger element
        const forgotLink = document.getElementById('forgot-password-link');
        if (forgotLink) forgotLink.focus();
    }

    setupKeyboardNavigation() {
        // Tab navigation with arrow keys
        const tabs = document.querySelectorAll('.tab-button');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('keydown', (e) => {
                let targetIndex;
                
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        targetIndex = index === 0 ? tabs.length - 1 : index - 1;
                        tabs[targetIndex].focus();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        targetIndex = index === tabs.length - 1 ? 0 : index + 1;
                        tabs[targetIndex].focus();
                        break;
                }
            });
        });
    }
}

// Add CSS animations for success messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the authentication template when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AuthTemplate();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthTemplate;
}
