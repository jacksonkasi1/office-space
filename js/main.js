// Entry point for the modular Office Space application
import { initializeMobileMenu, toggleSidebar, closeSidebar } from './modules/mobileMenu.js';
import { initializeNavigation, handleNavigation, updateMainContent, updateActiveNavigation } from './modules/navigation.js';
import { initializeTabs, handleTabSwitch, renderHomeContent, renderDaisyAI } from './modules/tabs.js';
import { renderKanbanBoard, renderTasksContent, initializeKanbanBoard, initializeDragAndDrop, handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDragLeave, handleDrop, openTaskModal, closeTaskModal, addLabel, updateSelectedLabels, removeLabel, addAssignee, updateSelectedAssignees, removeAssignee, initializeTaskModal, handleTaskSubmit, createTaskCard, initializeTasksFeatures, updateTimeDisplay, addNewTaskToGroup, addNewNote } from './modules/tasks.js';
import { renderResourcesContent, renderBlogsContent } from './modules/resourcesBlogs.js';
import { initializeCollapsibleSections } from './modules/collapsible.js';
import { initializeProjectActions, createNewProjectDialog } from './modules/projects.js';
import { initializeCalendar, navigateMonth, updateCalendarDisplay, initializeCalendarPage, openMeetingModal, closeMeetingModal, saveMeeting, copyMeetingLink, addInvitee } from './modules/calendar.js';
import { initializeSpotlightTabs, showSpotlightContent } from './modules/spotlight.js';
import { initializeFAB, showQuickActions, handleQuickAction } from './modules/fab.js';
import { initializeDaisyAI, sendDaisyMessage, addDaisyMessage, generateDaisyResponse, handleDaisyQuickAction, applySuggestion, addRecentActivity, clearDaisyChat, attachFile, toggleVoice } from './modules/daisy.js';
import { renderInboxContent, initializeInboxFeatures, handleInboxAction, handleMessageAction, markAsRead, markAllAsRead, archiveMessage, replyToMessage, openMessageDetail, updateUnreadCount, showFilterOptions, applyFilter, showSearchBar, searchMessages, showEmptyState, showMessageFeedback, composeNewMessage } from './modules/inbox.js';
import { formatDate, debounce, initializeTheme } from './modules/utils.js';


