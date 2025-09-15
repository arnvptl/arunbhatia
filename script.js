document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Media Configuration with real YouTube links and tags
    const mediaConfig = {
        featured: [
            {
                id: 1,
                title: "The Journey of Life",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/hNo1C9Zgx9k",
                alt: "Arun Bhatia featured video 1",
                language: "english",
                contentType: "speech"
            },
            {
                id: 2,
                title: "Aurangzeb Anger Ignites Nagpur Nightmare; CM Devendra Fadnavis Blames Film 'Chhaava' For Conflict?",
                thumbnail: "i/arun3.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/gM6NK_qOFFs?start=1778",
                alt: "Arun Bhatia featured video 2",
                language: "english",
                contentType: "debate"
            },
            {
                id: 3,
                title: "Arun Bhatia Exclusive",
                thumbnail: "i/arunclose-up.jpeg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/sX__lVQbQGY",
                alt: "Arun Bhatia featured video 3",
                language: "english",
                contentType: "interview"
            },
            {
                id: 4,
                title: "Arun Bhatia's achievements for pune during his stint in various positions in Pune.",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/p_iv5q-vzJs",
                alt: "Arun Bhatia featured video 4",
                language: "english",
                contentType: "interview"
            },
            {
                id: 5,
                title: "Arun Bhatia promises to eradicate corruption from Pune city in 60 days!",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/OMMZX91dqEA",
                alt: "Arun Bhatia featured video 5",
                language: "english",
                contentType: "speech"
            },
            {
                id: 6,
                title: "Arun Bhatia speaks on Democracy",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mQvG-4b2nhk",
                alt: "Arun Bhatia featured video 6",
                language: "english",
                contentType: "speech"
            },
            {
                id: 7,
                title: "The Newshour Debate: Honesty Punished - Full Debate",
                thumbnail: "i/arun_sitting.jpg",
                youtubeUrl: "https://www.youtube.com/embed/O2y_r8Cs6u4?start=595",
                alt: "Arun Bhatia featured video 7",
                language: "english",
                contentType: "debate"
            },
            {
                id: 8,
                title: "Arun Bhatia, Independent || Pune, Maharashtra",
                thumbnail: "i/arun.jpg",
                youtubeUrl: "https://www.youtube.com/embed/uPH7PDvczQc",
                alt: "Arun Bhatia featured video 8",
                language: "english",
                contentType: "interview"
            },
            {
                id: 9,
                title: "Pudhari News | पुणे पोलिस आयुक्त अमितेश कुमारांची बदली करा - अरुण भाटिया",
                thumbnail: "i/arun.jpg",
                youtubeUrl: "https://www.youtube.com/embed/NAyLIsqC7cc",
                alt: "Arun Bhatia featured video 8",
                language: "marathi",
                contentType: "interview"
            }
        ],
        allVideos: [
            // English Videos
            {
                id: 10,
                title: "English Media Coverage 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/hNo1C9Zgx9k",
                alt: "English media coverage 1",
                language: "english",
                contentType: "interview"
            },
            {
                id: 11,
                title: "English Media Coverage 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/sX__lVQbQGY",
                alt: "English media coverage 2",
                language: "english",
                contentType: "debate"
            },
            {
                id: 12,
                title: "English Media Coverage 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/NAyLIsqC7cc",
                alt: "English media coverage 3",
                language: "english",
                contentType: "speech"
            },
            {
                id: 13,
                title: "English Media Coverage 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/N2yBjcrcO70",
                alt: "English media coverage 4",
                language: "english",
                contentType: "interview"
            },
            {
                id: 14,
                title: "English Media Coverage 5",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mmh__OwDEDg",
                alt: "English media coverage 5",
                language: "english",
                contentType: "debate"
            },
            {
                id: 15,
                title: "English Media Coverage 6",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bCG-ehU6jt4",
                alt: "English media coverage 6",
                language: "english",
                contentType: "speech"
            },
            {
                id: 16,
                title: "English Media Coverage 7",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/3Mdvp88hzp8",
                alt: "English media coverage 7",
                language: "english",
                contentType: "interview"
            },
            {
                id: 17,
                title: "English Media Coverage 8",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/7ppGjJnwQgU",
                alt: "English media coverage 8",
                language: "english",
                contentType: "debate"
            },
            {
                id: 18,
                title: "English Media Coverage 9",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/O2y_r8Cs6u4",
                alt: "English media coverage 9",
                language: "english",
                contentType: "debate"
            },
            // Hindi Videos
            {
                id: 19,
                title: "हिंदी मीडिया कवरेज 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/BnYbx2YkTrM",
                alt: "Hindi media coverage 1",
                language: "hindi",
                contentType: "interview"
            },
            {
                id: 20,
                title: "हिंदी मीडिया कवरेज 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/hUsAk6swjUc",
                alt: "Hindi media coverage 2",
                language: "hindi",
                contentType: "debate"
            },
            {
                id: 21,
                title: "हिंदी मीडिया कवरेज 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/tSDJFI8kbtU",
                alt: "Hindi media coverage 3",
                language: "hindi",
                contentType: "speech"
            },
            {
                id: 22,
                title: "हिंदी मीडिया कवरेज 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/YGYJVaFbKO4",
                alt: "Hindi media coverage 4",
                language: "hindi",
                contentType: "interview"
            },
            {
                id: 23,
                title: "हिंदी मीडिया कवरेज 5",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bhhYCk-5YLw",
                alt: "Hindi media coverage 5",
                language: "hindi",
                contentType: "debate"
            },
            {
                id: 24,
                title: "हिंदी मीडिया कवरेज 6",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/jzvE-f8p4Uc",
                alt: "Hindi media coverage 6",
                language: "hindi",
                contentType: "speech"
            },
            // Marathi Videos
            {
                id: 25,
                title: "मराठी मीडिया कव्हरेज 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/_fDm0ETkbNU",
                alt: "Marathi media coverage 1",
                language: "marathi",
                contentType: "interview"
            },
            {
                id: 26,
                title: "मराठी मीडिया कव्हरेज 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mmL25rFmzc0",
                alt: "Marathi media coverage 2",
                language: "marathi",
                contentType: "debate"
            },
            {
                id: 27,
                title: "मराठी मीडिया कव्हरेज 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/HseKCWGvrVI",
                alt: "Marathi media coverage 3",
                language: "marathi",
                contentType: "speech"
            },
            {
                id: 28,
                title: "मराठी मीडिया कव्हरेज 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/sh8OJo_OmFQ",
                alt: "Marathi media coverage 4",
                language: "marathi",
                contentType: "interview"
            },
            {
                id: 29,
                title: "मराठी मीडिया कव्हरेज 5",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/tdISQDd3fCg",
                alt: "Marathi media coverage 5",
                language: "marathi",
                contentType: "debate"
            },
            {
                id: 30,
                title: "मराठी मीडिया कव्हरेज 6",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/uPH7PDvczQc",
                alt: "Marathi media coverage 6",
                language: "marathi",
                contentType: "speech"
            },
            // Additional Interviews
            {
                id: 31,
                title: "Interview 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/RSAat1SjRg4",
                alt: "Interview 1",
                language: "english",
                contentType: "interview"
            },
            {
                id: 32,
                title: "Interview 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/gMEJscBWm0Y",
                alt: "Interview 2",
                language: "english",
                contentType: "interview"
            },
            {
                id: 33,
                title: "Interview 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/O6IopL2sv9U",
                alt: "Interview 3",
                language: "english",
                contentType: "interview"
            },
            {
                id: 34,
                title: "Interview 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/bSr58uGqP04",
                alt: "Interview 4",
                language: "english",
                contentType: "interview"
            },
            {
                id: 35,
                title: "Interview 5",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/OMMZX91dqEA",
                alt: "Interview 5",
                language: "english",
                contentType: "interview"
            },
            {
                id: 36,
                title: "Interview 6",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/p_iv5q-vzJs",
                alt: "Interview 6",
                language: "english",
                contentType: "interview"
            },
            // Additional Debates
            {
                id: 37,
                title: "Debate 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/2kRmkBz5GlA",
                alt: "Debate 1",
                language: "english",
                contentType: "debate"
            },
            {
                id: 38,
                title: "Debate 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/IQJIoeRevAU",
                alt: "Debate 2",
                language: "english",
                contentType: "debate"
            },
            {
                id: 39,
                title: "Debate 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/xKanXqRbKNw",
                alt: "Debate 3",
                language: "english",
                contentType: "debate"
            },
            {
                id: 40,
                title: "Debate 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/xPJDO55hcKY",
                alt: "Debate 4",
                language: "english",
                contentType: "debate"
            },
            {
                id: 41,
                title: "Debate 5",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/28YiMCsfeMo",
                alt: "Debate 5",
                language: "english",
                contentType: "debate"
            },
            // Additional Speeches
            {
                id: 42,
                title: "Speech 1",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/PsS1RZAoQ7Y",
                alt: "Speech 1",
                language: "english",
                contentType: "speech"
            },
            {
                id: 43,
                title: "Speech 2",
                thumbnail: "i/arun2.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/9fvRZZN8vGo",
                alt: "Speech 2",
                language: "english",
                contentType: "speech"
            },
            {
                id: 44,
                title: "Speech 3",
                thumbnail: "i/arun-angry.webp",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/mQvG-4b2nhk",
                alt: "Speech 3",
                language: "english",
                contentType: "speech"
            },
            {
                id: 45,
                title: "Speech 4",
                thumbnail: "i/arun-detective.jpg",
                youtubeUrl: "https://www.youtube-nocookie.com/embed/EhHVN8Z1hv8",
                alt: "Speech 4",
                language: "english",
                contentType: "speech"
            }
        ]
    };

    // Current filter state
    let currentFilters = {
        language: 'all',
        contentType: 'all'
    };

    // Function to create media card HTML with embedded YouTube video and tags
    function createMediaCard(video) {
        const languageLabels = {
            'english': 'English',
            'hindi': 'हिंदी',
            'marathi': 'मराठी'
        };
        
        const contentTypeLabels = {
            'interview': 'Interview',
            'debate': 'Debate',
            'speech': 'Speech'
        };
        
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
                        <h4>${video.title}</h4>
                        <div class="video-tags">
                            <span class="tag language-tag">${languageLabels[video.language] || video.language}</span>
                            <span class="tag content-tag">${contentTypeLabels[video.contentType] || video.contentType}</span>
                        </div>
                    </div>
                </article>
            </div>
        `;
    }

    // Function to render unified media section with filtering
    function renderUnifiedMediaSection() {
        const mediaContainer = document.querySelector('#unified-media-section .row');
        if (mediaContainer) {
            // Show all videos by default
            const filteredVideos = getFilteredVideos();
            mediaContainer.innerHTML = filteredVideos.map(createMediaCard).join('');
        }
    }

    // Function to get filtered videos based on current filters
    function getFilteredVideos() {
        const selectedLanguage = currentFilters.language;
        const selectedContentType = currentFilters.contentType;
        
        let filtered = mediaConfig.allVideos;
        
        if (selectedLanguage && selectedLanguage !== 'all') {
            filtered = filtered.filter(v => v.language === selectedLanguage);
        }
        
        if (selectedContentType && selectedContentType !== 'all') {
            filtered = filtered.filter(v => v.contentType === selectedContentType);
        }
        
        return filtered;
    }

    // Function to update filters and re-render
    function updateFilters(language = null, contentType = null) {
        if (language !== null) currentFilters.language = language;
        if (contentType !== null) currentFilters.contentType = contentType;
        
        // Update active filter buttons
        updateFilterButtonStates();
        
        // Re-render the media section
        renderUnifiedMediaSection();
        
        // Update video count
        updateVideoCount();
    }

    // Function to update filter button states
    function updateFilterButtonStates() {
        // Update language filter buttons
        document.querySelectorAll('.language-filter-btn').forEach(btn => {
            const language = btn.dataset.language;
            if (language === currentFilters.language || (language === 'all' && currentFilters.language === 'all')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update content type filter buttons
        document.querySelectorAll('.content-filter-btn').forEach(btn => {
            const contentType = btn.dataset.contentType;
            if (contentType === currentFilters.contentType || (contentType === 'all' && currentFilters.contentType === 'all')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Function to update video count display
    function updateVideoCount() {
        const countElement = document.getElementById('video-count');
        if (countElement) {
            const filteredVideos = getFilteredVideos();
            countElement.textContent = `${filteredVideos.length} video${filteredVideos.length !== 1 ? 's' : ''} found`;
        }
    }

    // Function to render media sections (legacy - keeping for compatibility)
    function renderMediaSections() {
        // Render featured media (home page)
        const featuredContainer = document.querySelector('.media-section .row');
        if (featuredContainer) {
            featuredContainer.innerHTML = mediaConfig.featured.map(createMediaCard).join('');
        }

        // Render unified media section
        renderUnifiedMediaSection();
    }

    // Function to get YouTube URL by video ID
    function getYouTubeUrl(videoId) {
        const allVideos = [
            ...mediaConfig.featured,
            ...mediaConfig.allVideos
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
                    ...mediaConfig.allVideos
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
                ...mediaConfig.allVideos
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
    const mobileNavToggle = document.getElementById('mobileNavToggle');
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
                'media': 'Media',
                'harassment': 'Harassment'
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
                'media': 'Media Coverage | Arun Bhatia Interviews and Videos',
                'harassment': 'Harassment - Standing Up Against Corruption'
            };
            document.title = sectionTitles[targetSection] || document.title;
        }
        
        // Close sidebar on mobile after selection
        if (window.innerWidth < 992) {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
            if (mobileNavToggle) {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
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
                    if (mobileNavToggle) {
                        mobileNavToggle.setAttribute('aria-expanded', 'false');
                    }
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

    // Mobile navigation toggle functionality
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = sidebar.classList.contains('show');
            sidebar.classList.toggle('show');
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Filter button event listeners
    document.addEventListener('click', function(e) {
        // Language filter buttons
        if (e.target.closest('.language-filter-btn')) {
            const btn = e.target.closest('.language-filter-btn');
            const language = btn.dataset.language;
            updateFilters(language, null);
        }
        
        // Content type filter buttons
        if (e.target.closest('.content-filter-btn')) {
            const btn = e.target.closest('.content-filter-btn');
            const contentType = btn.dataset.contentType;
            updateFilters(null, contentType);
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target) && !mobileNavToggle.contains(e.target) && (!sidebarOverlay || !sidebarOverlay.contains(e.target))) {
                sidebar.classList.remove('show');
                mobileToggle.setAttribute('aria-expanded', 'false');
                if (mobileNavToggle) {
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
    // Close sidebar when clicking the overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
            if (mobileNavToggle) {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
            if (mobileNavToggle) {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
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
                                    // First ensure we're in the media1 section for language buttons
                const buttonText = this.textContent.trim();
                if (buttonText === 'English' || buttonText === 'हिंदी' || buttonText === 'मराठी') {
                    switchToSection('media1');
                } else {
                    // For interviews, debates, speeches, switch to media2
                    switchToSection('media2');
                }
                    
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
    function initializePage() {
        // Render media sections
        renderMediaSections();
        
        // Initialize video count
        updateVideoCount();
        
        // Initialize filter button states
        updateFilterButtonStates();
        
        // Attach event listeners
        attachEventListeners();
        
        // Setup lazy loading
        setupLazyLoading();
        
        // Handle hash on load
        handleHashOnLoad();
    }

    // Call initialization
    initializePage();

console.log("%cArnav","color: #FF6B6B; font-size: 70px; font-weight: bold;");
    
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
