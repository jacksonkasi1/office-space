// Module: resourcesBlogs
export function renderResourcesContent(container) {
    container.innerHTML = `
        <!-- Compact Resources Header -->
        <div class="resources-header">
            <div class="resources-title-section">
                <h2>RESOURCE LIBRARY</h2>
                <div class="resources-search">
                    <input type="text" placeholder="Search documents, templates..." class="search-input">
                    <button class="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            
            <!-- Quick Categories -->
            <div class="quick-categories">
                <div class="category-pill documents">
                    <i class="fas fa-file-alt"></i>
                    <span>Documents</span>
                    <span class="category-count">45</span>
                </div>
                <div class="category-pill templates">
                    <i class="fas fa-file-powerpoint"></i>
                    <span>Templates</span>
                    <span class="category-count">28</span>
                </div>
                <div class="category-pill forms">
                    <i class="fas fa-wpforms"></i>
                    <span>Forms</span>
                    <span class="category-count">33</span>
                </div>
                <div class="category-pill policies">
                    <i class="fas fa-shield-alt"></i>
                    <span>Policies</span>
                    <span class="category-count">19</span>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="resources-main-layout">
            <!-- Left Side: Featured & Popular -->
            <div class="resources-left">
                <!-- Featured Resources Compact -->
                <div class="featured-compact">
                    <div class="section-title">
                        <h3>Featured Resources</h3>
                        <span class="resource-badge-new">3 NEW</span>
                    </div>
                    
                    <div class="featured-grid">
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="resource-badge">NEW</div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">DOCUMENT</span>
                                <h4>Project Management Guide</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="resource-size">2.1 MB</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc template">
                                    <i class="fas fa-file-powerpoint"></i>
                                </div>
                                <div class="resource-badge popular">HOT</div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">TEMPLATE</span>
                                <h4>Presentation Templates</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <span class="resource-size">15.3 MB</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc guide">
                                    <i class="fas fa-book"></i>
                                </div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">HANDBOOK</span>
                                <h4>Employee Handbook</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="resource-size">5.8 MB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Popular Downloads -->
                <div class="popular-downloads">
                    <div class="section-title">
                        <h3>Popular Downloads</h3>
                        <button class="view-all-link">View All</button>
                    </div>
                    
                    <div class="download-list">
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-pdf"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Meeting Templates Pack</span>
                                <span class="download-stats">2.5 MB • 1.2k downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-excel"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Budget Tracker Template</span>
                                <span class="download-stats">1.2 MB • 856 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-word"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Report Template</span>
                                <span class="download-stats">0.8 MB • 743 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-powerpoint"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Onboarding Presentation</span>
                                <span class="download-stats">15.3 MB • 622 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Company Policy Guide</span>
                                <span class="download-stats">3.1 MB • 445 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-code"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Development Guidelines</span>
                                <span class="download-stats">2.7 MB • 388 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side: Categories & Recent -->
            <div class="resources-right">
                <!-- Category Showcase -->
                <div class="category-showcase-compact">
                    <div class="section-title">
                        <h3>Browse Categories</h3>
                    </div>
                    
                    <div class="category-cards-grid">
                        <div class="category-card-small policy">
                            <div class="category-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Policies & Procedures</span>
                                <span class="category-count">45 documents</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small training">
                            <div class="category-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Training Materials</span>
                                <span class="category-count">28 resources</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small guidelines">
                            <div class="category-icon">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Guidelines & SOPs</span>
                                <span class="category-count">33 guides</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small templates">
                            <div class="category-icon">
                                <i class="fas fa-file-powerpoint"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Templates & Forms</span>
                                <span class="category-count">56 files</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small reports">
                            <div class="category-icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Reports & Analytics</span>
                                <span class="category-count">22 reports</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small resources">
                            <div class="category-icon">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Learning Resources</span>
                                <span class="category-count">41 materials</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="recent-activity">
                    <div class="section-title">
                        <h3>Recent Activity</h3>
                        <span class="activity-indicator">Live</span>
                    </div>
                    
                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Sarah Johnson</strong> downloaded <em>Budget Template</em></span>
                                <span class="activity-time">2 minutes ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Mike Chen</strong> added new <em>Training Material</em></span>
                                <span class="activity-time">15 minutes ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Emma Davis</strong> updated <em>Policy Document</em></span>
                                <span class="activity-time">1 hour ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Alex Kim</strong> shared <em>Presentation Template</em></span>
                                <span class="activity-time">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="quick-stats">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-download"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">2,847</span>
                            <span class="stat-label">Total Downloads</span>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-file"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">225</span>
                            <span class="stat-label">Available Files</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


export function renderBlogsContent(container) {
    container.innerHTML = `
        <!-- Blogs Hero Section -->
        <div class="blogs-hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>Craft narratives <span class="highlight">that ignite</span> <span class="highlight-blue">inspiration</span>, <span class="highlight-green">knowledge</span>, and <span class="highlight-orange">entertainment</span></h2>
                </div>
                <div class="hero-image">
                    <div class="hero-image-container">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=240&fit=crop&crop=center" alt="Team meeting and project management" class="hero-img">
                        <div class="hero-badge">FEATURED</div>
                    </div>
                    <div class="hero-article-info">
                        <div class="author-info">
                            <div class="author-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <span class="author-name">Jackson • 8 min read</span>
                        </div>
                        <h3>Essential Project Management Strategies for Modern Teams</h3>
                        <p>Discover proven methodologies and frameworks that successful organizations use to deliver projects on time and within budget...</p>
                        <div class="article-meta">
                            <span class="category">Business</span>
                            <span class="read-time">8 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest News Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Latest News</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            <div class="blogs-grid">
                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=160&fit=crop&crop=center" alt="Software development" class="blog-img">
                        <div class="blog-category">Technology</div>
                    </div>
                    <div class="blog-content">
                        <h4>Software Development Best Practices and Productivity Tips</h4>
                        <p>Learn essential development methodologies and tools that help teams deliver high-quality software efficiently...</p>
                        <div class="blog-meta">
                            <span class="blog-date">April 5 • 8 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=160&fit=crop&crop=center" alt="Team leadership" class="blog-img">
                        <div class="blog-category">Leadership</div>
                    </div>
                    <div class="blog-content">
                        <h4>Team Leadership Strategies for Competitive Success</h4>
                        <p>Explore effective leadership techniques and team management approaches that drive performance and results...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Leadership • 6 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=160&fit=crop&crop=center" alt="Business partnership" class="blog-img">
                        <div class="blog-category">Business</div>
                    </div>
                    <div class="blog-content">
                        <h4>Strategic Partnership Development: Building Strong Client Relationships</h4>
                        <p>Explore effective strategies for developing long-term partnerships that drive mutual growth and success...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Business • 5 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=160&fit=crop&crop=center" alt="Financial planning" class="blog-img">
                        <div class="blog-category">Finance</div>
                    </div>
                    <div class="blog-content">
                        <h4>Financial Planning Strategies for Growing Businesses</h4>
                        <p>Comprehensive guide to budgeting, forecasting, and investment strategies that help companies scale effectively...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Finance • 6 min read</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Must Read Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Must Read</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            <div class="must-read-grid">
                <article class="must-read-main">
                    <div class="blog-image-large">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=240&fit=crop&crop=center" alt="Strategic planning" class="blog-img-large">
                        <div class="blog-category">Strategy</div>
                    </div>
                    <div class="blog-content">
                        <h3>Strategic Planning: Building Competitive Advantage in Dynamic Markets</h3>
                        <p>Learn how successful companies develop and execute strategic initiatives that create sustainable competitive advantages in rapidly changing business environments...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Strategy • 5 min read</span>
                        </div>
                    </div>
                </article>

                <div class="must-read-sidebar">
                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=60&fit=crop&crop=center" alt="Women leadership" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Leadership</div>
                            <h4>Empowering Women Leaders: Breaking Barriers in Corporate Culture</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Leadership • 10 min read</span>
                            </div>
                        </div>
                    </article>

                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=60&fit=crop&crop=center" alt="Data analytics" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Data Science</div>
                            <h4>Data-Driven Decision Making: The Future of Business Intelligence</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Analytics • 7 min read</span>
                            </div>
                        </div>
                    </article>

                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=80&h=60&fit=crop&crop=center" alt="Innovation and creativity" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Innovation</div>
                            <h4>Innovation Management: Fostering Creative Solutions in the Workplace</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Innovation • 4 min read</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <!-- Editor's Pick Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Editor's Pick</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            
            <article class="editors-pick-main">
                <div class="blog-image-hero">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=320&fit=crop&crop=center" alt="Digital transformation" class="blog-img-hero">
                    <div class="blog-category">Technology</div>
                </div>
                <div class="blog-content">
                    <div class="author-info">
                        <div class="author-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <span class="author-name">Jackson • 12 min read</span>
                    </div>
                    <h2>Digital Transformation: Preparing Your Organization for the Future</h2>
                    <p>A comprehensive guide to implementing digital transformation strategies that modernize operations, enhance customer experience, and drive sustainable growth in today's competitive landscape.</p>
                </div>
            </article>

            <div class="editors-pick-grid">
                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=120&fit=crop&crop=center" alt="Remote work setup" class="blog-img">
                        <div class="blog-category remote">Remote Work</div>
                    </div>
                    <div class="blog-content">
                        <h4>Remote Work Best Practices: Building Effective Distributed Teams</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Workplace • 6 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=120&fit=crop&crop=center" alt="AI and technology" class="blog-img">
                        <div class="blog-category ai">AI & Automation</div>
                    </div>
                    <div class="blog-content">
                        <h4>AI in Recruitment: Transforming How Companies Find Top Talent</h4>
                        <div class="blog-meta">
                            <span class="blog-date">HR Technology • 8 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=120&fit=crop&crop=center" alt="Social media marketing" class="blog-img">
                        <div class="blog-category social">Social Media</div>
                    </div>
                    <div class="blog-content">
                        <h4>Social Media Strategy: Building Brand Authority in Digital Spaces</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Marketing • 5 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=120&fit=crop&crop=center" alt="Knowledge management" class="blog-img">
                        <div class="blog-category knowledge">Knowledge Management</div>
                    </div>
                    <div class="blog-content">
                        <h4>Building Organizational Knowledge: Documentation and Process Management</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Operations • 12 min read</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `;
}