// Expose module functions globally for cross-module calls
    window.addAssignee = addAssignee;
    window.addDaisyMessage = addDaisyMessage;
    window.addLabel = addLabel;
    window.addNewNote = addNewNote;
    window.addNewTaskToGroup = addNewTaskToGroup;
    window.addRecentActivity = addRecentActivity;
    window.applySuggestion = applySuggestion;
    window.attachFile = attachFile;
    window.clearDaisyChat = clearDaisyChat;
    window.closeSidebar = closeSidebar;
    window.closeTaskModal = closeTaskModal;
    window.createNewProjectDialog = createNewProjectDialog;
    window.createTaskCard = createTaskCard;
    window.debounce = debounce;
    window.formatDate = formatDate;
    window.generateDaisyResponse = generateDaisyResponse;
    window.handleDaisyQuickAction = handleDaisyQuickAction;
    window.handleDragEnd = handleDragEnd;
    window.handleDragEnter = handleDragEnter;
    window.handleDragLeave = handleDragLeave;
    window.handleDragOver = handleDragOver;
    window.handleDragStart = handleDragStart;
    window.handleDrop = handleDrop;
    window.handleNavigation = handleNavigation;
    window.handleQuickAction = handleQuickAction;
    window.handleTabSwitch = handleTabSwitch;
    window.handleTaskSubmit = handleTaskSubmit;
    window.initializeCalendar = initializeCalendar;
    window.initializeCalendarPage = initializeCalendarPage;
    window.openMeetingModal = openMeetingModal;
    window.closeMeetingModal = closeMeetingModal;
    window.saveMeeting = saveMeeting;
    window.copyMeetingLink = copyMeetingLink;
    window.addInvitee = addInvitee;
    window.initializeCollapsibleSections = initializeCollapsibleSections;
    window.initializeDaisyAI = initializeDaisyAI;
    window.initializeDragAndDrop = initializeDragAndDrop;
    window.initializeFAB = initializeFAB;
    window.initializeKanbanBoard = initializeKanbanBoard;
    window.initializeMobileMenu = initializeMobileMenu;
    window.initializeNavigation = initializeNavigation;
    window.initializeProjectActions = initializeProjectActions;
    window.initializeSpotlightTabs = initializeSpotlightTabs;
    window.initializeTabs = initializeTabs;
    window.initializeTaskModal = initializeTaskModal;
    window.initializeTasksFeatures = initializeTasksFeatures;
    window.initializeTheme = initializeTheme;
    window.navigateMonth = navigateMonth;
    window.openTaskModal = openTaskModal;
    window.removeAssignee = removeAssignee;
    window.removeLabel = removeLabel;
    window.renderBlogsContent = renderBlogsContent;
    window.renderDaisyAI = renderDaisyAI;
    window.renderHomeContent = renderHomeContent;
    window.renderKanbanBoard = renderKanbanBoard;
    window.renderResourcesContent = renderResourcesContent;
    window.renderTasksContent = renderTasksContent;
    window.sendDaisyMessage = sendDaisyMessage;
    window.showQuickActions = showQuickActions;
    window.showSpotlightContent = showSpotlightContent;
    window.toggleSidebar = toggleSidebar;
    window.toggleVoice = toggleVoice;
    window.updateCalendarDisplay = updateCalendarDisplay;
    window.updateMainContent = updateMainContent;
    window.updateActiveNavigation = updateActiveNavigation;
    window.updateSelectedAssignees = updateSelectedAssignees;
    window.updateSelectedLabels = updateSelectedLabels;
    window.updateTimeDisplay = updateTimeDisplay;
    window.renderInboxContent = renderInboxContent;
    window.initializeInboxFeatures = initializeInboxFeatures;
    window.handleInboxAction = handleInboxAction;
    window.handleMessageAction = handleMessageAction;
    window.markAsRead = markAsRead;
    window.markAllAsRead = markAllAsRead;
    window.archiveMessage = archiveMessage;
    window.replyToMessage = replyToMessage;
    window.openMessageDetail = openMessageDetail;
    window.updateUnreadCount = updateUnreadCount;
    window.showFilterOptions = showFilterOptions;
    window.applyFilter = applyFilter;
    window.showSearchBar = showSearchBar;
    window.searchMessages = searchMessages;
    window.showEmptyState = showEmptyState;
    window.showMessageFeedback = showMessageFeedback;
    window.composeNewMessage = composeNewMessage;
// Initialize global DOM references once the content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize global DOM references
    window.navItems = document.querySelectorAll('.nav-item a');
    window.tabBtns = document.querySelectorAll('.tab-btn');
    window.spotlightTabs = document.querySelectorAll('.spotlight-tab');
    window.sectionToggle = document.querySelector('.section-toggle');
    window.reminderList = document.querySelector('.reminder-list');
    window.addProjectCard = document.querySelector('.add-project');
    window.calendarNavLeft = document.querySelector('.calendar-nav .fa-chevron-left');
    window.calendarNavRight = document.querySelector('.calendar-nav .fa-chevron-right');
    window.dates = document.querySelectorAll('.date');

    // Save original content before any initialization
    const greeting = document.querySelector('.greeting');
    const dashboardContent = document.querySelector('.dashboard-content');
    if (greeting && dashboardContent && !window.originalContent) {
        window.originalContent = {
            greeting: greeting.innerHTML,
            dashboard: dashboardContent.innerHTML
        };
    }

    // Call initialization functions
    initializeMobileMenu();
    initializeNavigation();
    initializeTabs();
    initializeCollapsibleSections();
    initializeProjectActions();
    initializeCalendar();
    initializeSpotlightTabs();
    initializeFAB();
    // Optionally initialize other features
    initializeTheme();
});
