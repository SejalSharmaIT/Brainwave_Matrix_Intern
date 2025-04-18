// Smooth scrolling for navbar links
document.querySelectorAll('.navbar nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// contact validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const inputs = this.querySelectorAll('input, textarea');
            let valid = true;

            // Validate each field
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';  // Highlight empty fields
                    valid = false;
                } else {
                    input.style.borderColor = '#ddd'; // Reset the border color
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all fields.');
            } else {
                // If form is valid, show confirmation message
                e.preventDefault();  
                alert('Thank you for your message! We will get back to you soon.');

                contactForm.reset();
            }
        });
    }
});

// Registration Form
document.addEventListener('DOMContentLoaded', () => {
    // Get all Register Now buttons
    const registerButtons = document.querySelectorAll('.event-card .btn');
    
    // Get the registration form and elements to update
    const registrationForm = document.querySelector('.registration-form');
    const eventName = document.getElementById('event-name');
    const eventDate = document.getElementById('event-date');
    const eventTime = document.getElementById('event-time');

    // Event listener for Register Now buttons
    registerButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Show the registration form
            registrationForm.style.display = 'block';
            
            // Event details corresponding to each button
            const eventDetails = [
                {
                    name: 'Annual Business Conference 2025',
                    date: 'May 20, 2025',
                    time: '10:00 AM',
                },
                {
                    name: 'Tech Meetup',
                    date: 'June 10, 2025',
                    time: '2:00 PM',
                },
                {
                    name: 'Marketing Workshop',
                    date: 'July 15, 2025',
                    time: '9:00 AM',
                },
                {
                    name: 'AI & Machine Learning Webinar',
                    date: 'August 5, 2025',
                    time: '11:00 AM',
                },
                {
                    name: 'Surprise Birthday Bash',
                    date: 'September 1, 2025',
                    time: '7:00 PM',
                },
                {
                    name: 'Grand Wedding Celebration',
                    date: 'December 12, 2025',
                    time: '4:00 PM',
                },
            ];

            // Set the event details for the clicked event
            const selectedEvent = eventDetails[index];
            eventName.textContent = selectedEvent.name;
            eventDate.textContent = selectedEvent.date;
            eventTime.textContent = selectedEvent.time;
        });
    });

    // Close the registration form
    const closeButton = document.querySelector('.registration-form .close-form');
    closeButton.addEventListener('click', function () {
        registrationForm.style.display = 'none';
    });

    // Handle the registration form submission
    const registrationFormElement = document.getElementById('registration-form');
    if (registrationFormElement) {
        registrationFormElement.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const comments = this.querySelector('textarea').value.trim();

            // Simple validation
            if (!name || !email || !comments) {
                alert('Please fill in all fields.');
                return;
            }

            // Handle form data (e.g., sending it to a server or showing a success message)
            alert(`Thank you for registering, ${name}!`);

            // Reset the form and hide it
            registrationForm.style.display = 'none';
            registrationFormElement.reset();
        });
    }
});

// Login Form
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const loginError = document.getElementById('login-error');
    const loginContainer = document.getElementById('login-form');
    const navbar = document.querySelector('nav'); // Adjust selector as needed
    const homepage = document.getElementById('home'); // Replace with your actual home section ID

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username && password) {
            // Hide login form and show homepage/menu
            loginContainer.style.display = 'none';
            if (navbar) navbar.style.display = 'block';
            if (homepage) homepage.scrollIntoView({ behavior: 'smooth' });
        } else {
            loginError.style.display = 'block';
            loginError.textContent = 'Please enter both username and password.';
        }
    });

    // Initially hide nav bar
    if (navbar) navbar.style.display = 'none';
});

