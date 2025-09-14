
        // Slider functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;

        // Initialize slider on page load
        document.addEventListener('DOMContentLoaded', function() {
            showSlide(0);
        });

        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            if (slides[index]) {
                slides[index].classList.add('active');
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            
            // Loop around if at the end
            if (currentSlideIndex >= totalSlides) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = totalSlides - 1;
            }
            
            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        // Auto-play slider
        function autoPlay() {
            changeSlide(1);
        }

        // Start auto-play
        let autoPlayInterval = setInterval(autoPlay, 4000);

        // Pause auto-play on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(autoPlayInterval);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                autoPlayInterval = setInterval(autoPlay, 4000);
            });
        }

        // Enhanced touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        let isScrolling = false;

        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isScrolling = false;
        }, { passive: true });

        sliderContainer.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;
            
            endX = e.touches[0].clientX;
            endY = e.touches[0].clientY;
            
            const diffX = Math.abs(startX - endX);
            const diffY = Math.abs(startY - endY);
            
            // Determine if this is a horizontal or vertical swipe
            if (diffX > diffY) {
                // Horizontal swipe - prevent default scrolling
                e.preventDefault();
                isScrolling = false;
            } else {
                // Vertical swipe - allow scrolling
                isScrolling = true;
            }
        }, { passive: false });

        sliderContainer.addEventListener('touchend', (e) => {
            if (!isScrolling && startX && endX) {
                handleSwipe();
            }
            startX = 0;
            endX = 0;
            startY = 0;
            endY = 0;
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    changeSlide(1);
                } else {
                    // Swipe right - previous slide
                    changeSlide(-1);
                }
            }
        }

        // Enhanced Mobile Navigation Toggle
        function toggleMobileNav() {
            const mobileNav = document.getElementById('mobileNav');
            const body = document.body;
            
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                body.style.overflow = 'auto';
            } else {
                mobileNav.classList.add('active');
                body.style.overflow = 'hidden';
            }
        }

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            const mobileNav = document.getElementById('mobileNav');
            const menuIcon = document.querySelector('.menu-icon');
            
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                !menuIcon.contains(e.target)) {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Enhanced Contact Modal Functions
        window.openContactModal = function() {
            const modal = document.getElementById("contactModal");
            if (modal) {
                // Reset any previous positioning
                modal.style.position = "fixed";
                modal.style.top = "0";
                modal.style.left = "0";
                modal.style.width = "100%";
                modal.style.height = "100%";
                modal.style.zIndex = "2147483647";
                modal.style.display = "flex";
                modal.classList.add("active");
                document.body.style.overflow = 'hidden';
                
                // Prevent background scrolling on mobile
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                
                console.log("Contact modal opened successfully with proper centering");
            } else {
                console.error("Contact modal not found");
            }
        }

        window.closeContactModal = function() {
            const modal = document.getElementById("contactModal");
            if (modal) {
                modal.classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
                document.body.style.overflow = 'auto';
                document.body.style.position = 'static';
                document.body.style.width = 'auto';
                console.log("Contact modal closed");
            }
        }

        // Initialize modal event listeners
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('contactModal');
            const modalBackdrop = document.querySelector('.modal-backdrop');
            
            if (modal && modalBackdrop) {
                // Close when clicking backdrop
                modalBackdrop.addEventListener('click', function() {
                    closeContactModal();
                });
                
                // Prevent modal content from closing the modal
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.addEventListener('click', function(e) {
                        e.stopPropagation();
                    });
                }
                
                // Close with Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        closeContactModal();
                    }
                });
            }
        });

        // Close mobile nav when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileNav').classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced loading and performance optimizations
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
            
            // Preload critical images for better mobile performance
            const criticalImages = [
                'bhairabbanner.png',
                'swayambhubanner.png', 
                'kalibanner.png',
                'natrajan.png',
                'untold.png',
                'guide.png'
            ];
            
            criticalImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        });

        // Optimize for mobile devices
        if ('ontouchstart' in window) {
            // Add touch-specific optimizations
            document.body.classList.add('touch-device');
            
            // Improve touch scrolling
            document.addEventListener('touchstart', function() {}, { passive: true });
            document.addEventListener('touchmove', function() {}, { passive: true });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

