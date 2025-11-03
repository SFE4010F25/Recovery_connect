// Recovery Connect - Main JavaScript

// Mock Data
const users = {
  sarah: {
    id: 1,
    name: "Sarah Miller",
    avatar: "images/avatar-sarah.jpg",
    affiliation: "Recovery Center",
    daysSober: 75,
    sobrietyGoal: 100,
  },
};

const dailyQuotes = [
  "The only way out is through.",
  "One day at a time.",
  "Progress, not perfection.",
  "You are stronger than you think.",
  "Recovery is a journey, not a destination.",
];

const helplines = [
  {
    id: 1,
    name: "National Crisis and Suicide Lifeline",
    number: "988",
    description: "24/7 crisis support",
  },
  {
    id: 2,
    name: "Substance Abuse and Mental Health Services Administration",
    shortName: "SAMHSA",
    number: "1-800-662-HELP (4357)",
    description: "Treatment referral and information",
  },
  {
    id: 3,
    name: "The Trevor Project",
    number: "1-866-488-7386",
    description: "LGBTQ+ crisis support",
  },
  {
    id: 4,
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 text-based crisis support",
  },
  {
    id: 5,
    name: "The Jed Foundation",
    number: "1-800-273-8255",
    description: "Mental health support for teens and young adults",
  },
  {
    id: 6,
    name: "The Steve Fund",
    number: "1-800-273-8255",
    description: "Mental health support for students of color",
  },
];

const articles = [
  {
    id: 1,
    title: "Mindfulness Techniques for Stress Reduction",
    description: "Learn how mindfulness can help manage stress and promote mental well-being.",
    icon: "🧘",
  },
  {
    id: 2,
    title: "Understanding Group Therapy Dynamics",
    description: "Explore the benefits of group therapy and how it supports recovery.",
    icon: "👥",
  },
  {
    id: 3,
    title: "Nutrition and Recovery: A Balanced Approach",
    description: "Discover the role of nutrition in maintaining sobriety and overall health.",
    icon: "🥗",
  },
  {
    id: 4,
    title: "Understanding Addiction",
    description: "Learn about the science of addiction and its impact on the brain.",
    icon: "🧠",
  },
  {
    id: 5,
    title: "The Road to Recovery",
    description: "Explore the steps involved in the recovery process and what to expect.",
    icon: "🛤️",
  },
  {
    id: 6,
    title: "Staying Sober",
    description: "Discover strategies for maintaining sobriety and preventing relapse.",
    icon: "💪",
  },
];

const copingStrategies = [
  {
    id: 1,
    title: "Building a Support Network",
    description: "Connect with others in recovery for mutual support and encouragement.",
    icon: "👥",
  },
  {
    id: 2,
    title: "Engaging in Outdoor Activities",
    description: "Spend time in nature to reduce stress and improve your mood.",
    icon: "☀️",
  },
  {
    id: 3,
    title: "Practicing Relaxation Techniques",
    description: "Learn techniques like deep breathing and progressive muscle relaxation.",
    icon: "🌳",
  },
  {
    id: 4,
    title: "Mindfulness and Meditation",
    description: "Practice mindfulness and meditation to manage stress.",
    icon: "🧘",
  },
  {
    id: 5,
    title: "Healthy Lifestyle",
    description: "Maintain a healthy lifestyle with regular exercise and balanced diet.",
    icon: "💪",
  },
];

const conversations = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    avatar: "images/avatar-emily.png",
    lastMessage: "Great job, Olivia! Keep up the good work.",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    name: "Support Group",
    avatar: "images/avatar-sarah.jpg",
    lastMessage: "Meeting tomorrow at 3 PM",
    timestamp: "Yesterday",
  },
  {
    id: 3,
    name: "Ethan Williams",
    avatar: "images/avatar-counselor.jpg",
    lastMessage: "Thanks for the advice!",
    timestamp: "2 days ago",
  },
  {
    id: 4,
    name: "Rehab Center Staff",
    avatar: "images/avatar-emily.png",
    lastMessage: "Your next appointment is scheduled",
    timestamp: "3 days ago",
  },
];

const chatMessages = [
  {
    id: 1,
    senderId: 2,
    senderName: "Dr. Emily Carter",
    senderAvatar: "images/avatar-emily.png",
    message: "Hi Olivia, how are you feeling today?",
  },
  {
    id: 2,
    senderId: 1,
    senderName: "Sarah",
    senderAvatar: "images/avatar-sarah.jpg",
    message: "I'm doing okay, thank you. Just had a tough craving earlier.",
  },
  {
    id: 3,
    senderId: 2,
    senderName: "Dr. Emily Carter",
    senderAvatar: "images/avatar-emily.png",
    message: "That's understandable. Remember your coping strategies. Have you tried any of them?",
  },
  {
    id: 4,
    senderId: 1,
    senderName: "Sarah",
    senderAvatar: "images/avatar-sarah.jpg",
    message: "Yes, I did some deep breathing and called my sponsor. It helped.",
  },
  {
    id: 5,
    senderId: 2,
    senderName: "Dr. Emily Carter",
    senderAvatar: "images/avatar-emily.png",
    message: "Great job, Olivia! Keep up the good work. Remember, we're here for you.",
  },
];

// Authentication
function isAuthenticated() {
  return localStorage.getItem("isAuthenticated") === "true";
}

function login(username, password) {
  if (username && password) {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("currentUser", username);
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function getCurrentUser() {
  return localStorage.getItem("currentUser") || "User";
}

// Simple Router
function checkAuth() {
  const publicPages = ["index.html", "login.html", "register.html", ""];
  const currentPage = window.location.pathname.split("/").pop();
  
  if (!isAuthenticated() && !publicPages.includes(currentPage)) {
    window.location.href = "login.html";
  }
}

// Toast Notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${type === "error" ? "#f44336" : type === "success" ? "#4caf50" : "#2196f3"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Tab functionality
function initTabs() {
  const tabTriggers = document.querySelectorAll(".tab-trigger");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetTab = trigger.dataset.tab;
      
      // Remove active class from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      
      // Add active class to clicked trigger and corresponding content
      trigger.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  initTabs();
});

// Export for use in other files
window.RecoveryConnect = {
  users,
  dailyQuotes,
  helplines,
  articles,
  copingStrategies,
  conversations,
  chatMessages,
  isAuthenticated,
  login,
  logout,
  getCurrentUser,
  showToast,
  initTabs,
};
