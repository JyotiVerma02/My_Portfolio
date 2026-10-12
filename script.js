document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li');
    const sections = document.querySelectorAll('section');

     // Scroll reveal animation for sections
    const revealElements = document.querySelectorAll(
        ".about, .skills, .experience, .projects, .contact"
    );

    function revealOnScroll() {
        revealElements.forEach((element) => {

            const windowHeight = window.innerHeight;
            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    // Main scroll event handler
    function onScroll() {
        // The navbar is now always styled, so no class change on scroll is needed.

        // Handle active navigation link highlighting
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            const link = li.querySelector('a');
            if (link.getAttribute('href').substring(1) === currentSection) {
                li.classList.add('active');
            }
        });

        // Trigger reveal animations
        revealOnScroll();
    }

    window.addEventListener("scroll", onScroll);
    revealOnScroll();

    // Project Modal Logic
    const projectData = {
        'portfolio': {
            title: 'Dynamic Personal Portfolio',
            description: 'A fully responsive personal portfolio website built from scratch to showcase my skills, experience, and projects. It features a clean UI, smooth scroll animations, and a dynamic navigation bar.',
            features: [
                'Sticky navigation with active link highlighting on scroll.',
                'Smooth scrolling for all internal links.',
                'Fade-in animations for sections as they enter the viewport.',
                'Fully responsive design for mobile, tablet, and desktop.'
            ],
            tech: 'HTML5, CSS3, JavaScript (ES6+)',
            links: {
                github: 'https://github.com/JyotiVerma02/My_Portfolio'
            }
        },
        'travel-iq-login': {
            title: 'Travel IQ - Secure Authentication',
            description: 'Designed and developed a secure, user-friendly, and responsive authentication portal for the Travel IQ platform. It includes robust client-side validation for both login and registration forms.',
            features: [
                'Modular component architecture for easy maintenance.',
                'Real-time input validation to guide users.',
                'Responsive layout that adapts to any screen size.',
                'Focus on accessibility and user experience.'
            ],
            tech: 'React.js, TypeScript, Tailwind CSS',
            links: {
                live: '#', // Add live link
                github: '#' // Add github link
            }
        },
        'photocopy': {
            title: 'Photocopy Order Management System',
            description: 'An internal tool developed to automate and streamline the print-order workflow for a local business. It digitizes the process from order placement to completion tracking.',
            features: [
                'Centralized dashboard for viewing all orders.',
                'Status tracking (Pending, In-Progress, Completed).',
                'Simplified order submission form.',
                'Reduced manual effort and improved organization.'
            ],
            tech: 'React.js, Firebase (Firestore), Tailwind CSS',
            links: {
                github: '#' // Add github link
            }
        },
        'dongle': {
            title: 'IRCTC Dongle ID Management System',
            description: 'A specialized system built to manage the assignment and tracking of IRCTC dongle IDs for travel agents. This tool replaced a manual spreadsheet system, improving security and efficiency.',
            features: [
                'Automated assignment of available dongle IDs.',
                'Secure storage and retrieval of agent and dongle information.',
                'Search and filter functionality for quick lookups.',
                'Role-based access for administrators.'
            ],
            tech: 'Next.js, TypeScript, Firebase, Tailwind CSS',
            links: {
                github: '#' // Add github link
            }
        }
    };

    const modalOverlay = document.getElementById('project-modal-overlay');
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project;
            const data = projectData[projectId];

            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-description').textContent = data.description;
            document.getElementById('modal-tech').textContent = data.tech;
            
            const featuresList = document.getElementById('modal-features');
            featuresList.innerHTML = '';
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            const linksContainer = document.getElementById('modal-links');
            linksContainer.innerHTML = '';
            if (data.links.live && data.links.live !== '#') {
                linksContainer.innerHTML += `<a href="${data.links.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>`;
            }
            if (data.links.github && data.links.github !== '#') {
                linksContainer.innerHTML += `<a href="${data.links.github}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`;
            }

            modalOverlay.classList.add('show');
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('show');
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

});