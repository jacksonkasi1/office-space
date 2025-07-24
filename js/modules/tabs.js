// Module: tabs
export function initializeTabs() {
    if (!window.tabBtns) {
        window.tabBtns = document.querySelectorAll('.tab-btn');
    }
    
    window.tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            window.tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get tab content
            const tabName = this.getAttribute('data-tab');
            handleTabSwitch(tabName);
        });
    });
}


export function handleTabSwitch(tabName) {
    const dashboardContent = document.querySelector('.dashboard-content');
    
    switch(tabName) {
        case 'home':
            renderHomeContent(dashboardContent);
            break;
        case 'tasks':
            window.renderTasksContent(dashboardContent);
            break;
        case 'resources':
            window.renderResourcesContent(dashboardContent);
            break;
        case 'blogs':
            window.renderBlogsContent(dashboardContent);
            break;
        default:
            renderHomeContent(dashboardContent);
    }
}


export function renderHomeContent(container) {
    // Use the original content from navigation module instead of cached version
    if (window.originalContent && window.originalContent.dashboard) {
        container.innerHTML = window.originalContent.dashboard;
    } else {
        // Fallback: Save original content on first load if not already saved
        if (!window.originalHomeContent) {
            window.originalHomeContent = container.innerHTML;
        }
        container.innerHTML = window.originalHomeContent;
    }
    
    // Re-initialize components after content change
    setTimeout(() => {
        window.initializeCollapsibleSections();
        window.initializeSpotlightTabs();
        window.initializeCalendar();
        window.initializeProjectActions();
    }, 50);
}


export function renderDaisyAI(container) {
    container.innerHTML = `
        <!-- Daisy AI Main Layout -->
        <div class="daisy-ai-layout">
            <!-- Left Column: Chat Interface -->
            <div class="daisy-left-column">
                <!-- Chat Header -->
                <div class="daisy-chat-header">
                    <div class="daisy-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="daisy-info">
                        <h3>Daisy AI</h3>
                        <span class="daisy-status">Online • Ready to assist</span>
                    </div>
                    <div class="daisy-actions">
                        <button class="daisy-action-btn" title="Voice Chat">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="daisy-action-btn" title="Clear Chat">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>

                <!-- Chat Messages -->
                <div class="daisy-chat-container">
                    <div class="daisy-message daisy-bot">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <div class="message-bubble">
                                <p>Hello! I'm Daisy, your AI productivity assistant. I can help you with:</p>
                                <ul>
                                    <li>📝 Creating and managing tasks</li>
                                    <li>📅 Scheduling meetings and events</li>
                                    <li>📊 Analyzing project progress</li>
                                    <li>💡 Providing productivity insights</li>
                                    <li>🔍 Finding documents and resources</li>
                                </ul>
                                <p>How can I assist you today?</p>
                            </div>
                            <span class="message-time">Just now</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="daisy-quick-actions">
                    <button class="quick-action-card" onclick="window.handleDaisyQuickAction('schedule')">
                        <i class="fas fa-calendar-plus"></i>
                        <span>Schedule Meeting</span>
                    </button>
                    <button class="quick-action-card" onclick="window.handleDaisyQuickAction('tasks')">
                        <i class="fas fa-tasks"></i>
                        <span>Create Task List</span>
                    </button>
                    <button class="quick-action-card" onclick="window.handleDaisyQuickAction('analyze')">
                        <i class="fas fa-chart-line"></i>
                        <span>Analyze Progress</span>
                    </button>
                    <button class="quick-action-card" onclick="window.handleDaisyQuickAction('insights')">
                        <i class="fas fa-lightbulb"></i>
                        <span>Get Insights</span>
                    </button>
                </div>

                <!-- Chat Input -->
                <div class="daisy-chat-input">
                    <div class="input-container">
                        <input type="text" id="daisyInput" placeholder="Ask Daisy anything..." />
                        <button class="input-action-btn" onclick="window.attachFile()">
                            <i class="fas fa-paperclip"></i>
                        </button>
                        <button class="input-action-btn" onclick="window.toggleVoice()">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="send-btn" onclick="window.sendDaisyMessage()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right Column: AI Insights & Features -->
            <div class="daisy-right-column">
                <!-- AI Insights Widget -->
                <div class="daisy-insights-card">
                    <div class="insights-header">
                        <i class="fas fa-brain"></i>
                        <h4>AI Insights</h4>
                        <span class="insights-badge">Live</span>
                    </div>
                    <div class="insights-content">
                        <div class="insight-item">
                            <div class="insight-icon productivity">
                                <i class="fas fa-trending-up"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Productivity Boost</h5>
                                <p>You're 23% more productive this week! Your focus time has increased.</p>
                            </div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-icon schedule">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Optimal Schedule</h5>
                                <p>Best time for deep work: 9-11 AM. Consider blocking this time.</p>
                            </div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-icon tasks">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Task Pattern</h5>
                                <p>You complete 40% more tasks on Tuesdays. Plan important work accordingly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Smart Suggestions -->
                <div class="daisy-suggestions-card">
                    <div class="suggestions-header">
                        <i class="fas fa-magic"></i>
                        <h4>Smart Suggestions</h4>
                    </div>
                    <div class="suggestions-list">
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <p>Draft follow-up email for yesterday's client meeting</p>
                            <button class="suggestion-btn">Apply</button>
                        </div>
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-calendar"></i>
                                <span>Calendar</span>
                            </div>
                            <p>Block 2 hours tomorrow for the quarterly report</p>
                            <button class="suggestion-btn">Schedule</button>
                        </div>
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-users"></i>
                                <span>Team</span>
                            </div>
                            <p>Schedule team sync - it's been 5 days since last meeting</p>
                            <button class="suggestion-btn">Create</button>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="daisy-activity-card">
                    <div class="activity-header">
                        <i class="fas fa-history"></i>
                        <h4>Recent AI Actions</h4>
                    </div>
                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-time">2 min ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-tasks"></i>
                                <span>Created 3 tasks from meeting notes</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">15 min ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-chart-bar"></i>
                                <span>Generated weekly productivity report</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">1 hour ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-calendar-plus"></i>
                                <span>Scheduled team meeting for next week</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">2 hours ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-lightbulb"></i>
                                <span>Provided optimization suggestions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize Daisy AI functionality
    window.initializeDaisyAI();
}


