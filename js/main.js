// // Mobile Navigation Toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navLinks.classList.toggle('active');
// });

// // Close mobile menu when clicking on a nav link
// document.querySelectorAll('.nav-links li a').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navLinks.classList.remove('active');
//     });
// });

// // Testimonial Slider
// const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.dot');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentSlide = 0;

// // Initialize the slider
// function initSlider() {
//     // Hide all slides
//     slides.forEach(slide => {
//         slide.classList.remove('active');
//     });
    
//     // Remove active class from all dots
//     dots.forEach(dot => {
//         dot.classList.remove('active');
//     });
    
//     // Show the current slide
//     slides[currentSlide].classList.add('active');
//     dots[currentSlide].classList.add('active');
// }

// // Next slide
// function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }
//     initSlider();
// }

// // Previous slide
// function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     }
//     initSlider();
// }

// // Event listeners for slider controls
// if (prevBtn && nextBtn) {
//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);
// }

// // Event listeners for dots
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         initSlider();
//     });
// });

// // Auto slide
// let slideInterval = setInterval(nextSlide, 5000);

// // Pause auto slide on hover
// const testimonialSlider = document.querySelector('.testimonial-slider');
// if (testimonialSlider) {
//     testimonialSlider.addEventListener('mouseenter', () => {
//         clearInterval(slideInterval);
//     });
    
//     testimonialSlider.addEventListener('mouseleave', () => {
//         slideInterval = setInterval(nextSlide, 5000);
//     });
// }

// // Sticky Header
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });

// // Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Animation on scroll
// window.addEventListener('scroll', () => {
//     const animatedElements = document.querySelectorAll('.animate');
    
//     animatedElements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (elementPosition < windowHeight - 100) {
//             element.classList.add('animated');
//         }
//     });
// });

