document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Media Configuration with real YouTube links
    const mediaConfig = {
        featured: [
            {
                id: 1,
                title: "Puja Khedkar Case: Retired IAS Officer Bhatia Questions Modi Government's Inaction",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube.com/embed/mmL25rFmzc0",
                alt: "Arun Bhatia discussing Puja Khedkar case and government inaction"
            },
            {
                id: 2,
                title: "'IAS Is One Of The Most Corrupt Organizations In India' : Arun Bhatia, Former IAS Officer",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/dA6nFK2p41k",
                alt: "Arun Bhatia discussing corruption in IAS"
            },
            {
                id: 3,
                title: "Arun Bhatia On Pooja Khedkar | पूजा खेडकरांना अटक करा माजी सनदी अधिकारी अरुण भाटियांची मागणी",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/BtrZa7qV8TI",
                alt: "Arun Bhatia demanding arrest of Pooja Khedkar"
            }
        ],
        english: [
            {
                id: 4,
                title: "IAS Pooja Khedkar वर अद्याप गुन्हा का नाही? माजी सनदी अधिकारी IAS Arun Bhatia यांची रोखठोक मुलाखत",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/hNo1C9Zgx9k",
                alt: "Arun Bhatia's hard-hitting interview on IAS Pooja Khedkar case"
            },
            {
                id: 5,
                title: "Arun Bhatia Exclusive | सेवेतील सनदी अधिकारी भ्रष्ट, माजी सनदी अधिकारी अरुण भाटिया NDTV मराठीवर",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/sX__lVQbQGY",
                alt: "Arun Bhatia exclusive interview on NDTV Marathi"
            },
            {
                id: 6,
                title: "Pudhari News | पुणे पोलिस आयुक्त अमितेश कुमारांची बदली करा - अरुण भाटिया",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/NAyLIsqC7cc",
                alt: "Arun Bhatia demanding transfer of Pune Police Commissioner"
            },
            {
                id: 7,
                title: "Arun Bhatia Interview : देशात भ्रष्टाचार एक धंदा, Ex IAS अधिकारी अरुण भाटीया यांची स्फोटक मुलाखत",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/N2yBjcrcO70",
                alt: "Arun Bhatia's explosive interview on corruption as a business"
            },
            {
                id: 8,
                title: "The Newshour Debate: Honesty Punished - Part 1",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mmh__OwDEDg",
                alt: "The Newshour Debate: Honesty Punished - Part 1"
            },
            {
                id: 9,
                title: "The Newshour Debate: Honesty Punished - Part 2",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bCG-ehU6jt4",
                alt: "The Newshour Debate: Honesty Punished - Part 2"
            },
            {
                id: 10,
                title: "The Newshour Debate: Honesty Punished - Part 3",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/3Mdvp88hzp8",
                alt: "The Newshour Debate: Honesty Punished - Part 3"
            },
            {
                id: 11,
                title: "The Newshour Debate: Honesty Punished - Part 4",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/7ppGjJnwQgU",
                alt: "The Newshour Debate: Honesty Punished - Part 4"
            },
            {
                id: 12,
                title: "The Newshour Debate: Honesty Punished - Full Debate",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/O2y_r8Cs6u4",
                alt: "The Newshour Debate: Honesty Punished - Full Debate"
            }
        ],
        hindi: [
            {
                id: 13,
                title: "The Newshour Debate: Who wanted big bunglows? - Part 1 (4th Feb 2014)",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/BnYbx2YkTrM",
                alt: "The Newshour Debate: Who wanted big bunglows? - Part 1"
            },
            {
                id: 14,
                title: "The Newshour Debate: Who wanted big bunglows? - Part 2 (4th Feb 2014)",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/hUsAk6swjUc",
                alt: "The Newshour Debate: Who wanted big bunglows? - Part 2"
            },
            {
                id: 15,
                title: "The Newshour Debate: Who wanted big bunglows? - Full Debate (4th Feb 2014)",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/tSDJFI8kbtU",
                alt: "The Newshour Debate: Who wanted big bunglows? - Full Debate"
            },
            {
                id: 16,
                title: "The Newshour Debate: Anna Hazare vs AAP - Full Debate (13th Dec 2013)",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/YGYJVaFbKO4",
                alt: "The Newshour Debate: Anna Hazare vs AAP - Full Debate"
            },
            {
                id: 17,
                title: "The Newshour Debate: Vocal Minister loses voice - Part 1 (22nd Jan 2014)",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bhhYCk-5YLw",
                alt: "The Newshour Debate: Vocal Minister loses voice - Part 1"
            },
            {
                id: 18,
                title: "The Newshour Debate: Vocal Minister loses voice - Part 2 (22nd Jan 2014)",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/jzvE-f8p4Uc",
                alt: "The Newshour Debate: Vocal Minister loses voice - Part 2"
            }
        ],
        marathi: [
            {
                id: 19,
                title: "The Newshour Debate: Vocal Minister loses voice - Part 3 (22nd Jan 2014)",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/_fDm0ETkbNU",
                alt: "The Newshour Debate: Vocal Minister loses voice - Part 3"
            },
            {
                id: 20,
                title: "The Newshour Debate: Vocal Minister loses voice - Part 4 (22nd Jan 2014)",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mmL25rFmzc0",
                alt: "The Newshour Debate: Vocal Minister loses voice - Part 4"
            },
            {
                id: 21,
                title: "The Newshour Debate: Vocal Minister loses voice - Full Debate (22nd Jan 2014)",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/HseKCWGvrVI",
                alt: "The Newshour Debate: Vocal Minister loses voice - Full Debate"
            },
            {
                id: 22,
                title: "Arun Bhatia on Anna Hazare's Campaign Against Corruption",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/sh8OJo_OmFQ",
                alt: "Arun Bhatia on Anna Hazare's Campaign Against Corruption"
            },
            {
                id: 23,
                title: "Arun Bhatia Final",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/tdISQDd3fCg",
                alt: "Arun Bhatia Final"
            },
            {
                id: 24,
                title: "Arun Bhatia, Independent || Pune, Maharashtra",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/uPH7PDvczQc",
                alt: "Arun Bhatia, Independent || Pune, Maharashtra"
            }
        ],
        interviews: [
            {
                id: 25,
                title: "Pune Arun Bhatia To Fight Election",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/RSAat1SjRg4",
                alt: "Pune Arun Bhatia To Fight Election"
            },
            {
                id: 26,
                title: "Pune : Arun Bhatia to contest Lok Sabha elections",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/gMEJscBWm0Y",
                alt: "Pune : Arun Bhatia to contest Lok Sabha elections"
            },
            {
                id: 27,
                title: "Debate: Anna hardens stand, will Govt relent? - 4",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/O6IopL2sv9U",
                alt: "Debate: Anna hardens stand, will Govt relent? - 4"
            },
            {
                id: 28,
                title: "AAP Voices of Dissent Ex IAS officer Arun Bhatia",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bSr58uGqP04",
                alt: "AAP Voices of Dissent Ex IAS officer Arun Bhatia"
            },
            {
                id: 29,
                title: "Arun Bhatia promises to eradicate corruption from Pune city in 60 days!",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/OMMZX91dqEA",
                alt: "Arun Bhatia promises to eradicate corruption from Pune city in 60 days!"
            },
            {
                id: 30,
                title: "Arun Bhatia's achievements for pune during his stint in various positions in Pune.",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/p_iv5q-vzJs",
                alt: "Arun Bhatia's achievements for pune during his stint in various positions in Pune."
            }
        ],
        debates: [
            {
                id: 31,
                title: "Google Hangout with Arun Bhatia",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/2kRmkBz5GlA",
                alt: "Google Hangout with Arun Bhatia"
            },
            {
                id: 32,
                title: "The Newshour Debate: 22 departments, Zero answers - Part 2 (7th Feb 2014)",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/IQJIoeRevAU",
                alt: "The Newshour Debate: 22 departments, Zero answers - Part 2"
            },
            {
                id: 33,
                title: "Arun Bhatia Answers the ACB Cases",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/EQ74jfzGSnI",
                alt: "Arun Bhatia Answers the ACB Cases"
            },
            {
                id: 34,
                title: "Arun Bhatia Answers - What can One Arun Bhatia do for Pune?!",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/xKanXqRbKNw",
                alt: "Arun Bhatia Answers - What can One Arun Bhatia do for Pune?!"
            },
            {
                id: 35,
                title: "Arun Bhatia Speaks - Transparency to the Hilt",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/xPJDO55hcKY",
                alt: "Arun Bhatia Speaks - Transparency to the Hilt"
            },
            {
                id: 36,
                title: "The Newshour Debate: Controversy over AAP funding - Part 1",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/28YiMCsfeMo",
                alt: "The Newshour Debate: Controversy over AAP funding - Part 1"
            }
        ],
        speeches: [
            {
                id: 37,
                title: "Former IAS officer Arun Bhatia elaborates How to Prosecute Bureaucrats despite Section 197",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/PsS1RZAoQ7Y",
                alt: "Former IAS officer Arun Bhatia elaborates How to Prosecute Bureaucrats despite Section 197"
            },
            {
                id: 38,
                title: "Arun Bhatia on How to Prevent Abuse of Power by Bureaucrats part 1 of 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/9fvRZZN8vGo",
                alt: "Arun Bhatia on How to Prevent Abuse of Power by Bureaucrats part 1 of 2"
            },
            {
                id: 39,
                title: "Arun Bhatia speaks on Democracy",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mQvG-4b2nhk",
                alt: "Arun Bhatia speaks on Democracy"
            },
            {
                id: 40,
                title: "Why vote for Arun Bhatia",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/EhHVN8Z1hv8",
                alt: "Why vote for Arun Bhatia"
            }
        ]
    };

    // Function to create media card HTML with embedded YouTube video
    function createMediaCard(video) {
        return `
            <div class="col-lg-4 mb-4">
                <article class="media-card" data-video-id="${video.id}">
                    <div class="video-container">
                        <iframe 
                            src="${video.youtubeUrl}" 
                            title="${video.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            loading="lazy"
                            width="100%"
                            height="200">
                        </iframe>
                    </div>
                    <div class="media-info">
                        <h${video.id <= 3 ? '4' : '3'}>${video.title}</h${video.id <= 3 ? '4' : '3'}>
                    </div>
                </article>
            </div>
        `;
    }

    // Function to render media sections
    function renderMediaSections() {
        // Render featured media (home page)
        const featuredContainer = document.querySelector('.media-section .row');
        if (featuredContainer) {
            featuredContainer.innerHTML = mediaConfig.featured.map(createMediaCard).join('');
        }

        // Render English section
        const englishContainer = document.querySelector('#english-section .row');
        if (englishContainer) {
            englishContainer.innerHTML = mediaConfig.english.map(createMediaCard).join('');
        }

        // Render Hindi section
        const hindiContainer = document.querySelector('#hindi-section .row');
        if (hindiContainer) {
            hindiContainer.innerHTML = mediaConfig.hindi.map(createMediaCard).join('');
        }

        // Render Marathi section
        const marathiContainer = document.querySelector('#marathi-section .row');
        if (marathiContainer) {
            marathiContainer.innerHTML = mediaConfig.marathi.map(createMediaCard).join('');
        }

        // Render Interviews section
        const interviewsContainer = document.querySelector('#interviews-section .row');
        if (interviewsContainer) {
            interviewsContainer.innerHTML = mediaConfig.interviews.map(createMediaCard).join('');
        }

        // Render Debates section
        const debatesContainer = document.querySelector('#debates-section .row');
        if (debatesContainer) {
            debatesContainer.innerHTML = mediaConfig.debates.map(createMediaCard).join('');
        }

        // Render Speeches section
        const speechesContainer = document.querySelector('#speeches-section .row');
        if (speechesContainer) {
            speechesContainer.innerHTML = mediaConfig.speeches.map(createMediaCard).join('');
        }
    }

    // Function to get YouTube URL by video ID
    function getYouTubeUrl(videoId) {
        const allVideos = [
            ...mediaConfig.featured,
            ...mediaConfig.english,
            ...mediaConfig.hindi,
            ...mediaConfig.marathi,
            ...mediaConfig.interviews,
            ...mediaConfig.debates,
            ...mediaConfig.speeches
        ];
        const video = allVideos.find(v => v.id == videoId);
        return video ? video.youtubeUrl : null;
    }

    // Public API functions for managing media
    window.MediaManager = {
        // Add a new video to a specific section
        addVideo: function(section, video) {
            if (!mediaConfig[section]) {
                console.error(`Section "${section}" does not exist. Available sections: featured, english, hindi, marathi, interviews, debates, speeches`);
                return false;
            }

            // Auto-generate ID if not provided
            if (!video.id) {
                const allVideos = [
                    ...mediaConfig.featured,
                    ...mediaConfig.english,
                    ...mediaConfig.hindi,
                    ...mediaConfig.marathi,
                    ...mediaConfig.interviews,
                    ...mediaConfig.debates,
                    ...mediaConfig.speeches
                ];
                video.id = Math.max(...allVideos.map(v => v.id)) + 1;
            }

            // Add default values if not provided
            video.alt = video.alt || video.title;
            video.thumbnail = video.thumbnail || '/placeholder.svg?height=200&width=300';

            mediaConfig[section].push(video);
            renderMediaSections();
            attachEventListeners(); // Re-attach event listeners
            return true;
        },

        // Remove a video by ID
        removeVideo: function(videoId) {
            let removed = false;
            Object.keys(mediaConfig).forEach(section => {
                const index = mediaConfig[section].findIndex(v => v.id == videoId);
                if (index !== -1) {
                    mediaConfig[section].splice(index, 1);
                    removed = true;
                }
            });
            
            if (removed) {
                renderMediaSections();
                attachEventListeners();
            }
            return removed;
        },

        // Update a video by ID
        updateVideo: function(videoId, updates) {
            let updated = false;
            Object.keys(mediaConfig).forEach(section => {
                const video = mediaConfig[section].find(v => v.id == videoId);
                if (video) {
                    Object.assign(video, updates);
                    updated = true;
                }
            });
            
            if (updated) {
                renderMediaSections();
                attachEventListeners();
            }
            return updated;
        },

        // Get all videos from a section
        getVideos: function(section) {
            return mediaConfig[section] || [];
        },

        // Get a specific video by ID
        getVideo: function(videoId) {
            const allVideos = [
                ...mediaConfig.featured,
                ...mediaConfig.english,
                ...mediaConfig.hindi,
                ...mediaConfig.marathi,
                ...mediaConfig.interviews,
                ...mediaConfig.debates,
                ...mediaConfig.speeches
            ];
            return allVideos.find(v => v.id == videoId);
        },

        // Clear all videos from a section
        clearSection: function(section) {
            if (mediaConfig[section]) {
                mediaConfig[section] = [];
                renderMediaSections();
                attachEventListeners();
                return true;
            }
            return false;
        },

        // Get current media configuration
        getConfig: function() {
            return JSON.parse(JSON.stringify(mediaConfig)); // Return deep copy
        },

        // Load media configuration from JSON
        loadConfig: function(newConfig) {
            Object.assign(mediaConfig, newConfig);
            renderMediaSections();
            attachEventListeners();
        }
    };

    // Navigation functionality
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const knowMoreBtn = document.getElementById('knowMoreBtn');
    const languageScrollBtns = document.querySelectorAll('.language-scroll-btn');
    const currentPageBreadcrumb = document.getElementById('current-page');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // Update breadcrumb
    function updateBreadcrumb(sectionName) {
        if (currentPageBreadcrumb) {
            const sectionNames = {
                'home': 'Home',
                'about': 'Know Me',
                'blog': 'Book',
                'media': 'Media'
            };
            currentPageBreadcrumb.textContent = sectionNames[sectionName] || sectionName;
        }
    }

    // Function to switch to a section
    function switchToSection(targetSection) {
        // Remove active class from all nav links and sections
        navLinks.forEach(l => {
            l.classList.remove('active');
            l.removeAttribute('aria-current');
        });
        contentSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to target nav link
        const targetNavLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add('active');
            targetNavLink.setAttribute('aria-current', 'page');
        }
        
        // Show target section
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.classList.add('active');
            updateBreadcrumb(targetSection);
            
            // Update page title for SEO
            const sectionTitles = {
                'home': 'Arun Bhatia - Ex-IAS Officer',
                'about': 'Know Me - Arun Bhatia',
                'blog': 'Book - Fight Against Corruption',
                'media': 'Media Coverage | Arun Bhatia Interviews and Videos'
            };
            document.title = sectionTitles[targetSection] || document.title;
        }
        
        // Close sidebar on mobile after selection
        if (window.innerWidth < 992) {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to attach event listeners to media cards
    function attachEventListeners() {
        // Handle embedded video interactions
        const mediaCards = document.querySelectorAll('.media-card[data-video-id]');
        mediaCards.forEach(card => {
            // Remove existing event listeners by cloning the element
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            // Add keyboard support for accessibility
            newCard.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Focus on the iframe for keyboard navigation
                    const iframe = this.querySelector('iframe');
                    if (iframe) {
                        iframe.focus();
                    }
                }
            });
            
            // Make cards focusable for keyboard navigation
            newCard.setAttribute('tabindex', '0');
            newCard.setAttribute('role', 'article');
        });

        // Re-apply scroll animations to new cards
        const allMediaCards = document.querySelectorAll('.media-card');
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

        // Observe media cards for scroll animations
        allMediaCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    // Enhance contact navigation: always switch to Home and scroll to Contact section
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetSection = this.getAttribute('data-section');
            if (targetSection === 'contact') {
                e.preventDefault();
                // Always switch to Home section first
                switchToSection('home');
                // Then scroll to the contact section after Home is visible
                setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 350);
                // Optionally close sidebar on mobile
                if (window.innerWidth < 992) {
                    sidebar.classList.remove('show');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
                return;
            }
            e.preventDefault();
            switchToSection(targetSection);
        });
    });

    // Handle "Know More About Me" button click
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                // Switch to About section
                switchToSection('about');
            }, 150);
        });
    }

    // Handle Learn More button clicks
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-target');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                switchToSection(targetSection);
            }, 150);
        });
    });

    // Handle language scroll buttons
    languageScrollBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSectionId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                // First ensure we're in the media section
                switchToSection('media');
                
                // Wait for section switch animation, then scroll to language section
                setTimeout(() => {
                    const offsetTop = targetSection.offsetTop - 100; // Account for fixed elements
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active button state
                    languageScrollBtns.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                }, 300);
            }
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Mobile toggle functionality
    mobileToggle.addEventListener('click', function() {
        const isExpanded = sidebar.classList.contains('show');
        sidebar.classList.toggle('show');
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target) && (!sidebarOverlay || !sidebarOverlay.contains(e.target))) {
                sidebar.classList.remove('show');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    // Close sidebar when clicking the overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Add hover effects to profile image
    const profileImage = document.querySelector('.profile-image-container');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Add parallax effect to hero section
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Handle URL hash on page load
    function handleHashOnLoad() {
        const hash = window.location.hash;
        if (hash) {
            if (hash.startsWith('#media-')) {
                const sectionId = hash.replace('#media-', '');
                const targetSection = document.getElementById(`${sectionId}-section`);
                if (targetSection) {
                    // Show media section first
                    switchToSection('media');
                    
                    // Then scroll to the specific language section
                    setTimeout(() => {
                        const offsetTop = targetSection.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            } else {
                const sectionId = hash.replace('#', '');
                switchToSection(sectionId);
            }
        }
    }

    // SEO and Performance optimizations
    
    // Lazy load images that are not immediately visible
    function setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src; // Trigger loading
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // Add structured data for current page
    function updateStructuredData(section) {
        const existingScript = document.querySelector('script[data-dynamic-ld]');
        if (existingScript) {
            existingScript.remove();
        }

        let structuredData = {};
        
        switch(section) {
            case 'about':
                structuredData = {
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Person",
                        "name": "Arun Bhatia",
                        "jobTitle": "Former IAS Officer",
                        "description": "Ex-IAS officer with three decades of experience fighting corruption in Indian bureaucracy"
                    }
                };
                break;
            case 'blog':
                structuredData = {
                    "@context": "https://schema.org",
                    "@type": "Book",
                    "name": "Fight Against Corruption: An IAS Officer's Journey",
                    "author": {
                        "@type": "Person",
                        "name": "Arun Bhatia"
                    }
                };
                break;
            case 'media':
                structuredData = {
                    "@context": "https://schema.org",
                    "@type": "VideoGallery",
                    "name": "Arun Bhatia Media Coverage",
                    "description": "Collection of interviews and media coverage of former IAS officer Arun Bhatia"
                };
                break;
        }

        if (Object.keys(structuredData).length > 0) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-dynamic-ld', 'true');
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }
    }

    // Update structured data when section changes
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            updateStructuredData(section);
        });
    });

    // Initialize the page
    renderMediaSections();
    attachEventListeners();
    setupLazyLoading();
    handleHashOnLoad();

    // Initialize page
    console.log(` _____                 
|  _  |___ ___ ___ _ _ 
|     |  _|   | .'| | |
|__|__|_| |_|_|__,|\_/                                                           
 https://rnv.is-a.dev`);
    
    // Track page performance
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }

    // Back to Top Button logic
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
