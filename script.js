/**
 * BSKL Corporate Website JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. STICKY NAVBAR & SCROLL SHADOW
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 2. MOBILE MENU DRAWER
    // ==========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            const icon = navToggle.querySelector('span');
            if (navMenu.classList.contains('open')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('open');
                navToggle.querySelector('span').textContent = 'menu';
            }
        });
        
        // Close menu on click link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.querySelector('span').textContent = 'menu';
            });
        });
    }

    // ==========================================
    // 3. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px -10% -10% 0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // If this is a stats counter container, trigger counter animation
                if (entry.target.classList.contains('stats-section')) {
                    animateCounters();
                }
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        scrollObserver.observe(element);
    });

    // ==========================================
    // 4. STATS COUNTER ANIMATION
    // ==========================================
    let countersAnimated = false;
    
    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;
        
        document.querySelectorAll('.counter').forEach(counter => {
            const targetStr = counter.getAttribute('data-target');
            const target = parseFloat(targetStr);
            const duration = 2000; // ms
            const stepTime = 30; // ms
            const steps = Math.ceil(duration / stepTime);
            const increment = target / steps;
            let current = 0;
            let step = 0;
            
            const timer = setInterval(() => {
                current += increment;
                step++;
                if (step >= steps) {
                    clearInterval(timer);
                    // format correctly
                    counter.innerText = targetStr;
                } else {
                    if (Number.isInteger(target)) {
                        counter.innerText = Math.floor(current);
                    } else {
                        counter.innerText = current.toFixed(1);
                    }
                }
            }, stepTime);
        });
    }

    // If stats are present but not inside a .stats-section wrapper, observe individual counters
    if (!document.querySelector('.stats-section')) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        const firstCounter = document.querySelector('.counter');
        if (firstCounter) {
            counterObserver.observe(firstCounter.parentElement);
        }
    }

    // ==========================================
    // 5. HERO SLIDER AUTO-PLAY
    // ==========================================
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval;
    
    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        function startSlider() {
            slideInterval = setInterval(nextSlide, 6000);
        }
        
        function resetSlider() {
            clearInterval(slideInterval);
            startSlider();
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetSlider();
            });
        });
        
        startSlider();
    }

    // ==========================================
    // 6. FACILITIES PAGE TABS SYSTEM
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const matchingContent = document.getElementById(targetTab);
                if (matchingContent) {
                    matchingContent.classList.add('active');
                    
                    // Re-trigger scroll observer elements inside the tab
                    matchingContent.querySelectorAll('.animate-on-scroll').forEach(el => {
                        el.classList.add('appear');
                    });
                }
            });
        });
        
        // Activate direct tab from URL hash if present
        const hash = window.location.hash.substring(1);
        if (hash) {
            const activeTabBtn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
            if (activeTabBtn) {
                activeTabBtn.click();
                activeTabBtn.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // ==========================================
    // 7. GALLERY PAGE FILTERING & LIGHTBOX
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Lightbox implementation
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content animate-on-scroll">
                <button class="lightbox-close"><span class="material-symbols-outlined">close</span></button>
                <img class="lightbox-img" src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const captionText = item.querySelector('h3').textContent;
                const specText = item.querySelector('p').textContent;
                
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxCaption.innerHTML = `<strong>${captionText}</strong> &ndash; ${specText}`;
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scroll
            });
        });
        
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // ==========================================
    // 8. INTERACTIVE QUOTE CALCULATOR & FORM SUBMISSION
    // ==========================================
    const quoteForm = document.getElementById('quoteForm');
    const quantityInput = document.getElementById('calc-quantity');
    const serviceSelect = document.getElementById('calc-service');
    const dyeingTypeSelect = document.getElementById('calc-dyeing');
    
    // Output DOM nodes
    const outBaseVal = document.getElementById('out-base');
    const outTotalVal = document.getElementById('out-total');
    const outTimeVal = document.getElementById('out-time');
    
    if (quoteForm && quantityInput) {
        
        function calculateEstimate() {
            const quantity = parseFloat(quantityInput.value) || 0;
            const service = serviceSelect.value;
            const dyeing = dyeingTypeSelect ? dyeingTypeSelect.value : 'standard';
            
            // Basic rates in USD per KG
            let rate = 0;
            let timeFactor = 0.05; // 0.05 days per KG
            
            if (service === 'spinning') {
                rate = 2.45; // Cotton yarn spinning rate
                timeFactor = 0.02;
            } else if (service === 'dyeing') {
                rate = 1.85; // Base dyeing rate
                if (dyeing === 'cationic') rate += 0.40;
                if (dyeing === 'dual-bath') rate += 0.75;
                timeFactor = 0.03;
            } else if (service === 'sweater') {
                rate = 5.20; // Knitting & sweater assembly rate
                timeFactor = 0.08;
            } else if (service === 'lab-dev') {
                rate = 50.00; // Flat rate for lab dips
                timeFactor = 0;
            }
            
            let total = 0;
            let leadTime = 0;
            
            if (service === 'lab-dev') {
                total = rate * (quantity > 0 ? Math.min(quantity, 5) : 1); // Mock quantity for lab sample batches
                leadTime = 4; // Flat 4 days
            } else {
                total = rate * quantity;
                leadTime = Math.ceil(5 + (quantity * timeFactor));
            }
            
            // UI Update
            if (outBaseVal) outBaseVal.innerText = `$${rate.toFixed(2)}`;
            if (outTotalVal) outTotalVal.innerText = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            if (outTimeVal) outTimeVal.innerText = quantity > 0 ? `${leadTime} Working Days` : 'TBD';
        }
        
        // Listeners for calculator inputs
        quantityInput.addEventListener('input', calculateEstimate);
        serviceSelect.addEventListener('change', () => {
            // Show/hide dyeing spec based on selections
            const dyeingGroup = document.getElementById('dyeing-spec-group');
            if (dyeingGroup) {
                if (serviceSelect.value === 'dyeing') {
                    dyeingGroup.style.display = 'block';
                } else {
                    dyeingGroup.style.display = 'none';
                }
            }
            calculateEstimate();
        });
        
        if (dyeingTypeSelect) {
            dyeingTypeSelect.addEventListener('change', calculateEstimate);
        }
        
        // Run initial calculation
        calculateEstimate();
    }
    
    // Create & append toast container if forms are present
    const forms = document.querySelectorAll('form');
    if (forms.length > 0) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <span class="material-symbols-outlined icon">check_circle</span>
            <span class="toast-message">Message sent successfully!</span>
        `;
        document.body.appendChild(toast);
        
        const showToast = (message) => {
            toast.querySelector('.toast-message').innerText = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        };
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Mock visual submission
                const btn = form.querySelector('button[type="submit"]');
                const origText = btn ? btn.innerHTML : 'Submit';
                
                if (btn) {
                    btn.innerHTML = `<span class="material-symbols-outlined animate-spin" style="animation: spin 1s linear infinite;">sync</span> Processing...`;
                    btn.disabled = true;
                }
                
                setTimeout(() => {
                    if (btn) {
                        btn.innerHTML = origText;
                        btn.disabled = false;
                    }
                    
                    if (form.id === 'quoteForm') {
                        showToast('Quote inquiry submitted! Our sales engineering team will email you shortly.');
                    } else if (form.classList.contains('newsletter-form')) {
                        showToast('Thank you for subscribing to BSKL industrial insights!');
                    } else {
                        showToast('Thank you for contacting us. We will reply within 24 hours.');
                    }
                    form.reset();
                    if (quantityInput) calculateEstimate(); // reset calculator
                }, 1500);
            });
        });
    }
});

// Spin animation rule for loader icon
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);
