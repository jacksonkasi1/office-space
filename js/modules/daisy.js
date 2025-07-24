// Module: daisy
export function initializeDaisyAI() {
    // Initialize chat input
    const daisyInput = document.getElementById('daisyInput');
    if (daisyInput) {
        daisyInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendDaisyMessage();
            }
        });
    }
    
    // Initialize suggestion buttons
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestion = this.parentElement.querySelector('p').textContent;
            applySuggestion(suggestion);
        });
    });
    
    // Initialize clear chat
    const clearBtn = document.querySelector('.daisy-action-btn[title="Clear Chat"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearDaisyChat);
    }
    
    // Auto-scroll chat to bottom
    setTimeout(() => {
        const chatContainer = document.querySelector('.daisy-chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, 100);
}


export function sendDaisyMessage() {
    const input = document.getElementById('daisyInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addDaisyMessage(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateDaisyResponse(message);
        addDaisyMessage(response, 'bot');
    }, 1500);
}


export function addDaisyMessage(content, sender) {
    const chatContainer = document.querySelector('.daisy-chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `daisy-message daisy-${sender}`;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>${content}</p>
                </div>
                <span class="message-time">${time}</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-bubble">
                    <p>${content}</p>
                </div>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


export function generateDaisyResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('task') || message.includes('todo')) {
        return "I can help you create and manage tasks! Would you like me to add this to your Kanban board or create a structured task list? I can also set priorities and due window.dates.";
    } else if (message.includes('meeting') || message.includes('schedule')) {
        return "I'll help you schedule that meeting! I can suggest optimal times based on your calendar, send invites to participants, and even prepare an agenda. What type of meeting are you planning?";
    } else if (message.includes('report') || message.includes('analysis')) {
        return "I can generate detailed reports and analytics for you! I have access to your productivity data, project progress, and team performance metrics. What specific insights would you like to see?";
    } else if (message.includes('help') || message.includes('what can you do')) {
        return "I'm here to boost your productivity! I can help with task management, meeting scheduling, document creation, data analysis, team coordination, and much more. Try asking me to create a task, schedule a meeting, or analyze your weekly progress!";
    } else if (message.includes('time') || message.includes('productivity')) {
        return "Based on your activity patterns, I've noticed you're most productive between 9-11 AM. I recommend blocking this time for your most important work. Would you like me to analyze your weekly productivity trends?";
    } else {
        return "That's an interesting question! I'm continuously learning to better assist you. While I process your request, you can try using the quick action buttons below or ask me about tasks, meetings, or productivity insights.";
    }
}


export function handleDaisyQuickAction(action) {
    const responses = {
        'schedule': "Let me help you schedule a meeting! I'll check your calendar for optimal times. What's the meeting about and who should attend?",
        'tasks': "I'll create a task list for you! What project or area would you like to focus on? I can organize tasks by priority, deadline, or category.",
        'analyze': "Let me analyze your current progress! I can see you've completed 73% of your weekly goals and your team productivity is up 15% this month. Would you like a detailed breakdown?",
        'insights': "Here are your latest productivity insights: You're most focused on Tuesday mornings, respond to emails fastest on Wednesdays, and complete creative tasks best in the afternoon. Need specific recommendations?"
    };
    
    addDaisyMessage(responses[action], 'bot');
}


export function applySuggestion(suggestion) {
    addDaisyMessage(`Applied suggestion: "${suggestion}". I'll take care of that for you right away!`, 'bot');
    
    // Add to recent activity
    setTimeout(() => {
        addRecentActivity(suggestion);
    }, 1000);
}


export function addRecentActivity(action) {
    const activityList = document.querySelector('.activity-list');
    const newActivity = document.createElement('div');
    newActivity.className = 'activity-item';
    newActivity.innerHTML = `
        <div class="activity-time">Just now</div>
        <div class="activity-desc">
            <i class="fas fa-check"></i>
            <span>${action}</span>
        </div>
    `;
    
    activityList.insertBefore(newActivity, activityList.firstChild);
    
    // Remove oldest activity if more than 5
    if (activityList.children.length > 5) {
        activityList.removeChild(activityList.lastChild);
    }
}


export function clearDaisyChat() {
    const chatContainer = document.querySelector('.daisy-chat-container');
    chatContainer.innerHTML = `
        <div class="daisy-message daisy-bot">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>Chat cleared! I'm ready to help you with anything you need. How can I assist you today?</p>
                </div>
                <span class="message-time">Just now</span>
            </div>
        </div>
    `;
}


export function attachFile() {
    addDaisyMessage("File attachment feature coming soon! For now, you can describe what you'd like to work on and I'll help you organize it.", 'bot');
}


export function toggleVoice() {
    addDaisyMessage("Voice chat feature is being prepared! I'll be able to listen and respond with voice soon. For now, let's continue with text chat!", 'bot');
}

// Utility Functions