// // Initialize the slider on page load
// document.addEventListener('DOMContentLoaded', () => {
//     initSlider();
// });

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('sticky');
            
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add('hide-header');
            } else {
                // Scrolling up
                header.classList.remove('hide-header');
            }
        } else {
            header.classList.remove('sticky');
            header.classList.remove('hide-header');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    // Current year for copyright
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize any sliders on the page
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        if (slider.classList.contains('testimonial-slider')) {
            // Testimonial slider is handled in its own script
            return;
        }
        
        // Generic slider functionality
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentSlide = 0;
        
        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[n].style.display = 'block';
        }
        
        if (slides.length > 0) {
            showSlide(0);
            
            if (prevBtn && nextBtn) {
                nextBtn.addEventListener('click', function() {
                    currentSlide = (currentSlide + 1) % slides.length;
                    showSlide(currentSlide);
                });
                
                prevBtn.addEventListener('click', function() {
                    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                    showSlide(currentSlide);
                });
            }
        }
    });

    // Form validation for all forms
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        if (form.classList.contains('newsletter-form')) {
            // Simple validation for newsletter forms
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                
                if (emailInput && isValidEmail(emailInput.value)) {
                    // Success - in a real implementation, you would send this to a server
                    emailInput.value = '';
                    alert('Thank you for subscribing to our newsletter!');
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }
    });
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Image lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Dropdown menu functionality for mobile
    const hasDropdown = document.querySelectorAll('.has-dropdown');
    
    hasDropdown.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');
        
        if (window.innerWidth < 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('show-dropdown');
            });
        }
    });
    
    // Countdown timer for special offers (if present)
    const countdownElement = document.querySelector('.countdown-timer');
    
    if (countdownElement) {
        const endDate = new Date(countdownElement.dataset.endDate || new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        
        function updateCountdown() {
            const now = new Date();
            const distance = endDate - now;
            
            if (distance < 0) {
                countdownElement.innerHTML = 'Offer has expired';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-item"><span>${days}</span> Days</div>
                <div class="countdown-item"><span>${hours}</span> Hours</div>
                <div class="countdown-item"><span>${minutes}</span> Minutes</div>
                <div class="countdown-item"><span>${seconds}</span> Seconds</div>
            `;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Tour filter functionality (if on tours page)
    const tourFilter = document.querySelector('.tour-filter');
    
    if (tourFilter) {
        const filterBtn = tourFilter.querySelector('.filter-btn');
        const resetBtn = tourFilter.querySelector('.reset-btn');
        const tourCards = document.querySelectorAll('.tour-card');
        
        if (filterBtn) {
            filterBtn.addEventListener('click', function() {
                const typeFilter = document.getElementById('tour-type')?.value || 'all';
                const durationFilter = document.getElementById('duration')?.value || 'all';
                const priceFilter = document.getElementById('price-range')?.value || 'all';
                
                tourCards.forEach(card => {
                    const cardType = card.getAttribute('data-type');
                    const cardDuration = parseInt(card.getAttribute('data-duration'));
                    const cardPrice = card.getAttribute('data-price');
                    
                    let typeMatch = typeFilter === 'all' || cardType === typeFilter;
                    let durationMatch = true;
                    let priceMatch = priceFilter === 'all' || cardPrice === priceFilter;
                    
                    // Duration filtering logic
                    if (durationFilter !== 'all') {
                        if (durationFilter === '1-3' && (cardDuration < 1 || cardDuration > 3)) {
                            durationMatch = false;
                        } else if (durationFilter === '4-7' && (cardDuration < 4 || cardDuration > 7)) {
                            durationMatch = false;
                        } else if (durationFilter === '8-14' && (cardDuration < 8 || cardDuration > 14)) {
                            durationMatch = false;
                        } else if (durationFilter === '15+' && cardDuration < 15) {
                            durationMatch = false;
                        }
                    }
                    
                    if (typeMatch && durationMatch && priceMatch) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                // Reset all filter selects to default
                const filterSelects = tourFilter.querySelectorAll('select');
                filterSelects.forEach(select => {
                    select.selectedIndex = 0;
                });
                
                // Show all tour cards
                tourCards.forEach(card => {
                    card.style.display = 'block';
                });
            });
        }
    }
});


// Gallery filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery script loaded');
    
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    console.log('Filter buttons:', filterButtons.length);
    
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Gallery items:', galleryItems.length);
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Filter clicked:', this.getAttribute('data-filter'));
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'tour-modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'tour-modal';
    
    const closeButton = document.createElement('div');
    closeButton.className = 'tour-modal-close';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    
    const modalBody = document.createElement('div');
    modalBody.className = 'tour-modal-content';
    
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalBody);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Get all "View Details" buttons
    const viewDetailsButtons = document.querySelectorAll('.tour-card .primary-btn');
    
    // Add click event to each button
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get tour data from the parent card
            const tourCard = this.closest('.tour-card');
            const tourImage = tourCard.querySelector('.tour-img img').src;
            const tourTitle = tourCard.querySelector('h3').textContent;
            const tourType = tourCard.querySelector('.tour-type').textContent;
            const tourDuration = tourCard.querySelector('.tour-duration').textContent;
            const tourLocation = tourCard.querySelector('.tour-details span:first-child').textContent;
            const tourGroupSize = tourCard.querySelector('.tour-details span:last-child').textContent;
            const tourDescription = tourCard.querySelector('.tour-description').textContent;
            const tourPrice = tourCard.querySelector('.tour-price').textContent;
            const priceIncludes = tourCard.querySelector('.price-includes').textContent;
            
            // Get highlights
            const highlightsList = tourCard.querySelectorAll('.tour-highlights ul li');
            let highlights = [];
            highlightsList.forEach(item => {
                highlights.push(item.textContent);
            });
            
            // Populate modal with tour data
            modalBody.innerHTML = `
                <div class="tour-modal-header">
                    <img src="${tourImage}" alt="${tourTitle}">
                    <div class="tour-modal-header-overlay">
                        <h2>${tourTitle}</h2>
                        <div class="tour-modal-badges">
                            <div class="tour-modal-badge">
                                <i class="fas fa-tag"></i> ${tourType}
                            </div>
                            <div class="tour-modal-badge">
                                <i class="fas fa-clock"></i> ${tourDuration}
                            </div>
                            <div class="tour-modal-badge">
                                <i class="fas fa-users"></i> ${tourGroupSize}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tour-modal-body">
                    <div class="tour-modal-section">
                        <h3>Tour Overview</h3>
                        <p class="tour-modal-description">${tourDescription}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${tourLocation}</p>
                    </div>
                    
                    <div class="tour-modal-section tour-modal-highlights">
                        <h3>Tour Highlights</h3>
                        <ul>
                            ${highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="tour-modal-section">
                        <h3>Sample Itinerary</h3>
                        <div class="tour-modal-itinerary">
                            <div class="tour-modal-itinerary-day">
                                <h4><span>1</span> Arrival & Welcome</h4>
                                <p>Arrive at Entebbe International Airport where you'll be met by your guide. Transfer to your accommodation in Kampala or Entebbe for overnight stay and trip briefing.</p>
                            </div>
                            <div class="tour-modal-itinerary-day">
                                <h4><span>2</span> Journey to Destination</h4>
                                <p>After breakfast, depart for your main destination with scenic stops along the way. Lunch en route and arrival at your accommodation in the afternoon.</p>
                            </div>
                            <div class="tour-modal-itinerary-day">
                                <h4><span>3</span> Main Activity Day</h4>
                                <p>Early breakfast followed by the main activity of your tour (gorilla trekking, game drive, cultural visit, etc.). Return to lodge for lunch and afternoon activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tour-modal-footer">
                    <div class="tour-modal-price">
                        ${tourPrice} <span>(${priceIncludes})</span>
                    </div>
                    <a href="../contact/index.html" class="btn primary-btn">Book This Tour</a>
                </div>
            `;
            
            // Show modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all explore buttons
    const exploreButtons = document.querySelectorAll('.destination-card .primary-btn');
    
    // Add click event listeners to each explore button
    exploreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the parent destination card
            const destinationCard = this.closest('.destination-card');
            
            // Get destination details
            const destinationName = destinationCard.querySelector('h3').textContent;
            const destinationLocation = destinationCard.querySelector('.destination-meta span:first-child').textContent;
            const destinationCategory = destinationCard.querySelector('.destination-tag').textContent;
            const destinationDescription = destinationCard.querySelector('p').textContent;
            const destinationImage = destinationCard.querySelector('.destination-img img').src;
            
            // Get highlights
            const highlightsList = destinationCard.querySelectorAll('.destination-highlights ul li');
            const highlights = Array.from(highlightsList).map(item => item.textContent);
            
            // Create modal content
            createDestinationModal(
                destinationName,
                destinationLocation,
                destinationCategory,
                destinationDescription,
                destinationImage,
                highlights,
                destinationCard.getAttribute('data-category')
            );
        });
    });
    
    // Function to create and show destination modal
    function createDestinationModal(name, location, category, description, image, highlights, categoryType) {
        // Create modal container
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'destination-modal-overlay';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'destination-modal-content';
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalOverlay);
            document.body.classList.remove('modal-open');
        });
        
        // Create modal header with image
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        modalHeader.style.backgroundImage = `url(${image})`;
        
        const modalHeaderContent = document.createElement('div');
        modalHeaderContent.className = 'modal-header-content';
        
        const modalTitle = document.createElement('h2');
        modalTitle.textContent = name;
        
        const modalMeta = document.createElement('div');
        modalMeta.className = 'modal-meta';
        modalMeta.innerHTML = `
            <span>${location}</span>
            <span class="modal-category ${categoryType}">${category}</span>
        `;
        
        modalHeaderContent.appendChild(modalTitle);
        modalHeaderContent.appendChild(modalMeta);
        modalHeader.appendChild(modalHeaderContent);
        
        // Create modal body
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        
        const descriptionSection = document.createElement('div');
        descriptionSection.className = 'modal-section';
        
        const descriptionTitle = document.createElement('h3');
        descriptionTitle.textContent = 'About this Destination';
        
        const descriptionText = document.createElement('p');
        descriptionText.textContent = description;
        
        descriptionSection.appendChild(descriptionTitle);
        descriptionSection.appendChild(descriptionText);
        
        // Create highlights section
        const highlightsSection = document.createElement('div');
        highlightsSection.className = 'modal-section';
        
        const highlightsTitle = document.createElement('h3');
        highlightsTitle.textContent = 'Highlights';
        
        const highlightsList = document.createElement('ul');
        highlightsList.className = 'modal-highlights';
        
        highlights.forEach(highlight => {
            const listItem = document.createElement('li');
            listItem.textContent = highlight;
            highlightsList.appendChild(listItem);
        });
        
        highlightsSection.appendChild(highlightsTitle);
        highlightsSection.appendChild(highlightsList);
        
        // Create booking section
        const bookingSection = document.createElement('div');
        bookingSection.className = 'modal-section booking-section';
        
        const bookingTitle = document.createElement('h3');
        bookingTitle.textContent = 'Plan Your Visit';
        
        const bookingText = document.createElement('p');
        bookingText.textContent = 'Interested in visiting this destination? Contact us to include it in your itinerary or book a specialized tour.';
        
        const bookingButtons = document.createElement('div');
        bookingButtons.className = 'booking-buttons';
        
        const bookTourButton = document.createElement('a');
        bookTourButton.href = '../tours/index.html';
        bookTourButton.className = 'btn primary-btn';
        bookTourButton.textContent = 'View Related Tours';
        
        const inquireButton = document.createElement('a');
        inquireButton.href = '../contact/index.html';
        inquireButton.className = 'btn secondary-btn';
        inquireButton.textContent = 'Inquire Now';
        
        bookingButtons.appendChild(bookTourButton);
        bookingButtons.appendChild(inquireButton);
        
        bookingSection.appendChild(bookingTitle);
        bookingSection.appendChild(bookingText);
        bookingSection.appendChild(bookingButtons);
        
        // Assemble modal body
        modalBody.appendChild(descriptionSection);
        modalBody.appendChild(highlightsSection);
        modalBody.appendChild(bookingSection);
        
        // Assemble modal content
        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        
        // Add modal to overlay
        modalOverlay.appendChild(modalContent);
        
        // Add modal to body
        document.body.appendChild(modalOverlay);
        document.body.classList.add('modal-open');
        
        // Add event listener to close modal when clicking outside
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
                document.body.classList.remove('modal-open');
            }
        });
        
        // Add keyboard event to close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.classList.contains('modal-open')) {
                document.body.removeChild(modalOverlay);
                document.body.classList.remove('modal-open');
            }
        });
    }
});
