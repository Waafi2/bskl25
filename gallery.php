<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery | BSKL</title>
    <meta name="description" content="View images of BSKL's yarn spinning machinery, yarn dyeing facility, laboratory testing, and finished sweater products.">
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <!-- Header Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="./index.html" class="brand">BSKL<span>.</span></a>
            
            <button class="nav-toggle" aria-label="Toggle Navigation">
                <span class="material-symbols-outlined">menu</span>
            </button>
            
            <ul class="nav-menu">
                <li><a href="./index.html" class="nav-link">Home</a></li>
                <li><a href="./about.html" class="nav-link">About Us</a></li>
                <li><a href="./facilities.html" class="nav-link">Facilities</a></li>
                <li><a href="./sustainability.html" class="nav-link">Sustainability</a></li>
                <li><a href="./gallery.html" class="nav-link active">Gallery</a></li>
                <li><a href="./contact.html" class="nav-link">Contact Us</a></li>
            </ul>
            
            <a href="./contact.html#quoteForm" class="btn btn-primary navbar-btn">Request a Quote</a>
        </div>
    </nav>

    <!-- Main Content Area -->
    <main>
        
        <!-- Hero Header -->
        <section class="section section-dark text-center" style="background-image: linear-gradient(rgba(0, 15, 34, 0.85), rgba(0, 15, 34, 0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAIWaWOSZqfkzFEcOF-o7h2bd0H-FYkp8b0FroijbXU3XdJQeV3QKJOignyiOrupZGgZ7aCW7wA1wHbgBG99V59Qweeo6rftFaICK2DIQabgFKNm1Jym1NAbTsaH4USRCHY53EnUNvDdPGn4pPtDdnxKn4r2FyPjD39iXUXIob3kw56XG9w_nnZa8hmXgTBCUbICiP_To4nqWaeUS86AgstiMj1jyy9txNkN8VYM9zlrayQewe5ffQIOdd51P1oJeFOBf3eVjdvzD4'); background-size: cover; background-position: center; padding: 100px 0;">
            <div class="container animate-on-scroll">
                <span class="badge badge-cyan" style="margin-bottom: var(--stack-sm);">Visual Showcase</span>
                <h1 class="display-lg" style="color: var(--color-white); margin-bottom: var(--stack-sm);">Production Lines & Finished Garments</h1>
                <p class="body-lg" style="color: var(--color-on-primary-container); max-width: 600px; margin: 0 auto;">
                    A look inside our mills. Click any image to view details and machinery specifications in high resolution.
                </p>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="section">
            <div class="container">
                
                <!-- Category Filter Buttons -->
                <div class="gallery-filters animate-on-scroll">
                    <button class="filter-btn active" data-filter="all">All Photos</button>
                    <button class="filter-btn" data-filter="machinery">Machinery & Units</button>
                    <button class="filter-btn" data-filter="yarn">Yarns & Lab Dips</button>
                    <button class="filter-btn" data-filter="knitwear">Sweaters & Knitwear</button>
                </div>

                <!-- Gallery Grid -->
                <div class="gallery-grid animate-on-scroll">
                    
                    <!-- Item 1: Yarn -->
                    <div class="gallery-item" data-category="yarn">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL3aTHjw9TstSEYPFrYvxKOaZDKgMlcFxM2kHpOLvSZV0rl9ZgTuTs4kafk5dZHOq5pwY76JzLN1S-6lb2hazwUrkJSVX9lydiW8GtGPrO6XiJCBp7IjPWR1DQNWR5I6Vb-jejjScu-vXUUSMGse_P20usm9XvKkpX0woBJNMS6qH3OzhasZokNHmxdTbwDKUqdAHCSeGenxFIFCvVlykbamA-Bi_K2FKUGxeHfbBJeOCliGsyGOsPJmjyQsnCu9fVN42LqgW24yC8" alt="Deep blue yarn cones on racks">
                        <div class="gallery-overlay">
                            <h3>Vibrant Blue Yarn Cones</h3>
                            <p>Yarn & Dyestuffs</p>
                        </div>
                    </div>

                    <!-- Item 2: Machinery -->
                    <div class="gallery-item" data-category="machinery">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqmgdqQM20ToB56rEi4-QwQ-Fzr0B2ERfrlF4vnBcuyREBo0Vs1n1bYQfbKxbwFGAU3XoU8JPwCtuXfoArhXtbCRceS-CsF68v3khoHLF1XCUhg3vQ-nMPf7dbNKSaNprxkJ6l5RMtTJ0XhleFXBNUGXV4NcLtbWTi19BeyxiHiLlLpGBFaawh2dz8_3OHKMvUzxg7AdNcvgXnPP-Bmjwa8ab6RKI3-Zzawn086L7RBH_v_pmZ6zf3KtAhGflinqUw9aHuN6-BrB3T" alt="State of the art yarn dyeing floor">
                        <div class="gallery-overlay">
                            <h3>High-Pressure Vessel Floor</h3>
                            <p>Machinery</p>
                        </div>
                    </div>

                    <!-- Item 3: Machinery -->
                    <div class="gallery-item" data-category="machinery">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQUp-gS9tZzag68sPYwa2t_UQTaJ9c5nbw3VZ5VGMVmOs7seqW_hn-OU1iy-O1NrvEcjaqMHjYQ5x08EQjgHRK8pltNmL0uCyPo4N2v8sZv5n9BDBACuIGH066YPnVSkYpK89qeH3x3_iWSaPo7m84WaZJO03mnZ8Ozb5hzM53dfL7XBp4vauUQFl401kR82q-Tzy58wVVyqMSt2cvBwyglmzDf2Qy2dec9CTmarbNvKHHR0U8KmMmphfaERaQZBR26rbCogFWw6j" alt="Ring spinning frame cones running">
                        <div class="gallery-overlay">
                            <h3>Automatic Ring Spinning Frames</h3>
                            <p>Machinery</p>
                        </div>
                    </div>

                    <!-- Item 4: Yarn -->
                    <div class="gallery-item" data-category="yarn">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAIWaWOSZqfkzFEcOF-o7h2bd0H-FYkp8b0FroijbXU3XdJQeV3QKJOignyiOrupZGgZ7aCW7wA1wHbgBG99V59Qweeo6rftFaICK2DIQabgFKNm1Jym1NAbTsaH4USRCHY53EnUNvDdPGn4pPtDdnxKn4r2FyPjD39iXUXIob3kw56XG9w_nnZa8hmXgTBCUbICiP_To4nqWaeUS86AgstiMj1jyy9txNkN8VYM9zlrayQewe5ffQIOdd51P1oJeFOBf3eVjdvzD4" alt="Yarn cones on table showing rich colors">
                        <div class="gallery-overlay">
                            <h3>Graded Dyed Yarn Cones</h3>
                            <p>Yarn & Dyestuffs</p>
                        </div>
                    </div>

                    <!-- Item 5: Knitwear -->
                    <div class="gallery-item" data-category="knitwear">
                        <img src="./sweater_factory_floor.png" alt="Shima Seiki flat-knitting machines">
                        <div class="gallery-overlay">
                            <h3>Shima Seiki Automated Knitting</h3>
                            <p>Sweaters & Knitwear</p>
                        </div>
                    </div>

                    <!-- Item 6: Machinery -->
                    <div class="gallery-item" data-category="machinery">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXKCExOEC5pD-Zthhm-zfeJC_C20LqxuSlodd_bHCJpBqKHRThx3jyn904G0P6mLJ7r59_ihd61a3-Xwx30xSxP_vb9K7jAe2hQBcgZkFI6DXSyFpl27htzbe0EzRvMpLeXY6EKX_CVi66-7YnaPkbnFYs4MNtLE9zDJIWxN5iYSQEind-ZVjx8kP9LTOS2P4qWCxiYBo9JNHdWPZQlM6xAD1hfDYP8QN_DKMUeQh4KtzAk8faZOwftSxXacn1Kh5Pzy_9ll2A-TK8" alt="Pressurized dyeing tank steam">
                        <div class="gallery-overlay">
                            <h3>Pressurized Dyeing Tank Steam</h3>
                            <p>Machinery</p>
                        </div>
                    </div>

                    <!-- Item 7: Yarn -->
                    <div class="gallery-item" data-category="yarn">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-jmp5-BDYxTnP42euvr4v_OUe1j7bI1wFxh-1vG6p_iPPNVZup0J2NlGWb8FYJDp_N0UrurwpvAXOZRa1bfIkNtBczIDEt1p7RYvFYo7yiOOkUPgmJZLyaFA1AcFzsE5lK2HHb7P8bA6hTEkHoYzWGhTqXs4Z8acWmd6FcGNUkivcDgZ9y_nR7qUIC8FRtNUapegUcPy0mKhnLT0xcQOmTL6_B4s6K41DiA-tl_Zn3Im5mzBwAuBMTT3FKSoPpFVaBoSEfqubEWG6" alt="Technician measuring laboratory dyestuffs">
                        <div class="gallery-overlay">
                            <h3>Laboratory Dyes Preparation</h3>
                            <p>Yarn & Dyestuffs</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-top">
            <div class="footer-col">
                <a href="./index.html" class="footer-logo">BSKL<span>.</span></a>
                <p style="margin-bottom: 16px;">Bangladesh Spinners & Knitters LTD represents stability, precision, and sustainability in high-volume export apparel production.</p>
                <p style="font-size: 13px; color: var(--color-on-primary-container);">HQ: Dhaka, Bangladesh<br>Mills: Gazipur Industrial Area</p>
            </div>
            
            <div class="footer-col">
                <h4>Divisions</h4>
                <ul class="footer-links">
                    <li><a href="./facilities.html#spinning">Yarn Spinning</a></li>
                    <li><a href="./facilities.html#dyeing">Precision Dyeing</a></li>
                    <li><a href="./facilities.html#knitwear">Knitwear Knitting</a></li>
                    <li><a href="./facilities.html#laboratory">R&D Lab Testing</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Compliance</h4>
                <ul class="footer-links">
                    <li><a href="./sustainability.html">Water Treatment (ETP)</a></li>
                    <li><a href="./sustainability.html#energy">Solar Energy Projects</a></li>
                    <li><a href="./about.html#compliance">Certifications</a></li>
                    <li><a href="./sustainability.html#sourcing">Sustainable Materials</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Industrial Insights</h4>
                <p>Subscribe to receive quarterly briefs on textile engineering and material supply chain reports.</p>
                <form class="newsletter-form">
                    <input type="email" class="newsletter-input" placeholder="Work Email" required>
                    <button type="submit" class="btn btn-send" aria-label="Subscribe">
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 Bangladesh Spinners & Knitters LTD (BSKL). All Rights Reserved.</p>
        </div>
    </footer>

    <script src="./script.js"></script>
</body>
</html>
