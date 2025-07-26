# 🏢 IntraSpace - AI-Powered Office Productivity Platform

[🚀 Live Demo](https://office-space-nine.vercel.app/) - [📖 Documentation](#features) - [🤝 Contributing](#contributing) - [📝 Blog Post](https://dev.to/jacksonkasi/intraspace-ai-powered-office-productivity-platform-frontend-challenge-office-edition-2m2n)

## 🎯 Overview

**IntraSpace** is a cutting-edge productivity platform that combines AI assistance, project management, team communication, and resource management into one seamless digital workspace. Built entirely with vanilla HTML, CSS, and JavaScript, it provides everything teams need to collaborate effectively while reducing app-switching and boosting productivity.

> 🏆 **Hackathon Submission** for [Frontend Challenge: Office Edition](https://dev.to/challenges/frontend/axero) sponsored by Axero

## ✨ Key Features

### 🤖 **Daisy AI Assistant**

- Smart productivity companion with real-time insights
- 23% productivity boost tracking
- Optimal work schedule recommendations (e.g., 9-11 AM deep work)
- Task pattern analytics and optimization suggestions

### 📋 **Multi-View Project Management**

- **Kanban Board**: Visual workflow with drag-and-drop functionality
- **Task Tracking**: Priority-based organization with due dates
- **Progress Analytics**: Real-time project completion metrics
- **Team Assignment**: Collaborative task management

### 💬 **Real-Time Team Chat**

- **Voice Messages**: Audio playback with waveform visualization
- **Interactive Polls**: Live voting system with instant results
- **Channel Organization**: Topic-based communication (#team-chat, #project-gizmo, etc.)
- **Direct Messaging**: One-on-one team conversations

### 📅 **Smart Calendar System**

- **Meeting Scheduling**: Integrated booking with conflict detection
- **Room Management**: Room 01, Room 02 booking system
- **Event Countdown**: Real-time "in 10 mins" notifications
- **Multi-View Support**: Monthly, weekly, and daily layouts

### 📚 **Resource Library**

- **Centralized Documents**: Smart categorization system
- **Template Management**: Reusable document templates
- **Popular Downloads**: Most accessed resources tracking
- **Star Rating System**: Community-driven resource quality

### 📊 **Analytics Dashboard**

- **Productivity Insights**: Performance metrics and trends
- **Team Statistics**: Collaboration and completion rates
- **Goal Tracking**: Progress monitoring with percentage completion
- **Time Analytics**: Work session tracking and optimization

### 📝 **Content Hub**

- **Internal Blogs**: Knowledge sharing platform
- **Featured Content**: Highlighted articles with reading time
- **Multi-Category Support**: Technology, Leadership, Business, Finance
- **Author Profiles**: Content creator recognition

### ⚡ **Time Tracking**

- **Active Timers**: Real-time work session monitoring
- **History Tracking**: Previous task completion records
- **Productivity Patterns**: Weekly and daily performance insights

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Development**: Vite.js for modern development workflow
- **Styling**: CSS Grid, Flexbox, Custom Animations
- **Storage**: Local Storage for user preferences
- **Architecture**: Modular JavaScript with event-driven design
- **Deployment**: Vercel
- **Performance**: Optimized DOM manipulation and lazy loading

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm/yarn

### Installation & Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/jacksonkasi1/office-space.git
   cd office-space
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3001
   ```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📱 Usage

### Navigation

- **Sidebar Navigation**: Access all 9 integrated modules
- **Top Tabs**: Quick switching between Home, Tasks, Resources, Blogs
- **User Profile**: Online status and settings management

### Key Workflows

1. **Start Your Day**: Check dashboard reminders and calendar
2. **Manage Projects**: Use Kanban board for task organization
3. **Team Communication**: Utilize chat for real-time collaboration
4. **AI Insights**: Leverage Daisy AI for productivity optimization
5. **Resource Access**: Find documents and templates quickly

## 🏗️ Project Structure

```
office-space/
├── index.html              # Main entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── styles/
│   ├── main.css            # Global styles
│   ├── components/         # Component-specific styles
│   └── animations.css      # Custom animations
├── scripts/
│   ├── app.js             # Main application logic
│   ├── modules/           # Feature modules
│   │   ├── ai-assistant.js
│   │   ├── project-board.js
│   │   ├── team-chat.js
│   │   └── calendar.js
│   └── utils/             # Utility functions
├── assets/
│   ├── images/            # UI images and icons
│   └── audio/             # Sound files for notifications
└── pages/                 # Individual page templates
    ├── dashboard.html
    ├── tasks.html
    ├── chat.html
    └── calendar.html
```

## 🎨 Design Philosophy

- **Unified Experience**: Consistent design language across all modules
- **Information Hierarchy**: Clear visual priorities for user guidance
- **Performance Focused**: Optimized animations and efficient DOM updates
- **Accessibility First**: ARIA labels, keyboard navigation, screen reader support
- **Mobile Responsive**: Seamless experience across all devices

## 🔧 Customization

### Theme Configuration

```javascript
// In scripts/config.js
const themeConfig = {
  primaryColor: "#6366f1",
  secondaryColor: "#8b5cf6",
  accentColor: "#06b6d4",
};
```

### Feature Toggles

```javascript
// Enable/disable features
const features = {
  aiAssistant: true,
  voiceMessages: true,
  polling: true,
  timeTracking: true,
};
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow vanilla JavaScript best practices
- Maintain consistent code formatting
- Add comments for complex functionality
- Test across different browsers
- Ensure responsive design compliance

## 🎖️ Awards & Recognition

- 🏆 **Frontend Challenge: Office Edition** - Hackathon Submission
- 📝 **Featured on DEV.to** - [Read the blog post](https://dev.to/jacksonkasi/intraspace-ai-powered-office-productivity-platform-frontend-challenge-office-edition-2m2n)
- ⭐ **Community Recognition** - Innovative AI integration approach

## 📊 Performance Metrics

- **Load Time**:

**Built with ❤️ using Vanilla HTML, CSS & JavaScript + Vite.js**

[🌐 Live Demo](https://office-space-nine.vercel.app/) | [📝 Blog Post](https://dev.to/jacksonkasi/intraspace-ai-powered-office-productivity-platform-frontend-challenge-office-edition-2m2n) | [⭐ Star on GitHub](https://github.com/jacksonkasi1/office-space)
